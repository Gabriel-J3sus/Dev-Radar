import { Request, Response } from 'express'
import * as Yup from 'yup'
import { DevRadar_Error } from '../../errors/errors'
import { AlterPasswordUseCase } from '../AlterPassword/AlterPasswordUseCase'
import { PasswordHeaders } from './AlterPasswordDTO'

export class AlterPasswordController {
  constructor(private updateUserUseCase: AlterPasswordUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { newPassword, oldPassword } = request.body
    const userId = request.userId
    const { type } = request.query

    const schema = Yup.object().shape({
      newPassword: Yup.string().required()
    })

    await schema.validate(
      { newPassword },
      {
        abortEarly: false
      }
    )

    try {
      const user = await this.updateUserUseCase.execute({
        id: userId,
        newPassword,
        oldPassword,
        requestHeader: type as PasswordHeaders
      })

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
