
export const estadoPorDdd = {
  11: 'CABA',
  221: 'Buenos Aires',
  223: 'Buenos Aires',
  230: 'Buenos Aires',
  236: 'Buenos Aires',
  249: 'Buenos Aires',
  2920: 'Buenos Aires',
  348: 'Buenos Aires',
  383: 'Catamarca',
  362: 'Chaco',
  364: 'Chaco',
  280: 'Chubut',
  297: 'Chubut',
  351: 'Córdoba',
  3571: 'Córdoba',
  358: 'Córdoba',
  3543: 'Córdoba',
  379: 'Corrientes',
  3777: 'Corrientes',
  343: 'Entre Ríos',
  345: 'Entre Ríos',
  3487: 'Entre Ríos',
  370: 'Formosa',
  388: 'Jujuy',
  2954: 'La Pampa',
  233: 'La Pampa',
  380: 'La Rioja',
  261: 'Mendoza',
  2624: 'Mendoza',
  376: 'Misiones',
  3751: 'Misiones',
  299: 'Neuquén',
  2942: 'Neuquén',
  294: 'Río Negro',
  298: 'Río Negro',
  387: 'Salta',
  264: 'San Juan',
  266: 'San Luis',
  2657: 'San Luis',
  2966: 'Santa Cruz',
  2962: 'Santa Cruz',
  341: 'Santa Fe',
  342: 'Santa Fe',
  346: 'Santa Fe',
  385: 'Santiago del Estero',
  2901: 'Tierra del Fuego',
  2902: 'Tierra del Fuego',
  381: 'Tucumán'
}

export const dddsPorEstado = {
  "CABA": ['11'],
  "Buenos Aires": ['221', '223', '230', '236', '249', '2920', '348'],
  "Catamarca": ['383'],
  "Chaco": ['362', '364'],
  "Chubut": ['280', '297'],
  "Córdoba": ['351', '3571', '358', '3543'],
  "Corrientes": ['379', '3777'],
  "Entre Ríos": ['343', '345', '3487'],
  "Formosa": ['370'],
  "Jujuy": ['388'],
  "La Pampa": ['2954', '233'],
  "La Rioja": ['380'],
  "Mendoza": ['261', '2624'],
  "Misiones": ['376', '3751'],
  "Neuquén": ['299', '2942'],
  "Río Negro": ['294', '298'],
  "Salta": ['387'],
  "San Juan": ['264'],
  "San Luis": ['266', '2657'],
  "Santa Cruz": ['2966', '2962'],
  "Santa Fe": ['341', '342', '346'],
  "Santiago del Estero": ['385'],
  "Tierra del Fuego": ['2901', '2902'],
  "Tucumán": ['381']
}

export const estadosBR = [
  { nome: 'Ciudad Autónoma de Buenos Aires', sigla: 'CABA' },
  { nome: 'Buenos Aires', sigla: 'Buenos Aires' },
  { nome: 'Catamarca', sigla: 'Catamarca' },
  { nome: 'Chaco', sigla: 'Chaco' },
  { nome: 'Chubut', sigla: 'Chubut' },
  { nome: 'Córdoba', sigla: 'Córdoba' },
  { nome: 'Corrientes', sigla: 'Corrientes' },
  { nome: 'Entre Ríos', sigla: 'Entre Ríos' },
  { nome: 'Formosa', sigla: 'Formosa' },
  { nome: 'Jujuy', sigla: 'Jujuy' },
  { nome: 'La Pampa', sigla: 'La Pampa' },
  { nome: 'La Rioja', sigla: 'La Rioja' },
  { nome: 'Mendoza', sigla: 'Mendoza' },
  { nome: 'Misiones', sigla: 'Misiones' },
  { nome: 'Neuquén', sigla: 'Neuquén' },
  { nome: 'Río Negro', sigla: 'Río Negro' },
  { nome: 'Salta', sigla: 'Salta' },
  { nome: 'San Juan', sigla: 'San Juan' },
  { nome: 'San Luis', sigla: 'San Luis' },
  { nome: 'Santa Cruz', sigla: 'Santa Cruz' },
  { nome: 'Santa Fe', sigla: 'Santa Fe' },
  { nome: 'Santiago del Estero', sigla: 'Santiago del Estero' },
  { nome: 'Tierra del Fuego', sigla: 'Tierra del Fuego' },
  { nome: 'Tucumán', sigla: 'Tucumán' }

]

export const messagesLog = {
  access: {
    message: 'Accedió al ticket',
    color: 'grey-8',
    icon: 'mdi-eye'
  },
  closed: {
    message: 'Resolvió el ticket',
    color: 'positive',
    icon: 'mdi-check-circle-outline'
  },
  create: {
    message: 'Ticket creado',
    color: 'green-6',
    icon: 'mdi-plus-circle'
  },
  delete: {
    message: 'Borró Ticket',
    color: 'negative',
    icon: 'mdi-delete'
  },
  open: {
    message: 'Inició atención',
    color: 'primary',
    icon: 'mdi-play-circle-outline'
  },
  pending: {
    message: 'Retorno atención para fila de pendientes',
    color: 'amber',
    icon: 'mdi-account-convert'
  },
  transfered: {
    message: 'Transfirió la atención',
    color: 'teal-3',
    icon: 'mdi-account-arrow-right'
  },
  receivedTransfer: {
    message: 'Recebió la atención por transferencia',
    color: 'teal-5',
    icon: 'mdi-account-arrow-left'
  },
  queue: {
    message: 'Bot: Fila definida',
    color: 'green-2',
    icon: 'mdi-arrow-decision'
  },
  userDefine: {
    message: 'Bot: Usuario definido',
    color: 'cyan-2',
    icon: 'mdi-account-check'
  },
  retriesLimitQueue: {
    message: 'Bot: Fila definida (Limite de intentos)',
    color: 'green-2',
    icon: 'mdi-arrow-decision'
  },
  retriesLimitUserDefine: {
    message: 'Bot: Usuário definido (Limite de intentos)',
    color: 'cyan-2',
    icon: 'mdi-account-check'
  },
  chatBot: {
    message: 'ChatBot iniciado',
    color: 'blue-4',
    icon: 'mdi-robot'
  },
  autoClose: {
    message: 'Bot: Atención al cliente cerrada',
    color: 'blue-8',
    icon: 'mdi-check-circle-outline'
  }
}
