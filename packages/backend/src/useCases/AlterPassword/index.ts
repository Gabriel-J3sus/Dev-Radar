import { MailtrapMailProvider } from '@providers/implementations/MailtrapMailProvider'
import { PostgresUsersRepository } from '@repositories/implementations/PostgresUsersRepository'
import { AlterPasswordController } from './AlterPasswordController'
import { AlterPasswordUseCase } from './AlterPasswordUseCase'

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()

const alterPasswordUseCase = new AlterPasswordUseCase(
  postgresUsersRepository,
  mailtrapMailProvider
)

const alterPasswordController = new AlterPasswordController(
  alterPasswordUseCase
)

export { alterPasswordUseCase, alterPasswordController }
