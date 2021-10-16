import { EntityRepository } from '../entities/EntityRepository'
import { UserEntity, UserFindUniqueArgsType } from '../entities/User'

export interface IAuthenticationRepository extends EntityRepository {
  findByUniqueArgs(Params: {
    data: UserFindUniqueArgsType
  }): Promise<UserEntity | null>
}
