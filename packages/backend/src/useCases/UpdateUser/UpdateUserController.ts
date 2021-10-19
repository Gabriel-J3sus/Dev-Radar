import { Response, Request } from 'express'
import * as Yup from 'yup'

import { UserEntity } from '../../entities/User'
import { DevRadar_Error, Errors } from '../../errors/errors'
import { UpdateUserUseCase } from './UpdateUserUseCase'

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const data: UserEntity = request.body
    const userId = request.userId

    try {
      console.log(data)
      const user = await this.updateUserUseCase.execute({
        ...data,
        id: userId
      })
      console.log('aa')
      return response.json(user)
    } catch (err) {
      const isPredictedError = Errors.find(
        devRadarError => devRadarError.name === err.name
      )

      if (isPredictedError) {
        throw new DevRadar_Error(
          isPredictedError.name,
          isPredictedError.message
        )
      } else {
        throw new DevRadar_Error('UNEXPECTD_ERROR')
      }
    }
  }
}
