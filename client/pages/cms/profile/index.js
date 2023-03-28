import { WithCMSAuth } from '@/features/authentication'
import { ViewProfile } from '@/features/userprofile'

function UserProfile () {
  return (
    <ViewProfile />
  )
}

export default WithCMSAuth(UserProfile)
