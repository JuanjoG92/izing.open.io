<template>
  <q-dialog
    :value="modalChatFlow"
    @hide="fecharModal"
    @show="abrirModal"
    persistent
  >
    <q-card
      style="width: 500px"
      class="q-pa-lg"
    >
      <q-card-section>
        <div class="text-h6">{{ chatFlow.isDuplicate ? 'Duplicar' : chatFlowEdicao.id ? 'Editar': 'Crear' }} Flujo <span v-if="chatFlow.isDuplicate"> (Nome: {{ chatFlowEdicao.name }}) </span></div>
        <div
          v-if="chatFlow.isDuplicate"
          class="text-subtitle1"
        > Nome: {{ chatFlowEdicao.name }} </div>
      </q-card-section>
      <q-card-section>
        <q-input
          class="row col"
          outlined
          rounded
          dense
          v-model="chatFlow.name"
          label="Descripción"
        />
        <div class="row col q-mt-md">
          <q-input
            clearable
            class="full-width"
            rounded
            dense
            outlined
            v-model="chatFlow.celularTeste"
            label="Número para pruebas"
            hint="Déjelo limpio para que funcione la respuesta automática. De lo contrario, solo funcionará para el número proporcionado aquí..."
          />
        </div>
        <div class="row col q-mt-md">
          <q-checkbox
            v-model="chatFlow.isActive"
            label="Activo"
          />
        </div>
      </q-card-section>
      <q-card-actions
        align="right"
        class="q-mt-md"
      >
        <q-btn
          rounded
          label="Cancelar"
          color="negative"
          v-close-popup
          class="q-mr-md"
        />
        <q-btn
          rounded
          label="Guardar"
          color="positive"
          @click="handleAutoresposta"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<script>
const userId = +localStorage.getItem('userId')
import { CriarChatFlow, UpdateChatFlow } from 'src/service/chatFlow'
import { getDefaultFlow } from 'src/components/ccFlowBuilder/defaultFlow'

export default {
  name: 'ModalNovoChatFlow',
  props: {
    modalChatFlow: {
      type: Boolean,
      default: false
    },
    chatFlowEdicao: {
      type: Object,
      default: () => {
        return { id: null }
      }
    }
  },
  data () {
    return {
      chatFlow: {
        name: null,
        userId,
        celularTeste: null,
        isActive: true
      }
      // options: [
      //   { value: 0, label: 'Entrada (Creación de tickets)' },
      //   { value: 1, label: 'Cierre (Resolución de Ticket)' }
      // ]
    }
  },
  methods: {
    abrirModal () {
      if (this.chatFlowEdicao.id) {
        this.chatFlow = {
          ...this.chatFlowEdicao,
          userId
        }
      } else {
        this.chatFlow = {
          name: null,
          action: 0,
          userId,
          celularTeste: null,
          isActive: true
        }
      }
    },
    fecharModal () {
      this.chatFlow = {
        name: null,
        action: 0,
        userId,
        celularTeste: null,
        isActive: true
      }
      this.$emit('update:chatFlowEdicao', { id: null })
      this.$emit('update:modalChatFlow', false)
    },
    async handleAutoresposta () {
      if (this.chatFlow.id && !this.chatFlow?.isDuplicate) {
        const { data } = await UpdateChatFlow(this.chatFlow)
        this.$notificarSucesso('Flujo editado.')
        this.$emit('chatFlow:editado', data)
      } else {
        // setar id = null para rotina de duplicação de fluxo
        const flow = { ...getDefaultFlow(), ...this.chatFlow, id: null }
        const { data } = await CriarChatFlow(flow)
        this.$notificarSucesso('Nuevo flujo creado.')
        this.$emit('chatFlow:criada', data)
      }
      this.fecharModal()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
