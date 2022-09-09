import 'reflect-metadata'
import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'

config()

const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(cors())

app.get('/', (_, response) => {
  response.status(200).json({ message: 'Simple barebones express class setup' })
})

app.listen(port, () => {
  console.log('Server is listening on port ===> ', port)
})
