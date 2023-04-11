import { WithCMSAuth } from '@/features/authentication'
import { CreateCard } from '@/features/filecards'

function CMSCreateCard () {
  return (
    <CreateCard />
  )
}

export default WithCMSAuth(CMSCreateCard)
