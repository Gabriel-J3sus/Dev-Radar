import { Response, Request } from 'express'

import { DevRadar_Error } from '@errors/errors'
import { UpdateUserUseCase } from './UpdateUserUseCase'

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { password, id, ...data } = request.body
    const userId = request.userId

    try {
      const user = await this.updateUserUseCase.execute({ id: userId, ...data })

      return response.json(user)
    } catch (err) {
      if (err instanceof DevRadar_Error) {
        return response.json(err)
      } else {
        throw new DevRadar_Error('UNEXPECTD_ERROR')
      }
    }
  }
}
