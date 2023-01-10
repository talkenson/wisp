import { createServer } from 'http'
import expressApp from './expressApp'

const httpServer = createServer(expressApp)

export { httpServer }
