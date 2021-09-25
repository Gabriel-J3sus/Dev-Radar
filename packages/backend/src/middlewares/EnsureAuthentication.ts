import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

export function EnsureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization

  if (!authToken) {
    throw new Error('Token is missing')
  }

  const [, token] = authToken.split(' ')

  try {
    verify(token, process.env.JWT_SECRET)

    return next()
  } catch (error) {
    throw new Error('Token invalid')
  }
}
