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
      const user = await this.updateUserUseCase.execute({
        ...data,
        id: userId
      })

      return response.json(user)
    } catch (err) {
      if (err instanceof DevRadar_Error) {
        throw err
      } else {
        throw new DevRadar_Error('UNEXPECTD_ERROR')
      }
    }
  }
}
