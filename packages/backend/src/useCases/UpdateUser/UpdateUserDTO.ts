import { Prisma } from '@prisma/client'

export type IUpdateUserRequestDTO = Prisma.UserUpdateInput & {
  email: string
  username: string
}

export type IUpdateUserPasswordRequestDTO = {
  password: Prisma.UserUpdateInput['password']
  token: Prisma.UserUpdateInput['refresh_token']
}
