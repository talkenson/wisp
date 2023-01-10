import { justLog } from '@/utils/justLog'
import { createRedirectRouter } from '@/modules/redirector'
import { app } from '@/restWrapper'
import { httpServer } from '@/base'
import { collectControllers } from '@/collectControllers'

const PORT = parseInt(import.meta.env.VITE_PORT || '4080')
const HOST = import.meta.env.VITE_HOST || '0.0.0.0'
const SCHEMA = import.meta.env.VITE_SCHEMA || 'http'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/_wisp'

justLog.log('Starting...', API_BASE_URL)
app.get('/', (req, res) => res.json({ greeting: "Hello! It's Wisp!" }))
app.use(API_BASE_URL, collectControllers())
app.use('/', createRedirectRouter())

const listener = httpServer.listen(PORT, HOST, () => {
  justLog.success(
    `Setup succeed! Listening on ${SCHEMA}://${HOST}:${PORT}${API_BASE_URL}`,
  )
})

process.on('SIGINT', async () => {
  justLog.warn('Forced stopping. Calling exit hooks...')
  await listener.close()
  process.exit()
})
