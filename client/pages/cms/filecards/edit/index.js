import { WithCMSAuth } from '@/features/authentication'
import { EditCard } from '@/features/filecards'

function CMSEditCard () {
  return (
    <EditCard />
  )
}

export default WithCMSAuth(CMSEditCard)