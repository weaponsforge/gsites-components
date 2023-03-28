import { WithCMSAuth } from '@/features/authentication'
import { ViewPost } from '@/features/posts'

function CMSViewPost () {
  return (
    <ViewPost />
  )
}

export default WithCMSAuth(CMSViewPost)