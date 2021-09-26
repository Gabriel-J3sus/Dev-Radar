import { Request, Response } from 'express'

import { RefreshTokenUseCase } from './RefreshTokenUseCase'

export class RefreshTokenController {
  constructor(private refreshTokenUseCase: RefreshTokenUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { refresh_token } = request.body

    try {
      const token = await this.refreshTokenUseCase.execute(refresh_token)

      return response.status(200).json(token)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpcted error has ocurred'
      })
    }
  }
}