import { WithCMSAuth } from '@/features/authentication'
import { CreatePost } from '@/features/posts'

function CMSCreatePost () {
  return (
    <CreatePost />
  )
}

export default WithCMSAuth(CMSCreatePost)