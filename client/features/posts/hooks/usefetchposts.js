import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { _getPosts } from '@/store/posts/postThunks'
import { ADAPTER_STATES } from '@/store/constants'

/**
 * Fetch all user's Posts if the local store's Posts list is empty
 * @param {String} uid - Signed-in Firebase user's auth ID
 * @returns {String[]} - Array of fetched Posts IDs
 */
export default function useFetchPosts (uid) {
  const { ids, status } = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    if (ids.length === 0 && status === ADAPTER_STATES.IDLE && uid !== undefined) {
      console.log('---fetching')
      dispatch(_getPosts(`users/${uid}/posts`))
    }
  }, [dispatch, ids, uid])

  return {
    ids
  }
}
