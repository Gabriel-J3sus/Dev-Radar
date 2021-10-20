// serve para a implementação da lógica da aplicação, não importa aonde os usuarios são armazezados etc.
// sua única responsabilidade é criar um usuário

import { User } from '@prisma/client'
import { DevRadar_Error } from '../../errors/errors'
import { IMailProvider } from '../../providers/IMailProvider'

import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute({
    email,
    username,
    ...userData
  }: ICreateUserRequestDTO): Promise<User> {
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
      throw new DevRadar_Error('UNAUTHORIZED', 'user already exists')
    } else if (usernameAlreadyExists) {
      throw new DevRadar_Error('UNAUTHORIZED', 'username already exists')
    }

    const user = await this.usersRepository.save({
      data: {
        email,
        username,
        location: {},
        social: {},
        ...userData
      }
    })
    this.mailProvider.sendMail({
      to: {
        name: userData.name,
        email: email
      },
      from: {
        name: 'DevRadar',
        email: 'devradar@gmail.com'
      },
      subject: 'Seja bem-vindo ao DevRadar',
      body: '<p>Seu cadastro foi realizado com sucesso!</p>'
    })

    return user
  }
}
