import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { DevRadar_Error } from '../errors/errors'

export function EnsureAuthentication(
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
    verify(token, process.env.JWT_SECRET)

    return next()
  } catch (error) {
    throw new DevRadar_Error('INVALID_REQUEST', 'Invalid Token')
  }
}
