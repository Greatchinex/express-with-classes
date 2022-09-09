import { Request, Response } from 'express'

type DataType = {
  status: 'successful' | 'error'
  message: string
  data?: any
}

type RM = {
  req: Request
  res: Response
  http_code?: number
  log_body?: boolean
  data: DataType
  error?: any
}

type SRM = {
  req: Request
  res: Response
  message: string
  http_code?: number
  log_body?: boolean
  payload?: any
}

type ERM = {
  req: Request
  res: Response
  message: string
  http_code?: number
  log_body?: boolean
  payload?: DataType
  error?: any
}

export { RM, SRM, ERM, DataType }
