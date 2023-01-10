import { z } from 'zod'
import { Account } from './account'
import { Deploy } from './deploy'
import { DomainInvitation } from './domainInvitation'
import { Membership } from './membership'

export const Domain = z.object({
  id: z.number().int(),
  name: z.string().nullish(),
  domainName: z.string(),
  dnsRecord: z.string(),
  ownerId: z.number().int(),
  owner: Account,
  createdAt: z.string(),
})

export type Domain = z.infer<typeof Domain>
