import { RM, SRM, ERM } from '../types/response'
import { StatusCodes } from 'http-status-codes'

export class RequestResponses {
  apiResponse({ req, res, data, error, http_code, log_body }: RM) {
    const { message, data: payload } = data
    switch (data.status) {
      case 'successful':
        this.handleSuccessResponse({ req, res, message, payload, log_body, http_code })
        break
      case 'error':
        this.handleErrorResponse({ req, res, message, payload, error, log_body, http_code })
        break
      default:
        this.handleErrorResponse({ req, res, message, payload, error, log_body, http_code })
    }
  }

  private handleSuccessResponse({ req, res, payload, http_code, message, log_body }: SRM) {
    const logBody = log_body === false ? ['Redacted'] : req.body
    const code = http_code ?? StatusCodes.OK
    console.log(logBody)

    return res.status(code).json({
      success: true,
      message,
      payload
    })
  }

  private handleErrorResponse({ req, res, payload, http_code, message, error, log_body }: ERM) {
    const logBody = log_body === false ? ['Redacted'] : req.body
    const code = http_code ?? StatusCodes.BAD_REQUEST
    console.log(logBody)
    console.log(error)

    return res.status(code).json({
      success: false,
      message,
      payload
    })
  }
}
