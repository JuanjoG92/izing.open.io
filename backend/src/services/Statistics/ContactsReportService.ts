import { endOfDay, parseISO, startOfDay } from "date-fns";
import { Includeable, Op, Sequelize } from "sequelize";
import Contact from "../../models/Contact";
import Tag from "../../models/Tag";
import ContactWallet from "../../models/ContactWallet";

const dddsPorEstado = [
  { estado: "CABA", ddds: ["11"] },
  { estado: "Buenos Aires", ddds: ["221", "223", "230", "236", "249", "2920", "348"] },
  { estado: "Catamarca", ddds: ["383"] },
  { estado: "Chaco", ddds: ["362", "364"] },
  { estado: "Chubut", ddds: ["280", "297"] },
  { estado: "Córdoba", ddds: ["351", "3571", "358", "3543"] },
  { estado: "Corrientes", ddds: ["379", "3777"] },
  { estado: "Entre Ríos", ddds: ["343", "345", "3487"] },
  { estado: "Formosa", ddds: ["370"] },
  { estado: "Jujuy", ddds: ["388"] },
  { estado: "La Pampa", ddds: ["2954", "233"] },
  { estado: "La Rioja", ddds: ["380"] },
  { estado: "Mendoza", ddds: ["261", "2624"] },
  { estado: "Misiones", ddds: ["376", "3751"] },
  { estado: "Neuquén", ddds: ["299", "2942"] },
  { estado: "Río Negro", ddds: ["294", "298"] },
  { estado: "Salta", ddds: ["387"] },
  { estado: "San Juan", ddds: ["264"] },
  { estado: "San Luis", ddds: ["266", "2657"] },
  { estado: "Santa Cruz", ddds: ["2966", "2962"] },
  { estado: "Santa Fe", ddds: ["341", "342", "346"] },
  { estado: "Santiago del Estero", ddds: ["385"] },
  { estado: "Tierra del Fuego", ddds: ["2901", "2902"] },
  { estado: "Tucumán", ddds: ["381"] }
];

interface Request {
  startDate: string;
  endDate: string;
  tenantId: string | number;
  tags?: number[] | string[];
  wallets?: number[] | string[];
  ddds?: number[] | string[];
  userId: number;
  profile: string;
  searchParam?: string;
}

interface Response {
  contacts: Contact[];
}

const ListContactsService = async ({
  startDate,
  endDate,
  tenantId,
  tags,
  wallets,
  ddds,
  userId,
  profile,
  searchParam
}: Request): Promise<Response> => {
  let includeCondition: Includeable[] = [];
  let where: any = {
    tenantId,
    isGroup: false
  };

  if (searchParam) {
    where = {
      ...where,
      [Op.or]: [
        {
          name: Sequelize.where(
            Sequelize.fn("LOWER", Sequelize.col("Contact.name")),
            "LIKE",
            `%${searchParam.toLowerCase().trim()}%`
          )
        },
        { number: { [Op.like]: `%${searchParam.toLowerCase().trim()}%` } }
      ]
    };
  }

  if (startDate && endDate) {
    where = {
      ...where,
      createdAt: {
        [Op.between]: [
          +startOfDay(parseISO(startDate)),
          +endOfDay(parseISO(endDate))
        ]
      }
    };
  }

  if (tags) {
    includeCondition = [
      {
        model: Tag,
        as: "tags",
        where: {
          id: {
            [Op.in]: tags
          }
        },
        required: true
      }
    ];
  }

  if (wallets) {
    includeCondition.push({
      model: ContactWallet,
      // as: "wallets",
      where: {
        walletId: wallets
      },
      required: true
    });
  } else if (profile !== "admin") {
    includeCondition.push({
      model: ContactWallet,
      // as: "wallet",
      where: {
        walletId: userId
      },
      required: true
    });
  }

  if (ddds) {
    let dddsFilter: string[] = [];
    // eslint-disable-next-line consistent-return
    ddds.forEach((el: any) => {
      if (el) {
        const d = dddsPorEstado.find((ddd: any) => ddd.estado === el)?.ddds;
        if (d) {
          dddsFilter = dddsFilter.concat(d);
        }
      }
    });
    where = {
      ...where,
      number: {
        [Op.or]: dddsFilter.map(ddd => ({ [Op.like]: `55${ddd}%` }))
      }
    };
  }

  const contacts = await Contact.findAll({
    where,
    attributes: ["id", "name", "number", "email"],
    include: includeCondition,
    order: [["name", "ASC"]]
  });

  return { contacts };
};

export default ListContactsService;
