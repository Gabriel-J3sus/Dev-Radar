// serve para a implementação da lógica da aplicação, não importa aonde os usuarios são armazezados etc.
// sua única responsabilidade é criar um usuário

import { User } from '@prisma/client'

import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: ICreateUserRequestDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)
    const usernameAlreadyExists = await this.usersRepository.findByUsername(
      data.username
    )

    if (userAlreadyExists) {
      throw new Error('user already exists')
    } else if (usernameAlreadyExists) {
      throw new Error('username already exists')
    }

    const user = await this.usersRepository.save(data)

    return user
  }
}
