import express from 'express'
import { getDeploy } from './repo/redirector.repo'
import { redirectCacheStore } from '@/modules/redirector/stores/cache.store'
import { justLog } from '@/utils/justLog'

export const createRedirectRouter = () => {
  const router = express.Router()
  router.get('/', async (req, res) => {
    res.json({ a: 1 })
  })

  router.get('/:trigger', async (req, res) => {
    const { trigger } = req.params

    justLog.log(`Redirecting ${trigger}...`)

    const computedFullName = req.hostname + trigger.toString()

    const cache = redirectCacheStore.get(computedFullName)
    if (cache) {
      return res.json({
        state: 'cached',
        computed: computedFullName,
        target: cache.target,
      })
    } else {
      const deploy = await getDeploy(req.hostname, trigger)
      return res.json({
        action: 'redirect',
        host: req.hostname,
        trigger,
        deploy,
      })
    }
  })

  return router
}
