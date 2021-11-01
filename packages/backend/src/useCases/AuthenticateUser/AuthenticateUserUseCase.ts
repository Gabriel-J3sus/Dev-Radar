import { compare } from 'bcryptjs'
import { DevRadar_Error } from '../../errors/errors'

import { GenerateTokenProvider } from '../../providers/GenerateTokenProvider'

import { IAuthenticationRepository } from '../../repositories/IAuthenticationRepository'
import { IRefreshTokenRepository } from '../../repositories/IRefreshTokenRepository'

import { IAuthenticateUserRequestDTO } from './AuthenticateUserDTO'

export class AuthenticateUserUseCase {
  constructor(
    private authenticationRepository: IAuthenticationRepository,
    private jwtRefreshTokenRepository: IRefreshTokenRepository,
    private generateTokenProvider: GenerateTokenProvider
  ) {}

  async execute({ email, password }: IAuthenticateUserRequestDTO) {
    const userExists = await this.authenticationRepository.findByUniqueArgs({
      data: {
        where: {
          email
        }
      }
    })

    if (!userExists) {
      throw new DevRadar_Error('UNAUTHORIZED', 'Email or password incorrect')
    }

    const passwordMatch = await compare(password, userExists.password)

    if (!passwordMatch) {
      throw new DevRadar_Error('UNAUTHORIZED', 'Email or password incorrect')
    }

    const token = this.generateTokenProvider.generator({
      userId: userExists.id
    })

    await this.jwtRefreshTokenRepository.deleteRefreshToken({
      userId: userExists.id
    })

    const refreshToken =
      await this.jwtRefreshTokenRepository.generateRefreshToken({
        userId: userExists.id
      })

    return { token, refreshToken }
  }
}
