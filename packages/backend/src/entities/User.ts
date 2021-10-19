// basicamente o model da aplicação
import { Prisma, User } from '@prisma/client'

export type UserEntity = User
export type UserEntityWithoutPassword = Omit<User, 'password'>

export type UserCreateInputType = Prisma.UserCreateInput
export type UserFindUniqueArgsType = Prisma.UserFindUniqueArgs
export type UserUpdateArgsType = Prisma.UserUpdateArgs
