<template>
  <div v-if="userProfile === 'admin'">
    <q-table
      flat
      square
      hide-bottom
      class="my-sticky-dynamic q-ma-lg"
      title="Campañas"
      :data="campanhas"
      :columns="columns"
      :loading="loading"
      row-key="id"
      :pagination.sync="pagination"
      :rows-per-page-options="[0]"
    >
      <template v-slot:top-right>
        <q-btn
          class="q-mr-md"
          color="black"
          icon="refresh"
          rounded
          @click="listarCampanhas"
        >
          <q-tooltip>
            Actualizar listado
          </q-tooltip>
        </q-btn>
        <q-btn
          rounded
          color="primary"
          label="Agregar"
          @click="campanhaEdicao = {}; modalCampanha = true"
        />
      </template>
      <template v-slot:body-cell-color="props">
        <q-td class="text-center">
          <div
            class="q-pa-sm rounded-borders"
            :style="`background: ${props.row.color}`"
          >
            {{ props.row.color }}
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-isActive="props">
        <q-td class="text-center">
          <q-icon
            size="24px"
            :name="props.value ? 'mdi-check-circle-outline' : 'mdi-close-circle-outline'"
            :color="props.value ? 'positive' : 'negative'"
          />
        </q-td>
      </template>
      <template v-slot:body-cell-acoes="props">
        <q-td class="text-center">
          <q-btn
            flat
            round
            icon="mdi-account-details-outline"
            @click="contatosCampanha(props.row)"
          >
            <q-tooltip>
              Lista de Contactos de Campaña
            </q-tooltip>
          </q-btn>
          <q-btn
            flat
            round
            v-if="['pending', 'canceled'].includes(props.row.status)"
            icon="mdi-calendar-clock"
            @click="iniciarCampanha(props.row)"
          >
            <q-tooltip>
              Programar Envio
            </q-tooltip>
          </q-btn>
          <q-btn
            flat
            round
            v-if="['scheduled', 'processing'].includes(props.row.status)"
            icon="mdi-close-box-multiple"
            @click="cancelarCampanha(props.row)"
          >
            <q-tooltip>
              Cancelar Campaña
            </q-tooltip>
          </q-btn>
          <q-btn
            flat
            round
            icon="edit"
            @click="editarCampanha(props.row)"
          >
            <q-tooltip>
              Editar Campaña
            </q-tooltip>
          </q-btn>
          <q-btn
            flat
            round
            icon="mdi-delete"
            @click="deletarCampanha(props.row)"
          >
            <q-tooltip>
              Eliminar Campaña
            </q-tooltip>
          </q-btn>
        </q-td>
      </template>
    </q-table>
    <ModalCampanha
      v-if="modalCampanha"
      :modalCampanha.sync="modalCampanha"
      :campanhaEdicao.sync="campanhaEdicao"
      @modal-campanha:criada="campanhaCriada"
      @modal-campanha:editada="campanhaEditada"
    />
  </div>
</template>

<script>
import { CancelarCampanha, DeletarCampanha, IniciarCampanha, ListarCampanhas } from 'src/service/campanhas'
import ModalCampanha from './ModalCampanha'
import { format, parseISO, startOfDay } from 'date-fns'

