// basicamente o model da aplicação
import { Prisma, User } from '@prisma/client'

export type UserEntity = User
export type UserEntityWithoutPassword = Omit<User, 'password'>

export type UserCreateInputType = Prisma.UserCreateInput
export type UserFindUniqueArgsType = Prisma.UserFindUniqueArgs
export type UserUpdateArgsType = Prisma.UserUpdateArgs
export type UserUpdateInputType = Prisma.UserUpdateInput & Required<Pick<Prisma.UserUpdateInput,'id'>>

type SeparateRequired<T,R extends keyof T,O extends keyof T = Exclude<keyof T, R>> = Partial<Pick<T,O>>  & Required<Pick<T,R>>

const a:SeparateRequired<Prisma.UserUpdateInput,'id'>  = {

}

type Keys<T> = keyof T

const arrayFoda: Keys<Prisma.UserUpdateInput>[ ] = [''] 