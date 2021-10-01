// Data Transfer Object
// transfere de uma camada para outra: controller (camada de infraestrutura) para o useCase (camada interna)
// determina como vai ser a transferencia dos dados do controller para o useCase

import { Prisma } from ".prisma/client";
import { OnlyDefined } from "../../entities/EntityRepository";

export type ICreateUserRequestDTO = OnlyDefined<Prisma.UserCreateInput>

