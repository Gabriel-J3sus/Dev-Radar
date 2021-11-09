import { PrismaClient } from '@prisma/client'
import dayjs from 'dayjs'
import { DevRadar_Error } from '../../errors/errors'

import { IForgotPasswordTokenRepository } from '../IForgotPasswordTokenRepository'

export class JWTForgotPasswordTokenRepository
  implements IForgotPasswordTokenRepository {
  prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  expiration: IForgotPasswordTokenRepository['expiration'] = () => {
    const expiresIn = dayjs().add(50, 'minute').unix()

    return expiresIn
  }

  findByToken: IForgotPasswordTokenRepository['findByToken'] = async ({
    forgot_password_token
  }) => {
    const refreshToken = await this.prisma.refreshToken.findFirst({
      where: {
        id: forgot_password_token
      }
    })

    return refreshToken
  }

  generateToken: IForgotPasswordTokenRepository['generateToken'] = async ({
    userId
  }) => {
    const expiresIn = this.expiration()

    try {
      const generetedRefreshToken = await this.prisma.refreshToken.create({
        data: {
          userId,
          expiresIn
        }
      })

      return generetedRefreshToken
    } catch (err) {
      throw new DevRadar_Error(
        'INVALID_REQUEST',
        'Impossible to create new token'
      )
    }
  }

  deleteToken: IForgotPasswordTokenRepository['deleteToken'] = async ({
    userId
  }) => {
    try {
      await this.prisma.refreshToken.deleteMany({
        where: {
          userId: userId
        }
      })
    } catch (err) {
      throw new DevRadar_Error('INVALID_REQUEST', 'Impossible to delete token')
    }
  }
}
