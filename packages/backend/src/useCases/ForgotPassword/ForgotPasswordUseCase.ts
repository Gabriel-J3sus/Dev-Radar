import { DevRadar_Error } from '@errors/errors'
import { IMailProvider } from '@providers/IMailProvider'
import { EjsProvider } from '@providers/implementations/EjsProvider'
import { IForgotPasswordTokenRepository } from '@repositories/IForgotPasswordTokenRepository'
import { IUsersRepository } from '@repositories/IUsersRepository'
import { IForgotPasswordDTO } from './ForgotPasswordDTO'

export class ForgotPasswordUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider,
    private forgotPasswordRepository: IForgotPasswordTokenRepository
  ) {}

  async execute({ email }: IForgotPasswordDTO): Promise<string> {
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

    const tokenExists = await this.forgotPasswordRepository.findToken({
      userId: userExists.id
    })

    if (tokenExists) {
      await this.forgotPasswordRepository.deleteToken({
        userId: userExists.id
      })
    }

    const { token } = await this.forgotPasswordRepository.generateToken({
      userId: userExists.id
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
        name: 'ForgotPasswordMailTemplate',
        args: { token }
      })
    })

    return token;
  }
}
