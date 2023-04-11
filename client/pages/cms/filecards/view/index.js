import { WithCMSAuth } from '@/features/authentication'
import { ViewCard } from '@/features/filecards'

function CMSViewCard () {
  return (
    <ViewCard />
  )
}

export default WithCMSAuth(CMSViewCard)