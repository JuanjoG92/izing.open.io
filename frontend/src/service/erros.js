const backendErrors = {
  ERR_NO_DEF_WAPP_FOUND:
    'No se encontró un WhatsApp predeterminado. Verifique la página de conexiones.',
  ERR_WAPP_NOT_INITIALIZED:
    'Esta sesión de WhatsApp no ha sido inicializada. Verifique la página de conexiones.',
  ERR_WAPP_INITIALIZED:
    'No está conectado con WhatsApp. Estamos reiniciando la conexión. Intente nuevamente en unos segundos.',
  ERR_WAPP_CHECK_CONTACT:
    'No se pudo verificar el contacto de WhatsApp. Verifique la página de conexiones.',
  ERR_WAPP_INVALID_CONTACT: 'Este no es un número de WhatsApp válido.',
  ERR_WAPP_DOWNLOAD_MEDIA:
    'No se pudo descargar el medio de WhatsApp. Verifique la página de conexiones.',
  ERR_INVALID_CREDENTIALS:
    'Error de autenticación. Por favor, intente nuevamente.',
  ERR_SENDING_WAPP_MSG:
    'Error al enviar el mensaje de WhatsApp. Verifique la página de conexiones.',
  ERR_DELETE_WAPP_MSG: 'No se pudo eliminar el mensaje de WhatsApp.',
  ERR_OTHER_OPEN_TICKET: 'Ya existe un ticket abierto para este contacto.',
  ERR_SESSION_EXPIRED: 'Sesión expirada. Por favor ingrese nuevamente.',
  ERR_USER_CREATION_DISABLED:
    'La creación de usuarios ha sido deshabilitada por el administrador.',
  ERR_NO_PERMISSION: 'No tiene permiso para acceder a este recurso.',
  ERR_DUPLICATED_CONTACT: 'Ya existe un contacto con este número.',
  ERR_NO_SETTING_FOUND: 'No se encontró ninguna configuración con este ID.',
  ERR_NO_CONTACT_FOUND: 'No se encontró ningún contacto con este ID.',
  ERR_NO_TICKET_FOUND: 'No se encontró ningún ticket con este ID.',
  ERR_NO_USER_FOUND: 'No se encontró ningún usuario con este ID.',
  ERR_NO_WAPP_FOUND: 'No se encontró ningún WhatsApp con este ID.',
  ERR_CREATING_MESSAGE: 'Error al crear el mensaje en la base de datos.',
  ERR_CREATING_TICKET: 'Error al crear el ticket en la base de datos.',
  ERR_COMPANY_NOT_ACTIVE: 'No fue posible iniciar sesión. Empresa inactiva.',
  ERR_FETCH_WAPP_MSG:
    'Error al buscar el mensaje en WhatsApp, puede que sea demasiado antiguo.'
}

export default backendErrors
