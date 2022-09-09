import { Router } from 'express'
import { container } from 'tsyringe'

import { UserController } from './user.controller'

const router = Router()
const userController: UserController = container.resolve<UserController>(UserController)

router.post('/login', userController.login.bind(userController))
router.get('/all-users', userController.getAllusers.bind(userController))

export { router as userRouter }
