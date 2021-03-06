import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup'

import { DevRadar_Error } from './errors'

interface ValidationErrors {
  [key: string]: string[]
}

const serverError = new DevRadar_Error('SERVER_ERROR')

export const errorHandler: ErrorRequestHandler = (
  error,
  request,
  response,
  next
) => {
  if (error instanceof ValidationError) {
    let errors: ValidationErrors = {}

    error.inner.forEach(err => {
      if (err.path) {
        errors[err.path] = err.errors
      }
    })

    return response.status(400).json({ message: 'Validation error', errors })
  } else if (error.isDevRadarError) {
    const err = error as DevRadar_Error

    return response.status(err.status).send(err)
  }

  console.log(error)

  return response.send(serverError)
}
