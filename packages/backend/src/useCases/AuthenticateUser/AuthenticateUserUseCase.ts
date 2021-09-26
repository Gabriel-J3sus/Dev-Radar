import { compare } from 'bcryptjs'

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
    const userExists = await this.authenticationRepository.findByEmail(email)

    if (!userExists) {
      throw new Error('Email or password incorrect')
    }

    const passwordMatch = await compare(password, userExists.password)

    if (!passwordMatch) {
      throw new Error('Email or password incorrect')
    }

    const token = this.generateTokenProvider.generator(userExists.id)

    await this.jwtRefreshTokenRepository.deleteRefreshToken(userExists.id)

    const refreshToken =
      await this.jwtRefreshTokenRepository.generateRefreshToken(userExists.id)

    return { token, refreshToken }
  }
}