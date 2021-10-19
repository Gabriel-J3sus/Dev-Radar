import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { DevRadar_Error } from '../errors/errors'

interface TokenPayload {
  sub: string
  iat: number
  exp: number
}

export function ensureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization

  if (!authToken) {
    throw new DevRadar_Error('INVALID_REQUEST', 'Token required')
  }

  const [, token] = authToken.split(' ')

  try {
    const data = verify(token, process.env.JWT_SECRET)

    const { sub } = data as TokenPayload

    request.userId = sub

    return next()
  } catch (error) {
    throw new DevRadar_Error('INVALID_REQUEST', 'Invalid Token')
  }
}
