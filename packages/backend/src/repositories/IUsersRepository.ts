// armazena as funcionalidades que são direcionadas ao usuário

import { User } from '@prisma/client'

import { EntityRepository } from '../entities/EntityRepository'
import { ReducedUser } from '../entities/User'

export interface IUsersRepository extends EntityRepository {
  findByEmail(email: string): Promise<User>
  findByUsername(username: string): Promise<User>
  save(user: Omit<ReducedUser, 'id'>): Promise<User>
}
