import { UserEntity, UserEntityWithoutPassword } from '../../entities/User'
import { DevRadar_Error } from '../../errors/errors'
import { IMailProvider } from '../../providers/IMailProvider'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { IUpdateUserRequestDTO } from './UpdateUserDTO'

export class UpdateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute({
    id,
    ...dataToBeUpdated
  }: IUpdateUserRequestDTO): Promise<UserEntityWithoutPassword> {
    const updatedUser = await this.usersRepository.update({
      data: {
        where: {
          id: id
        },
        data: {
          ...dataToBeUpdated
        }
      }
    })

    return updatedUser
  }
}
