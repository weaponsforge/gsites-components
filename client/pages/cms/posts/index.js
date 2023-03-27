import { WithAuth } from '@/features/authentication'
import { PostsList } from '@/features/posts'

function Posts () {
  return (<PostsList />)
}

export default WithAuth(Posts)
