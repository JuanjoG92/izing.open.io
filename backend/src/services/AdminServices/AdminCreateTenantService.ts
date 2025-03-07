import * as Yup from "yup";
import AppError from "../../errors/AppError";
import Tenant from "../../models/Tenant";
import Setting from "../../models/Setting";

interface TenantData {
  status: string;
  name: string;
  maxUsers: number;
  maxConnections: number;
}

interface Request {
  tenantData: TenantData;
}

const AdminCreateTenantService = async ({
  tenantData
}: Request): Promise<Tenant | undefined> => {
  const schema = Yup.object().shape({
    status: Yup.string().required(),
    name: Yup.string().min(2).required(),
    maxUsers: Yup.number().integer().min(0).required(),
    maxConnections: Yup.number().integer().min(0).required()
  });

  const { status, name, maxUsers, maxConnections } = tenantData;

  try {
    await schema.validate({ status, name, maxUsers, maxConnections });
  } catch (err: any) {
    throw new AppError(err?.message);
  }

  const tenant = await Tenant.create({
    status,
    name,
    maxUsers,
    maxConnections,
    businessHours: [
      {"day": 0, "hr1": "08:00", "hr2": "12:00", "hr3": "14:00", "hr4": "18:00", "type": "O", "label": "Domingo"},
      {"day": 1, "hr1": "08:00", "hr2": "12:00", "hr3": "14:00", "hr4": "18:00", "type": "O", "label": "Lunes"},
      {"day": 2, "hr1": "08:00", "hr2": "12:00", "hr3": "14:00", "hr4": "18:00", "type": "O", "label": "Martes"},
      {"day": 3, "hr1": "08:00", "hr2": "12:00", "hr3": "14:00", "hr4": "18:00", "type": "O", "label": "Miercoles"},
      {"day": 4, "hr1": "08:00", "hr2": "12:00", "hr3": "14:00", "hr4": "18:00", "type": "O", "label": "Jueves"},
      {"day": 5, "hr1": "08:00", "hr2": "12:00", "hr3": "14:00", "hr4": "18:00", "type": "O", "label": "Viernes"},
      {"day": 6, "hr1": "08:00", "hr2": "12:00", "hr3": "14:00", "hr4": "18:00", "type": "O", "label": "Sábado"}
    ],
    messageBusinessHours: "¡Hola! Actualmente estamos ausentes y no podremos ayudarle, pero priorizaremos su servicio y regresaremos en breve. Muchas gracias por contactarnos.."
  });

  // Inserir as configurações padrão para o novo inquilino
  const defaultSettings = [
    { key: 'userCreation', value: 'disabled' },
    { key: 'NotViewTicketsQueueUndefined', value: 'disabled' },
    { key: 'NotViewTicketsChatBot', value: 'disabled' },
    { key: 'DirectTicketsToWallets', value: 'disabled' },
    { key: 'NotViewAssignedTickets', value: 'disabled' },
    { key: 'botTicketActive', value: '3' },
    { key: 'ignoreGroupMsg', value: 'enabled' },
    { key: 'rejectCalls', value: 'disabled' },
    { key: 'hubToken', value: 'disabled' },
    { key: 'callRejectMessage', value: 'Las llamadas de voz y video están deshabilitadas para este WhatsApp, envíe un mensaje de texto.' }
  ];

  for (const setting of defaultSettings) {
    await Setting.create({
      ...setting,
      tenantId: tenant.id
    });
  }

  return tenant;
};

export default AdminCreateTenantService;
