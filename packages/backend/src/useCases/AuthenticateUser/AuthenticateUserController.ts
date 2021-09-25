import { Request, Response } from 'express'
import * as Yup from 'yup'

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

export class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body

    const toBeValidated = { email, password }

    const schema = Yup.object().shape({
      email: Yup.string().required().email(),
      password: Yup.string().required()
    })

    await schema.validate(toBeValidated, {
      abortEarly: false
    })

    try {
      const token = await this.authenticateUserUseCase.execute({
        email,
        password
      })

      return response.status(200).json(token)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpcted error has ocurred'
      })
    }
  }
}
