import { Request, Response } from 'express'
import { DevRadar_Error, Errors } from '../../errors/errors'

import { RefreshTokenUseCase } from './RefreshTokenUseCase'

export class RefreshTokenController {
  constructor(private refreshTokenUseCase: RefreshTokenUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { refresh_token } = request.body

    try {
      const token = await this.refreshTokenUseCase.execute({ refresh_token })

      return response.status(200).json(token)
    } catch (err) {
      const isPredictedError =
        err.name &&
        Errors.find(devRadarError => devRadarError.name === err.name)

      if (isPredictedError) {
        throw new DevRadar_Error(err.name, err.message)
      } else {
        throw new DevRadar_Error('UNEXPECTD_ERROR')
      }
    }
  }
}
