import express from 'express'
import 'express-async-errors'
import cors, { CorsOptions } from 'cors'

import { errorHandler } from '@errors/handler'
import { routes } from './routes'

const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const app = express()

app.use(express.json())


app.use(cors(corsOptions))
app.use(routes)
app.use(errorHandler)

export { app }
