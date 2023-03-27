import { WithAuth } from '@/features/authentication'
import { ViewPost } from '@/features/posts'

function CMSViewPost () {
  return (
    <ViewPost />
  )
}

export default WithAuth(CMSViewPost)