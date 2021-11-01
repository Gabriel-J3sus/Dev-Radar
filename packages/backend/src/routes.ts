import { Router } from 'express'
import { ensureAuthentication } from './middlewares/ensureAuthentication'

import { authenticateUserController } from './useCases/AuthenticateUser'
import { createUserController } from './useCases/CreateUser'
import { forgotPasswordController } from './useCases/ForgotPassword'
import { refreshTokenController } from './useCases/RefreshToken'
import { updateUserController } from './useCases/UpdateUser'
import { alterPasswordController } from './useCases/AlterPassword'

const routes = Router()

routes.post('/signup', (request, response) =>
  createUserController.handle(request, response)
)
routes.post('/signin', (request, response) =>
  authenticateUserController.handle(request, response)
)
routes.post('/refresh-token', (request, response) =>
  refreshTokenController.handle(request, response)
)

routes.post('/forgot-password', (request, response) =>
  forgotPasswordController.handle(request, response)
)

routes.put('/update-user', ensureAuthentication, (request, response) =>
  updateUserController.handle(request, response)
)

routes.put('/alter-password', ensureAuthentication, (request, response) =>
  alterPasswordController.handle(request, response)
)

export { routes }
