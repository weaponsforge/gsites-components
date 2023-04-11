import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { _getPosts } from '@/store/posts/postThunks'
import { _getCards } from '@/store/cards/cardThunks'
import { loadedReceived } from '@/store/app/appSlice'

/**
 * Fetch all user's (reference) Posts and File Cards only once during the initial app load (of any <WithCMSAuth> wrapped components).
 * The reference Posts documents contain the original Posts data minus the Post.content field.
 * @param {String} uid - Signed-in Firebase user's auth ID
 * @returns {Bool} - Client app's initial load state
 */
export default function useInitStore (uid) {
  const loaded = useSelector(state => state.app.loaded)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!loaded && uid !== undefined) {
      // Fetch all Posts (references)
      dispatch(_getPosts(`users/${uid}/posts_ref`))

      // Fetch all Cards
      dispatch(_getCards(`users/${uid}/cards`))
      dispatch(loadedReceived(true))
    }
  }, [dispatch, uid, loaded])

  return {
    loaded
  }
}
