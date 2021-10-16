import { DevRadar_Error } from '../../errors/errors'
import { IMailProvider } from '../../providers/IMailProvider'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { IForgotPasswordDTO } from './ForgotPasswordDTO'

export class ForgotPasswordUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
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

    this.mailProvider.sendMail({
      to: {
        name: userExists.name,
        email: email
      },
      from: {
        name: 'DevRadar',
        email: 'devradar@gmail.com'
      },
      subject: 'Troca de senha',
      body: '<p>Clique no botão para trocar a sua senha</p>'
    })
  }
}
