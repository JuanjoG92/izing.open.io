<template>
  <div>
    <q-item>
      <q-item-section avatar>
        <q-icon v-if="item.status == 'qrcode'"
          color="primary"
          name="mdi-crop-free"
          size="2.5em" />
        <q-icon v-if="item.status == 'DISCONNECTED'"
          color="negative"
          size="2.5em"
          name="mdi-wifi-alert" />
        <q-icon name="mdi-wifi-arrow-up-down"
          color="green-8"
          size="2.5em"
          v-if="item.status == 'CONNECTED'" />
        <q-icon v-if="['PAIRING', 'TIMEOUT'].includes(item.status)"
          color="negative"
          size="2.5em"
          name="mdi-wifi-strength-1-alert" />
        <q-spinner v-if="item.status == 'OPENING'"
          color="green-7"
          size="3em"
          :thickness="2" />
      </q-item-section>
      <q-item-section>
        <q-item-label v-if="item.status == 'qrcode'">
          <span class="text-weight-medium"> Esperando lectura de QR Code </span>
          <span class="row col"> Haz clic en el botón 'CÓDIGO QR' y escanea el código QR con tu teléfono móvil para iniciar la sesión
          </span>
        </q-item-label>
        <q-item-label v-if="item.status == 'DISCONNECTED'">
          <span class="text-weight-medium"> No se pudo iniciar la comunicación para este canal. </span>
          <span class="row col"
            v-if="item.type === 'whatsapp'"> Asegúrese de que su teléfono esté conectado a Internet e intente
 de nuevo, o solicitar un nuevo Código QR </span>
          <span class="row col"
            v-if="item.type === 'telegram'"> Intente conectarse nuevamente. Si el error persiste, confirme que el token está correcto.</span>
          <span class="row col"
            v-if="item.type === 'instagram'"> Intente conectarse nuevamente. Si el error persiste, confirme que el
 Las credenciales son correctas.</span>
        </q-item-label>
        <q-item-label v-if="item.status == 'CONNECTED'">
          <span class="text-weight-medium"> Conexión establecida! </span>
        </q-item-label>
        <q-item-label v-if="['PAIRING', 'TIMEOUT'].includes(item.status)">
          <span class="text-weight-medium"> La conexión fué perdida </span>
          <span class="row col"> Asegúrese de que su teléfono esté conectado a Internet y que WhatsApp esté ejecutándose.
 abrir, o haga clic en el botón 'Desconectar' para obtener un nuevo código QR </span>
        </q-item-label>
        <q-item-label v-if="item.status == 'OPENING'">
          <span class="text-weight-medium"> Estableciendo conexión. </span>
          <span class="row col"> Esto puede demorar un poco... </span>
        </q-item-label>
        <q-item-label caption>
          Última Atualización: {{ formatarData(item.updatedAt, 'dd/MM/yyyy HH:mm') }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>
<script>
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt-BR/index'

export default {
  name: 'ItemStatusChannel',
  props: {
    item: {
      type: Object,
      default: () => { }
    }
  },
  methods: {
    formatarData (data, formato) {
      return format(parseISO(data), formato, { locale: pt })
    }
  }
}
</script>
