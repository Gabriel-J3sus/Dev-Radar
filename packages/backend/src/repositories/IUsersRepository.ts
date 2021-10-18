// armazena as funcionalidades que são direcionadas ao usuário

import { EntityRepository } from '../entities/EntityRepository'
import {
  UserFindUniqueArgsType,
  UserEntity,
  UserCreateInputType,
  UserEntityWithoutPassword,
  UserUpdateInputType
} from '../entities/User'

export interface IUsersRepository extends EntityRepository {
  findByUniqueArgs(Params: {
    data: UserFindUniqueArgsType
  }): Promise<UserEntity | null>
  save(Params: { data: UserCreateInputType }): Promise<UserEntity>
  update(Params: {
    data: UserUpdateInputType & { email: string; username: string }
  }): Promise<UserEntityWithoutPassword>
}
