import { z } from 'zod'
import { RawPassword } from '@/domain/password'
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
type Literal = z.infer<typeof literalSchema>
type Json = Literal | { [key: string]: Json } | Json[]
const jsonSchema: z.ZodType<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]),
)

export enum AccountOrigin {
  Local = 'Local',
  VK = 'VK',
  Telegram = 'Telegram',
}

export const Account = z.object({
  id: z.number().int(),
  email: z.string().email().nullish(),
  password: RawPassword,
  origin: z.nativeEnum(AccountOrigin).default(AccountOrigin.Telegram),
  externalId: z.number().int().nullish(),
})

export type Account = z.infer<typeof Account>
