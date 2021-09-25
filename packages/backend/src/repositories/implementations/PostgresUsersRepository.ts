// implementa a interface
import { PrismaClient, User } from '@prisma/client'
import { hash } from 'bcryptjs'

import { ReducedUser } from '../../entities/User'
import { IUsersRepository } from '../IUsersRepository'

export class PostgresUsersRepository implements IUsersRepository {
  prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email
      }
    })

    return user
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        username
      }
    })

    return user
  }

  async save(data: ReducedUser): Promise<User> {
    data.password = await hash(data.password, 8)

    const user = await this.prisma.user.create({ data })

    return user
  }
}
