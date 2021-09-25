import { User } from '@prisma/client'

import { EntityRepository } from '../entities/EntityRepository'

export interface IAuthenticationRepository extends EntityRepository {
  findByEmail(email: string): Promise<User>
}
