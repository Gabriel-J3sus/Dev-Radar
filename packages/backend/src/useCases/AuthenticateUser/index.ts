import { GenerateTokenProvider } from '../../providers/GenerateTokenProvider'
import { JWTRefreshTokenRepository } from '../../repositories/implementations/JWTRefreshTokenRepository'
import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository'
import { AuthenticateUserController } from './AuthenticateUserController'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

const postgresUsersRepository = new PostgresUsersRepository()
const jwtRefreshTokenRepository = new JWTRefreshTokenRepository()
const generateTokenProvider = new GenerateTokenProvider()

const authenticateUserUseCase = new AuthenticateUserUseCase(
  postgresUsersRepository,
  jwtRefreshTokenRepository,
  generateTokenProvider
)
const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
)

export { authenticateUserUseCase, authenticateUserController }
