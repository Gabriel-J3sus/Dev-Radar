import dayjs from 'dayjs'
import { DevRadar_Error } from '../../errors/errors'

import { GenerateTokenProvider } from '../../providers/GenerateTokenProvider'

import { IRefreshTokenRepository } from '../../repositories/IRefreshTokenRepository'

import { IRefreshTokenDTO } from './RefreshTokenDTO'

export class RefreshTokenUseCase {
  constructor(
    private refreshTokenRepository: IRefreshTokenRepository,
    private generateTokenProvider: GenerateTokenProvider
  ) {}

  async execute({ refresh_token }: IRefreshTokenDTO) {
    const refreshToken = await this.refreshTokenRepository.findByToken({ refresh_token })

    if (!refreshToken) {
      throw new DevRadar_Error("TOKEN_EXPIRED")
    }

    const refreshTokenExpired = dayjs().isAfter(
      dayjs.unix(refreshToken.expiresIn)
    )

    const token = this.generateTokenProvider.generator(refreshToken.userId)

    if (refreshTokenExpired) {
      await this.refreshTokenRepository.deleteRefreshToken({ userId: refreshToken.userId })

      const newRefreshToken =
        await this.refreshTokenRepository.generateRefreshToken({ userId: refreshToken.userId })

      return { token, refreshToken: newRefreshToken }
    }

    return { token }
  }
}
