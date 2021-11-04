import ejs from 'ejs'
import path from 'path'
import { DevRadar_Error } from '../../errors/errors'
import { GenerateTokenProvider } from '../../providers/GenerateTokenProvider'
import { IMailProvider } from '../../providers/IMailProvider'
import { EjsProvider } from '../../providers/implementations/EjsProvider'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { IForgotPasswordDTO } from './ForgotPasswordDTO'

export class ForgotPasswordUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider,
    private generateTokenProvider: GenerateTokenProvider
  ) {}

  async execute({ email }: IForgotPasswordDTO): Promise<void> {
    const userExists = await this.usersRepository.findByUniqueArgs({
      data: {
        where: {
          email
        }
      }
    })

    if (!userExists) {
      throw new DevRadar_Error('INVALID_REQUEST', 'User does not exists')
    }
    const token = this.generateTokenProvider.generator({
      userId: userExists.id,
      expiresIn: 60000 * 30 // 30 miniutes
    })

    await this.mailProvider.sendMail({
      to: {
        name: userExists.name,
        email: email
      },
      from: {
        name: 'DevRadar',
        email: 'devradar@gmail.com'
      },
      subject: 'Troca de senha',
      body: await EjsProvider.renderHtmlFile({
        name: 'ForgotPasswordMailTemplate'
      })
    })
  }
}
