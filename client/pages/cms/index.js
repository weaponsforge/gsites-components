import { WithAuth } from '@/features/authentication'
import { Home } from '@/features/cms'

function CMS () {
  return (
    <Home />
  )
}

export default WithAuth(CMS)
