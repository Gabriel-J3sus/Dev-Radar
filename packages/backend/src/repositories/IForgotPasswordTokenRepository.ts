import { EntityRepository } from '../entities/EntityRepository'
import { ForgotPasswordTokenEntity } from '../entities/ForgotPasswordToken'

export interface IForgotPasswordTokenRepository extends EntityRepository {
  expiration(): number
  generateToken(Params: { userId: string }): Promise<ForgotPasswordTokenEntity>
  findToken(Params: {
    userId: string
  }): Promise<ForgotPasswordTokenEntity | null>
  deleteToken(Params: { userId: string }): Promise<void>
}
