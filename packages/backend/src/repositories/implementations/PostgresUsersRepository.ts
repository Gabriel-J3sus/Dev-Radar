// implementa a interface
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'
import { DevRadar_Error } from '../../errors/errors'

import { IUsersRepository } from '../IUsersRepository'

export class PostgresUsersRepository implements IUsersRepository {
  prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  findByUniqueArgs: IUsersRepository['findByUniqueArgs'] = async ({ data }) => {
    const user = await this.prisma.user.findUnique(data)

    return user
  }

  save: IUsersRepository['save'] = async ({ data }) => {
    data.password = await hash(data.password, 8)

    try {
      const user = await this.prisma.user.create({ data })

      return user
    } catch {
      throw new DevRadar_Error(
        'INVALID_REQUEST',
        'Impossible to create new user'
      )
    }
  }

  update: IUsersRepository['update'] = async ({ data }) => {
    try {
      const user = await this.prisma.user.update(data)

      return user
    } catch {
      throw new DevRadar_Error('INVALID_REQUEST', 'Impossible to update user')
    }
  }
}
