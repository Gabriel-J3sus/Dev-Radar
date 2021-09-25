import { PrismaClient, RefreshToken } from '@prisma/client'
import dayjs from 'dayjs'

import { IRefreshTokenRepository } from '../IRefreshTokenRepository'

export class JWTRefreshTokenRepository implements IRefreshTokenRepository {
  prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  expiration(): number {
    const expiresIn = dayjs().add(10, 'seconds').unix()

    return expiresIn
  }

  async findByToken(refresh_token: string): Promise<RefreshToken> {
    const refreshToken = await this.prisma.refreshToken.findFirst({
      where: {
        id: refresh_token
      }
    })

    return refreshToken
  }

  async generateRefreshToken(userId: string): Promise<RefreshToken> {
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
      throw new Error('Impossible to create a new token')
    }
  }

  async deleteRefreshToken(userId: string): Promise<void> {
    try {
      await this.prisma.refreshToken.deleteMany({
        where: {
          userId: userId
        }
      })
    } catch (err) {
      throw new Error('Impossible to delete token')
    }
  }
}
