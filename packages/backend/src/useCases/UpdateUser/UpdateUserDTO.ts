import { Prisma } from '@prisma/client'

export type IUpdateUserRequestDTO = Omit<Prisma.UserUpdateInput, 'password'> & {
  id: string
}
