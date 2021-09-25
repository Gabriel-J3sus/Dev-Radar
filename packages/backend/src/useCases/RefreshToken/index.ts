import { GenerateTokenProvider } from '../../providers/GenerateTokenProvider'
import { JWTRefreshTokenRepository } from '../../repositories/implementations/JWTRefreshTokenRepository'
import { RefreshTokenController } from './RefreshTokenController'
import { RefreshTokenUseCase } from './RefreshTokenUseCase'

const refreshTokenRepository = new JWTRefreshTokenRepository()
const generateRefreshTokenProvider = new GenerateTokenProvider()

const refreshTokenUseCase = new RefreshTokenUseCase(
  refreshTokenRepository,
  generateRefreshTokenProvider
)
const refreshTokenController = new RefreshTokenController(refreshTokenUseCase)
export { refreshTokenController, refreshTokenUseCase }
