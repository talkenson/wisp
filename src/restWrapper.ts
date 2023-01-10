import app from '@/base/expressApp'
import { jsonParseError } from '@/middlewares/jsonParseError'

app.use(jsonParseError(app))

export { app }
