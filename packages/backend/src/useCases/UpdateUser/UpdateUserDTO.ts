import { Prisma } from '@prisma/client'

export type IUpdateUserRequestDTO = Prisma.UserUpdateInput & {
  id: string
}

export type IUpdateUserPasswordRequestDTO = {
  password: Prisma.UserUpdateInput['password']
  token: Prisma.UserUpdateInput['refresh_token']
}
