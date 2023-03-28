import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { _getPost } from '@/store/posts/postThunks'
import { notificationReceived } from '@/store/app/appSlice'
import { MESSAGE_SEVERITY } from '@/store/app/appSlice'

const defaultState = { fetchSuccess: false, document: null }

/**
 * Fetchs a Firestore Post document to the posts.post store object.
 * @param {String} userId Firebase user's auth ID
 * @param {String} postId - Firestore Post document ID
 * @returns {Bool}
 *    - fetchSuccess: {Bool} Document fetch success or failure. Fetched Post is stored in the posts.post store object.
 *    - document: {Object} Local Post document. Can default to null even if the post store has a cached value.
 */
export default function useFetchPost (userId, postId) {
  const [state, setState] = useState(defaultState)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!postId) {
      setState(defaultState)
    }
  }, [postId])

  useEffect(() => {
    if (userId && postId) {
      dispatch(_getPost(`users/${userId}/posts/${postId}`))
        .unwrap()
        .then((response) => {
          setState({ fetchSuccess: true, document: response })
        })
        .catch((error) => {
          setState(defaultState)

          dispatch(notificationReceived({
            notification: error ?? 'Sorry, something went wrong while fetching the Post.',
            severity: MESSAGE_SEVERITY.ERROR
          }))
        })
    }
  }, [dispatch, userId, postId])

  return {
    fetchSuccess: state.fetchSuccess,
    document: state.document
  }
}
