import { EntityRepository } from '../entities/EntityRepository'
import { RefreshTokenEntity } from '../entities/RefreshToken'

export interface IRefreshTokenRepository extends EntityRepository {
  expiration(): number
  generateRefreshToken(Params: { userId: string }): Promise<RefreshTokenEntity>
  findByToken(Params: {
    refresh_token: string
  }): Promise<RefreshTokenEntity | null>
  deleteRefreshToken(Params: { userId: string }): Promise<void>
}

/*
1- mais descritivo para passar os parametros para a função
2- não precisa se preocupar com a ordem dos atributos
3- é possível reutilizar as interfaces de maneira mais composta
*/
