import { v4 as uuid } from 'uuid'
import { hash } from 'bcryptjs'

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
    const expiresIn = dayjs().add(30, 'minute').unix()

    return expiresIn
  }

  findToken: IForgotPasswordTokenRepository['findToken'] = async ({
    userId
  }) => {
    const forgotPasswordToken = await this.prisma.forgotPasswordToken.findFirst({
      where: {
        userId: userId
      }
    })

    return forgotPasswordToken
  }

  generateToken: IForgotPasswordTokenRepository['generateToken'] = async ({
    userId
  }) => {
    const expiresIn = this.expiration()

    try {
      const token = uuid();
      const hashedToken = await hash(token, 10)

      const generetedForgotPasswordToken = await this.prisma.forgotPasswordToken.create({
        data: {
          token: hashedToken,
          userId,
          expiresIn
        }
      })

      return generetedForgotPasswordToken
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
      await this.prisma.forgotPasswordToken.deleteMany({
        where: {
          userId: userId
        }
      })
    } catch (err) {
      throw new DevRadar_Error('INVALID_REQUEST', 'Impossible to delete token')
    }
  }
}
