import { RefreshToken } from '@prisma/client'

import { EntityRepository } from '../entities/EntityRepository'

export interface IRefreshTokenRepository extends EntityRepository {
  expiration(): number
  generateRefreshToken(userId: string): Promise<RefreshToken>
  findByToken(refresh_token: string): Promise<RefreshToken>
  deleteRefreshToken(userId: string): Promise<void>
}
