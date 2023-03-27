import { WithAuth } from '@/features/authentication'
import { EditPost } from '@/features/posts'

function CMSEditPost () {
  return (
    <EditPost />
  )
}

export default WithAuth(CMSEditPost)