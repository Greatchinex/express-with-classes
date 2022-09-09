import 'reflect-metadata'
import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'

import routes from './namespaces/index.routes'

config()

const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(cors())
routes(app)

app.get('/', (_, response) => {
  response.status(200).json({ message: 'Simple barebones express class setup' })
})

app.listen(port, () => {
  console.log('Server is listening on port ===> ', port)
})
