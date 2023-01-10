import { z } from 'zod'
import { Account } from './account'
import { Domain } from './domain'

export const DomainInvitation = z.object({
  id: z.number(),
  createdAt: z.string(),
  createdBy: z.number(),
  creator: Account,
  domainId: z.number(),
  domain: Domain,
  inviteeId: z.number(),
  invitee: Account,
  inviteString: z.string(),
})

export type DomainInvitation = z.infer<typeof DomainInvitation>
