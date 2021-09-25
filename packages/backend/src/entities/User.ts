// basicamente o model da aplicação
import { User } from '@prisma/client'

export type ReducedUser = Pick<
  User,
  'email' | 'password' | 'name' | 'id' | 'username'
>
