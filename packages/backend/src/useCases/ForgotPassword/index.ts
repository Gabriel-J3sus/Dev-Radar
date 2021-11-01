import { GenerateTokenProvider } from '../../providers/GenerateTokenProvider'
import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider'
import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository'
import { ForgotPasswordController } from './ForgotPasswordController'
import { ForgotPasswordUseCase } from './ForgotPasswordUseCase'

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()
const generateTokenProvider = new GenerateTokenProvider()

const forgotPasswordUseCase = new ForgotPasswordUseCase(
  postgresUsersRepository,
  mailtrapMailProvider,
  generateTokenProvider
)
const forgotPasswordController = new ForgotPasswordController(
  forgotPasswordUseCase
)

export { forgotPasswordUseCase, forgotPasswordController }
