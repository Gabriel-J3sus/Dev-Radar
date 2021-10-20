// sua única responsabilidade é receber e processar a requisição do usuário e devolver uma resposta
import { Request, Response } from 'express'
import * as Yup from 'yup'
import { DevRadar_Error, Errors, IDevRadar_ERROR } from '../../errors/errors'

import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, email, password } = request.body

    const toBeValidated = { name, username, email, password }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      username: Yup.string().required(),
      email: Yup.string().required().email(),
      password: Yup.string().required()
    })

    await schema.validate(toBeValidated, {
      abortEarly: false
    })

    try {
      const user = await this.createUserUseCase.execute({
        name,
        username,
        email,
        password
      })

      return response.status(201).json(user)
    } catch (err) {
      if (err instanceof DevRadar_Error) {
        throw err
      } else {
        throw new DevRadar_Error('UNEXPECTD_ERROR')
      }
    }
  }
}
