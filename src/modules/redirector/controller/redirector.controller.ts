import express from 'express'
import { redirectCacheStore } from '@/modules/redirector/stores/cache.store'

export const createRedirectControllerRouter = () => {
  const router = express.Router()

  router.get('/add', async (req, res) => {
    const { trigger, target } = req.body as { trigger: string; target: string }
    redirectCacheStore.insert(trigger, { trigger, target })
    return res.json({
      action: 'add',
      trigger,
      target,
    })
  })

  return router
}
