import { Application } from 'express'

import { userRouter } from './user/user.routes'

import { routePrefix } from './../types/apiversion'

export default (app: Application) => {
  app.use(`${routePrefix.coreRouteV1}/user`, userRouter)
}
