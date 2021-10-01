import { PrismaClient } from '@prisma/client'
import dayjs from 'dayjs'
import { DevRadar_Error } from '../../errors/errors'

import { IRefreshTokenRepository } from '../IRefreshTokenRepository'

export class JWTRefreshTokenRepository implements IRefreshTokenRepository {
  prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  expiration: IRefreshTokenRepository["expiration"] = () => {
    const expiresIn = dayjs().add(10, 'seconds').unix()

    return expiresIn
  }

  findByToken: IRefreshTokenRepository["findByToken"] = async ({ refresh_token }) => {
    const refreshToken = await this.prisma.refreshToken.findFirst({
      where: {
        id: refresh_token
      }
    })

    return refreshToken
  }

  generateRefreshToken: IRefreshTokenRepository["generateRefreshToken"] = async ({ userId }) => {
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
      throw new DevRadar_Error("INVALID_REQUEST", "Impossível criar um novo token")
    }
  }

  deleteRefreshToken: IRefreshTokenRepository["deleteRefreshToken"] = async ({ userId }) => {
    try {
      await this.prisma.refreshToken.deleteMany({
        where: {
          userId: userId
        }
      })
    } catch (err) {
      throw new DevRadar_Error("INVALID_REQUEST", "Impossível deletar token")
    }
  }
}