export default {
  name: 'Campanhas',
  components: {
    ModalCampanha
  },
  data () {
    return {
      userProfile: 'user',
      campanhaEdicao: {},
      modalCampanha: false,
      campanhas: [],
      pagination: {
        rowsPerPage: 40,
        rowsNumber: 0,
        lastIndex: 0
      },
      loading: false,
      columns: [
        { name: 'id', label: '#', field: 'id', align: 'left' },
        { name: 'name', label: 'Campaña', field: 'name', align: 'left' },
        { name: 'start', label: 'Início', field: 'start', align: 'center', format: (v) => format(parseISO(v), 'dd/MM/yyyy HH:mm') },
        {
          name: 'status',
          label: 'Estado',
          field: 'status',
          align: 'center',
          format: (v) => v ? this.status[v] : ''
        },
        { name: 'contactsCount', label: 'Cantidad de contactos', field: 'contactsCount', align: 'center' },
        { name: 'pendentesEnvio', label: 'A Enviar', field: 'pendentesEnvio', align: 'center' },
        { name: 'pendentesEntrega', label: 'A Entregar', field: 'pendentesEntrega', align: 'center' },
        { name: 'recebidas', label: 'Recibidas', field: 'recebidas', align: 'center' },
        { name: 'lidas', label: 'Leídas', field: 'lidas', align: 'center' },
        { name: 'acoes', label: 'Acciones', field: 'acoes', align: 'center' }
      ],
      status: {
        pending: 'Pendiente',
        scheduled: 'Programada',
        processing: 'Procesando',
        canceled: 'Cancelada',
        finished: 'Finalizada'
      }
    }
  },
  methods: {
    async listarCampanhas () {
      const { data } = await ListarCampanhas()
      this.campanhas = data
    },
    isValidDate (v) {
      return startOfDay(new Date(parseISO(v))).getTime() >= startOfDay(new Date()).getTime()
    },
    campanhaCriada (campanha) {
      this.listarCampanhas()
    },
    campanhaEditada (campanha) {
      this.listarCampanhas()
    },
    editarCampanha (campanha) {
      if (campanha.status !== 'pending' && campanha.status !== 'canceled') {
        this.$notificarErro('Solo puedes editar campañas que estén pendientes o canceladas..')
      }
      this.campanhaEdicao = {
        ...campanha,
        start: campanha.start, // format(parseISO(campanha.start), 'yyyy-MM-dd'),
        end: campanha.start // format(parseISO(campanha.start), 'yyyy-MM-dd')
      }
      this.modalCampanha = true
    },
    deletarCampanha (campanha) {
      if (campanha.status !== 'pending' && campanha.status !== 'canceled' && campanha.contactsCount) {
        this.$notificarErro('Solo puedes eliminar campañas que estén pendientes o canceladas y que no tengan ningún contacto vinculado..')
      }
      this.$q.dialog({
        title: 'Atención!!',
        message: `¿Realmente quieres eliminar la Campaña? "${campanha.tag}"?`,
        cancel: {
          label: 'No',
          color: 'primary',
          push: true
        },
        ok: {
          label: 'Si',
          color: 'negative',
          push: true
        },
        persistent: true
      }).onOk(() => {
        this.loading = true
        DeletarCampanha(campanha)
          .then(res => {
            let newCampanhas = [...this.campanhas]
            newCampanhas = newCampanhas.filter(f => f.id !== campanha.id)
            this.campanhas = [...newCampanhas]
            this.$notificarSucesso(`Campanha ${campanha.tag} deletada!`)
          })
        this.loading = false
      })
    },
    contatosCampanha (campanha) {
      this.$router.push({
        name: 'contatos-campanha',
        params: {
          campanhaId: campanha.id,
          campanha
        }
      })
    },
    cancelarCampanha (campanha) {
      this.$q.dialog({
        title: 'Atención!',
        message: `¿Realmente quieres eliminar la Campaña? "${campanha.name}"?`,
        cancel: {
          label: 'No',
          color: 'primary',
          push: true
        },
        ok: {
          label: 'Si',
          color: 'negative',
          push: true
        },
        persistent: true
      }).onOk(() => {
        CancelarCampanha(campanha.id)
          .then(res => {
            this.$notificarSucesso('Campaña cancelada.')
            this.listarCampanhas()
          }).catch(err => {
            this.$notificarErro('No se puede cancelar la campaña.', err)
          })
      })
    },
    iniciarCampanha (campanha) {
      if (!this.isValidDate(campanha.start)) {
        this.$notificarErro('No es posible programar una campaña con una fecha anterior a la actual')
      }

      if (campanha.contactsCount == 0) {
        this.$notificarErro('Es necesario tener contactos vinculados para programar la campaña.')
      }

      if (campanha.status !== 'pending' && campanha.status !== 'canceled') {
        this.$notificarErro('Solo puedes programar campañas que estén pendientes o canceladas..')
      }

      IniciarCampanha(campanha.id).then(res => {
        this.$notificarSucesso('Campaña iniciada.')
        this.listarCampanhas()
      }).catch(err => {
        this.$notificarErro('No se puede iniciar la campaña.', err)
      })
    }
  },
  mounted () {
    this.userProfile = localStorage.getItem('profile')
    this.listarCampanhas()
  }
}

</script>

<style lang="scss" scoped>
</style>
