import { CrudStorage } from '@/base/useTable/types'
import { getBoundStorage } from '@/base/useTable/useTableWithStore'

const RedirectStorage: CrudStorage = {}

export const useRedirectStore = getBoundStorage(RedirectStorage)