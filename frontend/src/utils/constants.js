
export const estadoPorDdd = {
  11: 'CABA',
  22: 'BSAS',
  23: 'BSAS',
  24: 'BSAS',
  261: 'BSAS',
  262: 'BSAS',
  263: 'BSAS',
  264: 'BSAS',
  341: 'SF',
  342: 'SF',
  351: 'CO',
  352: 'CO',
  353: 'CO',
  354: 'CO',
  3541: 'CO',
  3542: 'CO',
  3543: 'CO',
  3544: 'CO',
  3545: 'CO',
  3546: 'CO',
  3547: 'CO',
  3548: 'CO',
  3549: 'CO',
  362: 'CHA', // Chaco corregido
  363: 'CHA',
  364: 'CHA',
  368: 'CHA',
  369: 'CHA',
  370: 'FORMOSA',
  380: 'LR', // La Rioja corregido
  381: 'TUC', // Tucumán corregido
  385: 'SDE', // Santiago del Estero corregido
  386: 'SDE',
  387: 'SALTA', // Salta corregido
  388: 'JUJ', // Jujuy corregido
  389: 'MZ',
  394: 'RN',
  396: 'MZA',
  397: 'MZA',
  398: 'MZA',
  399: 'MZA',
  411: 'JUJ',
  421: 'TUC',
  429: 'SDE',
  431: 'SDE',
  436: 'TUC',
  443: 'TUC',
  449: 'TUC',
  453: 'TUC',
  454: 'TUC',
  466: 'TUC',
  467: 'TUC',
  473: 'SAN',
  474: 'SAN',
  475: 'SAN',
  477: 'SAN',
  491: 'CAT',
  492: 'CAT',
  493: 'CAT',
  497: 'CAT',
  498: 'CAT',
  499: 'CAT',
  379: 'COR',
  3700: 'FORMOSA',
  3791: 'CHA',
  3792: 'MIS',
  3793: 'COR',
  3794: 'ER',
  3795: 'LR',
  3796: 'TF',
  3797: 'SC'
}

export const dddsPorEstado = {
  CABA: ['11'],
  BSAS: ['22', '23', '24', '261', '262', '263', '264'],
  SF: ['341', '342'],
  CO: ['351', '352', '353', '354', '3541', '3542', '3543', '3544', '3545', '3546', '3547', '3548', '3549'],
  CHA: ['362', '363', '364', '368', '369'], // Chaco corregido
  FORMOSA: ['370'],
  LR: ['380'], // La Rioja corregido
  TUC: ['381', '421', '429', '431', '436', '443', '449', '453', '454', '466', '467'], // Tucumán corregido
  SDE: ['385', '386'], // Santiago del Estero corregido
  SALTA: ['387'], // Salta corregido
  JUJ: ['388', '411'], // Jujuy corregido
  MZ: ['389'],
  RN: ['394'],
  MZA: ['396', '397', '398', '399'],
  SAN: ['473', '474', '475', '477'],
  CAT: ['491', '492', '493', '497', '498', '499'],
  COR: ['379'],
  MIS: ['3792'],
  ER: ['3794'],
  CTES: ['3795'],
  TF: ['3796'],
  SC: ['3797']
}

export const estadosBR = [
  { nome: 'Ciudad Autónoma de Buenos Aires', sigla: 'CABA' },
  { nome: 'Buenos Aires', sigla: 'Buenos_Aires' },
  { nome: 'Catamarca', sigla: 'Catamarca' },
  { nome: 'Chaco', sigla: 'Chaco' },
  { nome: 'Chubut', sigla: 'Chubut' },
  { nome: 'Córdoba', sigla: 'Córdoba' },
  { nome: 'Corrientes', sigla: 'Corrientes' },
  { nome: 'Entre Ríos', sigla: 'Entre_Ríos' },
  { nome: 'Formosa', sigla: 'Formosa' },
  { nome: 'Jujuy', sigla: 'Jujuy' },
  { nome: 'La Pampa', sigla: 'La_Pampa' },
  { nome: 'La Rioja', sigla: 'La_Rioja' },
  { nome: 'Mendoza', sigla: 'Mendoza' },
  { nome: 'Misiones', sigla: 'Misiones' },
  { nome: 'Neuquén', sigla: 'Neuquén' },
  { nome: 'Río Negro', sigla: 'Río_Negro' },
  { nome: 'Salta', sigla: 'Salta' },
  { nome: 'San Juan', sigla: 'San_Juan' },
  { nome: 'San Luis', sigla: 'San_Luis' },
  { nome: 'Santa Cruz', sigla: 'Santa_Cruz' },
  { nome: 'Santa Fe', sigla: 'Santa_Fe' },
  { nome: 'Santiago del Estero', sigla: 'Santiago_del_Estero' },
  { nome: 'Tierra del Fuego', sigla: 'Tierra_del_Fuego' },
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
    message: 'Bot: Usuario definido (Limite de intentos)',
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
