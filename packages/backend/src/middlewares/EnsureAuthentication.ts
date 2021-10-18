import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { DevRadar_Error } from '../errors/errors'

interface TokenPayload {
  id: string
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

    const { id } = data as TokenPayload

    request.userId = id

    return next()
  } catch (error) {
    console.log(error)
    throw new DevRadar_Error('INVALID_REQUEST', 'Invalid Token')
  }
}
