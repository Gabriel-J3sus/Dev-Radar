import { MailtrapMailProvider } from '@providers/implementations/MailtrapMailProvider'
import { JWTForgotPasswordTokenRepository } from '@repositories/implementations/JWTForgotPasswordTokenRepository'
import { PostgresUsersRepository } from '@repositories/implementations/PostgresUsersRepository'
import { ForgotPasswordController } from './ForgotPasswordController'
import { ForgotPasswordUseCase } from './ForgotPasswordUseCase'

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()
const forgotPasswordTokenRepository = new JWTForgotPasswordTokenRepository()

const forgotPasswordUseCase = new ForgotPasswordUseCase(
  postgresUsersRepository,
  mailtrapMailProvider,
  forgotPasswordTokenRepository
)
const forgotPasswordController = new ForgotPasswordController(
  forgotPasswordUseCase
)

export { forgotPasswordUseCase, forgotPasswordController }
