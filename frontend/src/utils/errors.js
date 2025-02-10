const errors = [
  {
    error: 'ERR_SESSION_EXPIRED',
    description: 'Tu conexión ha expirado.',
    detail: 'La validez de tu conexión ha expirado. Es necesario iniciar sesión nuevamente.'
  },
  {
    error: 'ERR_API_CONFIG_NOT_FOUND',
    description: 'Configuraciones de API no encontradas.',
    detail: 'Actualiza la página y vuelve a intentarlo. Si el error persiste, contacta con el soporte.'
  },
  {
    error: 'ERR_NO_CONTACT_FOUND',
    description: 'Contacto no encontrado en el sistema.',
    detail: 'Verifica si el número está guardado correctamente en el sistema o registra el contacto.'
  },
  {
    error: 'ERR_DUPLICATED_CONTACT',
    description: 'El contacto ya está registrado en el sistema.',
    detail: 'Ubica el contacto ya registrado.'
  },
  {
    error: 'ERR_CONTACT_TICKETS_REGISTERED',
    description: 'El contacto no puede ser eliminado.',
    detail: 'El contacto tiene registros de atención y no puede ser eliminado para garantizar la integridad de la información.'
  },
  {
    error: 'ERR_CREATING_MESSAGE',
    description: 'No se pudo crear el mensaje.',
    detail: 'Verifica si la conexión con WhatsApp está activa o si el mensaje no infringe los términos de WhatsApp.'
  },
  {
    error: 'ERR_NO_TICKET_FOUND',
    description: 'Atención no encontrada.',
    detail: 'No se encontró la atención indicada. Actualiza la página (F5) e inténtalo nuevamente. Consulta con soporte si el error persiste.'
  },
  {
    error: 'ERR_AUTO_REPLY_RELATIONED_TICKET',
    description: 'No es posible eliminar el registro.',
    detail: 'El flujo ya fue utilizado en varias atenciones.'
  },
  {
    error: 'ERR_NO_AUTO_REPLY_FOUND',
    description: 'Flujo no encontrado.',
    detail: 'Verifica si el flujo realmente existe. Actualiza la página e inténtalo nuevamente.'
  },
  {
    error: 'ERR_NO_STEP_AUTO_REPLY_FOUND',
    description: 'No se encontró una etapa para el flujo.',
    detail: 'Verifica el registro de las etapas del chatbot. Confirma que la etapa realmente existe.'
  },
  {
    error: 'ERR_CAMPAIGN_CONTACTS_NOT_EXISTS_OR_NOT_ACESSIBLE',
    description: 'La campaña no existe o no está accesible.',
    detail: 'Verifica si la campaña aún existe o si está disponible.'
  },
  {
    error: 'ERROR_CAMPAIGN_NOT_EXISTS',
    description: 'Campaña no encontrada.',
    detail: 'Verifica si la campaña aún existe o si está disponible.'
  },
  {
    error: 'ERR_NO_CAMPAIGN_FOUND',
    description: 'Campaña no encontrada.',
    detail: 'Verifica si la campaña aún existe o si está disponible.'
  },
  {
    error: 'ERR_NO_UPDATE_CAMPAIGN_NOT_IN_CANCELED_PENDING',
    description: 'La campaña no está cancelada o pendiente.',
    detail: 'Solo se pueden modificar campañas con los estados mencionados.'
  },
  {
    error: 'ERROR_CAMPAIGN_DATE_NOT_VALID',
    description: 'Fecha de programación inválida.',
    detail: 'La fecha debe ser mayor que la fecha actual.'
  },
  {
    error: 'ERR_NO_CAMPAIGN_CONTACTS_NOT_FOUND',
    description: 'La campaña no existe.',
    detail: 'Campaña no encontrada. Actualiza la página.'
  },
  {
    error: 'ERR_CAMPAIGN_CONTACTS_NOT_EXISTS',
    description: 'La campaña no existe. Contactos no vinculados.',
    detail: 'Posiblemente la campaña ya fue eliminada y no existen contactos vinculados. Actualice la página.'
  },
  {
    error: 'ERR_CAMPAIGN_CONTACTS',
    description: 'Problema con la campaña.',
    detail: 'Actualice la página e intente nuevamente.'
  },
  {
    error: 'ERR_NO_FAST_REPLY_FOUND',
    description: 'Respuesta rápida no localizada.',
    detail: 'Verifique si el registro realmente existe. Actualice la página e intente nuevamente.'
  },
  {
    error: 'ERR_FAST_REPLY_EXISTS',
    description: 'La respuesta rápida no existe.',
    detail: 'Posiblemente el registro ya fue eliminado. Actualice la página.'
  },
  {
    error: 'ERR_NO_QUEUE_FOUND',
    description: 'Fila no localizada.',
    detail: 'Posiblemente el registro ya fue eliminado. Actualice la página.'
  },
  {
    error: 'ERR_QUEUE_TICKET_EXISTS',
    description: 'La fila tiene atenciones vinculadas.',
    detail: 'No es posible eliminar el registro para mantener la integridad de la información.'
  },
  {
    error: 'ERR_NO_TAG_FOUND',
    description: 'Etiqueta no localizada.',
    detail: 'Posiblemente el registro ya fue eliminado. Actualice la página.'
  },
  {
    error: 'ERR_TAG_CONTACTS_EXISTS',
    description: 'La etiqueta tiene contactos vinculados.',
    detail: 'No es posible eliminar el registro para mantener la integridad de la información.'
  },
  {
    error: 'ERR_NO_SETTING_FOUND',
    description: 'Configuración no encontrada.',
    detail: 'Actualice la página e intente nuevamente. Consulte el soporte si el error persiste.'
  },
  {
    error: 'ERR_NO_TENANT_FOUND',
    description: 'No se encontró una empresa registrada o activa.',
    detail: 'Actualice la página e intente nuevamente. Consulte el soporte si el error persiste.'
  },
  {
    error: 'ERR_CREATING_TICKET',
    description: 'No fue posible crear la atención.',
    detail: 'Actualice la página e intente nuevamente. Consulte el soporte si el error persiste.'
  },
  {
    error: 'ERR_NO_STATUS_SELECTED',
    description: 'Ningún estado seleccionado.',
    detail: 'Es necesario seleccionar un estado para listar las atenciones.'
  },
  {
    error: 'ERR_INVALID_CREDENTIALS',
    description: 'Usuario y/o contraseña inválidos.',
    detail: 'Los datos de acceso son incorrectos. Si el problema persiste, contacte al administrador del sistema para restablecer las credenciales.'
  },
  {
    error: 'ERR_NO_USER_FOUND',
    description: 'Usuario no encontrado.',
    detail: 'Verifique si el usuario realmente existe. Actualice la página si es necesario.'
  },
  {
    error: 'ERR_WAPP_INVALID_CONTACT',
    description: 'Número de contacto inválido.',
    detail: 'El número no está vinculado a una cuenta de WhatsApp.'
  },
  {
    error: 'ERR_WAPP_CHECK_CONTACT',
    description: 'Error al validar el contacto en WhatsApp.',
    detail: 'Verifique si la conexión con WhatsApp está activa. Si es necesario, actualice la página e intente nuevamente en unos instantes.'
  },
  {
    error: 'ERR_DELETE_WAPP_MSG',
    description: 'WhatsApp no permitió eliminar el mensaje.',
    detail: 'No es posible eliminar mensajes antiguos. Si el mensaje es de las últimas 24h, verifique si la conexión con WhatsApp está activa. Si es necesario, actualice la página e intente nuevamente.'
  },
  {
    error: 'ERR_SENDING_WAPP_MSG',
    description: 'Mensaje no enviado por WhatsApp.',
    detail: 'Verifique si la conexión con WhatsApp está activa. Si es necesario, actualice la página e intente nuevamente.'
  },
  {
    error: 'ERR_WAPP_NOT_INITIALIZED',
    description: 'Sesión de WhatsApp no inicializada.',
    detail: 'Verifique el estado de la conexión con WhatsApp en el sistema. Es necesario que la conexión se establezca con éxito.'
  },
  {
    error: 'ERR_CONTACTS_NOT_EXISTS_WHATSAPP',
    description: 'El contacto no existe en WhatsApp.',
    detail: 'El número no es un contacto válido para WhatsApp.'
  },
  {
    error: 'ERR_NO_WAPP_FOUND',
    description: 'Sesión no encontrada.',
    detail: 'Verifique si el registro realmente existe. Si es necesario, actualice la página.'
  },
  {
    error: 'ERR_OTHER_OPEN_TICKET',
    description: 'Ya existe una atención abierta para el contacto.',
    detail: 'Localice el contacto en la lista de atenciones.'
  },
  {
    error: 'ERR_NO_DEF_WAPP_FOUND',
    description: 'No existe una conexión marcada como "PRINCIPAL".',
    detail: 'Es necesario definirla en el menú de sesiones.'
  },
  {
    error: 'ERR_FETCH_WAPP_MSG',
    description: 'No fue posible localizar mensajes.',
    detail: 'Verifique el estado de conexión con WhatsApp.'
  },
  {
    error: 'ERROR_USER_MESSAGES_NOT_EXISTS',
    description: 'No fue posible eliminar el usuario.',
    detail: 'No se pueden eliminar usuarios que tienen conversaciones registradas.'
  },
  {
    error: 'ERR_COMPANY_NOT_ACTIVE',
    description: 'No fue posible iniciar sesión. Empresa inactiva.',
    detail: 'Consulte con el administrador del sistema.'
  },
  {
    error: 'ERR_NO_PERMISSION',
    description: 'Usuario sin permisos.',
    detail: 'Su usuario no tiene permisos para ejecutar esta acción.'
  }
]

export default errors
