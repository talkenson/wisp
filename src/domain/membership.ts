import { z } from 'zod'
import { Account } from './account'
import { Domain } from './domain'
import { DomainInvitation } from './domainInvitation'

export const Membership = z.object({
  id: z.number(),
  createdAt: z.string(),
  domainId: z.number(),
  domain: Domain,
  invitationId: z.number(),
  invitation: DomainInvitation,
  accountId: z.number(),
  account: Account,
})

export type Membership = z.infer<typeof Membership>
