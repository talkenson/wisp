import { useRedirectStore } from '@/modules/redirector/stores/general'
import { RedirectCache } from '@/modules/redirector/types/RedirectCache.types'

export const redirectCacheStore = useRedirectStore<RedirectCache, 'trigger'>(
  'redirectCache',
  'trigger',
)
