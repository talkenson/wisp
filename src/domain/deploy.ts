import { z } from 'zod'
import { Account } from './account'
import { Domain } from './domain'

export const Deploy = z.object({
  id: z.number(),
  createdAt: z.string(),
  createdBy: z.number().int(),
  creator: Account,
  domainId: z.number().int(),
  domain: Domain,
  url: z.string(),
  targetUrl: z.string(),
})

export type Deploy = z.infer<typeof Deploy>
