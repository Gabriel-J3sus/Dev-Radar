// serve para a implementação da lógica da aplicação, não importa aonde os usuarios são armazezados etc.
// sua única responsabilidade é criar um usuário

import { User, Prisma } from '@prisma/client'

import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, username, ...userData }: ICreateUserRequestDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByUniqueArgs({
      data: {
        where: {
          email
        }
      }
    })

    const usernameAlreadyExists = await this.usersRepository.findByUniqueArgs({
      data: {
        where: {
          username
        }
      }
    })

    if (userAlreadyExists) {
      throw new Error('user already exists')
    } else if (usernameAlreadyExists) {
      throw new Error('username already exists')
    }

    const user = await this.usersRepository.save({ data: {
      email,
      username,
      ...userData
    } })

    return user
  }
}
