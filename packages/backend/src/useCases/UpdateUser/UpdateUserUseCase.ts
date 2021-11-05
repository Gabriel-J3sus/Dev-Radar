/* eslint-disable dot-notation */
import { UserEntityWithoutPassword } from '@entities/User'

import { IUsersRepository } from '@repositories/IUsersRepository'
import { IUpdateUserRequestDTO } from './UpdateUserDTO'

export class UpdateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    id,
    ...dataToBeUpdated
  }: IUpdateUserRequestDTO): Promise<UserEntityWithoutPassword> {
    const updatedUser = await this.usersRepository.update({
      data: {
        where: {
          id
        },
        data: {
          ...dataToBeUpdated
        }
      }
    })

    return updatedUser
  }
}
