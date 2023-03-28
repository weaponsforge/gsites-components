import { WithCMSAuth } from '@/features/authentication'
import { EditPost } from '@/features/posts'

function CMSEditPost () {
  return (
    <EditPost />
  )
}

export default WithCMSAuth(CMSEditPost)