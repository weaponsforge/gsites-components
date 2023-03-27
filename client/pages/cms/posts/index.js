import { WithCMSAuth } from '@/features/authentication'
import { PostsList } from '@/features/posts'

function Posts () {
  return (<PostsList />)
}

export default WithCMSAuth(Posts)
