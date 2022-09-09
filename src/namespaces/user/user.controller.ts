import { Request, Response } from 'express'
import { autoInjectable } from 'tsyringe'

import { UserService } from './user.service'
import { ApiResponses } from '../../utils/responses'

@autoInjectable()
export class UserController {
  private readonly userService: UserService
  private readonly apiResponses: ApiResponses

  constructor(userService: UserService, apiResponses: ApiResponses) {
    this.userService = userService
    this.apiResponses = apiResponses
  }

  login(req: Request, res: Response) {
    const email: string = req.body.email
    try {
      const data = this.userService.login(email)
      this.apiResponses.apiResponse({ req, res, data })
    } catch (error) {
      this.apiResponses.apiResponse({
        req,
        res,
        error,
        data: { status: 'error', message: 'Login Failed' }
      })
    }
  }

  getAllusers(req: Request, res: Response) {
    try {
      const users = this.userService.getAllusers()
      this.apiResponses.apiResponse({
        req,
        res,
        data: { status: 'successful', message: 'Fetched users', data: users }
      })
    } catch (error) {
      this.apiResponses.apiResponse({
        req,
        res,
        error,
        data: { status: 'error', message: 'Failed to fetch users' }
      })
    }
  }
}
