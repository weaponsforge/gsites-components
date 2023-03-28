import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { _deletePost } from '@/store/posts/postThunks'
import { notificationReceived } from '@/store/app/appSlice'
import { MESSAGE_SEVERITY } from '@/store/app/appSlice'

/**
 * Deletes a Firestore Post document.
 * @param {String} userId Firebase user's auth ID
 * @param {String} postId - Firestore Post document ID
 * @returns {Bool} Document deletion success or failure
 */
export default function useDeletePost (userId, postId) {
  const [deleteSuccess, setDeleteSuccess] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!postId) {
      setDeleteSuccess(false)
    }
  }, [postId])

  useEffect(() => {
    if (userId && postId) {
      dispatch(_deletePost(`users/${userId}/posts/${postId}`))
        .unwrap()
        .then(() => {
          setDeleteSuccess(true)

          dispatch(notificationReceived({
            notification: 'Success! Post deleted.',
            severity: MESSAGE_SEVERITY.SUCCESS
          }))
        })
        .catch((error) => {
          setDeleteSuccess(false)

          dispatch(notificationReceived({
            notification: error ?? 'Sorry, something went wrong while deleting this Post.',
            severity: MESSAGE_SEVERITY.ERROR
          }))
        })
    }
  }, [dispatch, userId, postId])

  return {
    deleteSuccess
  }
}
