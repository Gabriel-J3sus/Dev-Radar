import { UserEntity, UserEntityWithoutPassword } from '../../entities/User'
import { DevRadar_Error } from '../../errors/errors'
import { IMailProvider } from '../../providers/IMailProvider'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import {
  IUpdateUserPasswordRequestDTO,
  IUpdateUserRequestDTO
} from './UpdateUserDTO'

export class UpdateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute({
    username,
    email,
    ...dataToBeUpdated
  }: IUpdateUserRequestDTO): Promise<UserEntityWithoutPassword> {
    const userExists = await this.usersRepository.findByUniqueArgs({
      data: {
        where: {
          email: email,
          username: username
        }
      }
    })

    if (userExists) {
      throw new DevRadar_Error('UNAUTHORIZED', 'User does not exist')
    }

    const newUser = await this.usersRepository.update({
      data: {
        email,
        username,
        ...dataToBeUpdated
      }
    })

    return newUser
  }
}
