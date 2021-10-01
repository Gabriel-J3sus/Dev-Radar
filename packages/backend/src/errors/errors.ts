export interface IDevRadar_ERROR {
  isDevRadarError?: boolean;
  code: APP_Error<"code">;
  name: APP_Error<"name">;
  message: string;
  status: number;
  severity: ERR_SEVERITY;
}

export enum ERR_SEVERITY {
  FATAL = "FATAL",
  NORMAL = "NORMAL",
  WARNING = "WARNING"
}

const Errors = [
  {
    code: "455",
    isDevRadarError: true,
    message: "A sua chave de autenticação expirou",
    name: "TOKEN_EXPIRED",
    status: 455,
  },
  {
    code: "400",
    message: "Requisição inválida",
    name: "INVALID_REQUEST",
    status: 400,
  },
  {
    code: "400",
    isDevRadarError: true,
    message: "Ocorreu um erro inesperado",
    name: "UNEXPECTD_ERROR",
    status: 400,
  },
  {
    code: "666",
    isDevRadarError: false,
    message: "Ocorreu um erro no servidor",
    name: "SERVER_ERROR",
    status: 500,
    severity: ERR_SEVERITY.FATAL
  },
] as const;

type APP_Error<T extends keyof typeof Errors[number]> = typeof Errors[number][T]

export const NamedErrorMap = Object.fromEntries(Errors.map(err => [err.name, { ...err, isDevRadarError: true }])) as Record<
  IDevRadar_ERROR["name"],
  IDevRadar_ERROR
>;

export class DevRadar_Error implements IDevRadar_ERROR {
  isDevRadarError: boolean;
  code: IDevRadar_ERROR["code"];
  name: IDevRadar_ERROR["name"];
  message: string;
  status: number;
  severity: ERR_SEVERITY;

  constructor(e: IDevRadar_ERROR["name"], msg?: string)  {
    this.severity = ERR_SEVERITY.NORMAL;

    Object.assign(this, NamedErrorMap[e]);

    if (msg) {
      this.message = msg
    }
  }
}
