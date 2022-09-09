import Logger from 'pino'
import { config } from 'dotenv'
import dayjs from 'dayjs'

config()

const logger = Logger({
  redact: ['password', 'pin', 'bvn', 'api_key', 'new_password', 'old_password', 'token'],
  timestamp: () => `,"time":"${dayjs().format('YYYY-MM-DD HH:mm:ss')}"`,
  transport: {
    target: process.env.NODE_ENV === 'development' ? 'pino-pretty' : 'pino/file'
  }
})

export default logger
