import { createRedirectControllerRouter } from '@/modules/redirector/controller/redirector.controller'
import express from 'express'
import { app } from '@/restWrapper'

const controllers = [
  { path: 'redirect', createController: createRedirectControllerRouter },
]

export const collectControllers = () => {
  const router = express.Router()

  router.get('/', (req, res) => res.json(app._router.stack))

  controllers.forEach(({ path, createController }) => {
    router.use(`/${path}`, createController())
  })

  return router
}
