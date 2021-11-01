import { UserEntityWithoutPassword } from '../../entities/User'
import { IMailProvider } from '../../providers/IMailProvider'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import {
  IAlterPasswordBaseProps,
  IAlterPasswordRequestDTO,
  PasswordHeaders
} from '../AlterPassword/AlterPasswordDTO'
import { compare, hash } from 'bcryptjs'
import { DevRadar_Error } from '../../errors/errors'

export class AlterPasswordUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute({
    id,
    newPassword,
    oldPassword
  }: IAlterPasswordRequestDTO): Promise<UserEntityWithoutPassword>

  async execute({
    id,
    newPassword
  }: IAlterPasswordBaseProps): Promise<UserEntityWithoutPassword>

  async execute({
    id,
    ...passwordData
  }: IAlterPasswordRequestDTO &
    IAlterPasswordBaseProps): Promise<UserEntityWithoutPassword> {
    const userExists = await this.usersRepository.findByUniqueArgs({
      data: {
        where: {
          id
        }
      }
    })

    if (!userExists) {
      throw new DevRadar_Error('UNAUTHORIZED', 'Password incorrect')
    }

    let updatedUser: UserEntityWithoutPassword
    if (
      passwordData.requestHeader === PasswordHeaders.AP &&
      passwordData.oldPassword
    ) {
      const isOldPassword = await compare(
        passwordData.oldPassword,
        userExists.password
      )

      if (!isOldPassword) {
        throw new DevRadar_Error('INVALID_REQUEST', 'Password incorrect')
      }

      updatedUser = await this.usersRepository.update({
        data: {
          where: {
            id
          },
          data: {
            password: await hash(passwordData.newPassword, 8)
          }
        }
      })
      return updatedUser
    } else if (
      passwordData.requestHeader === PasswordHeaders.FP &&
      !passwordData.oldPassword
    ) {
      updatedUser = await this.usersRepository.update({
        data: {
          where: {
            id
          },
          data: {
            password: await hash(passwordData.newPassword, 8)
          }
        }
      })

      await this.mailProvider.sendMail({
        to: {
          name: updatedUser.name,
          email: updatedUser.email
        },
        from: {
          name: 'DevRadar',
          email: 'devradar@gmail.com'
        },
        subject: 'Troca de senha',
        body: '<p>Sua senha foi alterada com sucesso!</p>'
      })

      return updatedUser
    }

    throw new DevRadar_Error('INVALID_REQUEST')
  }
}
