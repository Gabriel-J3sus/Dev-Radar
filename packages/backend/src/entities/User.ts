// basicamente o model da aplicação
import { Prisma, User } from '@prisma/client'

export type UserEntity = User;

export type UserCreateInputType = Prisma.UserCreateInput;
export type UserFindUniqueArgsType = Prisma.UserFindUniqueArgs;
