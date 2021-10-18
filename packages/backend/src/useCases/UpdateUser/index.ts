import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider'
import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository'
import { UpdateUserController } from './UpdateUserController'
import { UpdateUserUseCase } from './UpdateUserUseCase'

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()

const updateUserUseCase = new UpdateUserUseCase(
  postgresUsersRepository,
  mailtrapMailProvider
)

const updateUserController = new UpdateUserController(updateUserUseCase)

export { updateUserUseCase, updateUserController }
