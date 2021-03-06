import { Request, Response } from 'express'
import * as Yup from 'yup'

import { DevRadar_Error } from '@errors/errors'
import { ForgotPasswordUseCase } from './ForgotPasswordUseCase'

export class ForgotPasswordController {
  constructor(private forgotPasswordUseCase: ForgotPasswordUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body

    const schema = Yup.object().shape({
      email: Yup.string().email().required()
    })

    await schema.validate({ email }, { abortEarly: false })

    try {
      await this.forgotPasswordUseCase.execute({ email })

      return response.json({
        message: 'An e-mail was sent to your address'
      })
    } catch (err) {
      if (err instanceof DevRadar_Error) {
        return response.json(err)
      } else {
        throw new DevRadar_Error('UNEXPECTD_ERROR')
      }
    }
  }
}
