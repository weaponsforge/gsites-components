import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { _deleteCard } from '@/store/cards/cardThunks'
import { notificationReceived } from '@/store/app/appSlice'
import { MESSAGE_SEVERITY } from '@/store/app/appSlice'

/**
 * Deletes a Firestore Card document.
 * @param {String} userId Firebase user's auth ID
 * @param {String} cardId - Firestore Card document ID
 * @returns {Bool} Document deletion success or failure
 */
export default function useDeleteCard (userId, cardId) {
  const [deleteSuccess, setDeleteSuccess] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!cardId) {
      setDeleteSuccess(false)
    }
  }, [cardId])

  useEffect(() => {
    if (userId && cardId) {
      dispatch(_deleteCard(`users/${userId}/cards/${cardId}`))
        .unwrap()
        .then(() => {
          setDeleteSuccess(true)

          dispatch(notificationReceived({
            notification: 'Success! File Card deleted.',
            severity: MESSAGE_SEVERITY.SUCCESS
          }))
        })
        .catch((error) => {
          setDeleteSuccess(false)

          dispatch(notificationReceived({
            notification: error ?? 'Sorry, something went wrong while deleting this File Card.',
            severity: MESSAGE_SEVERITY.ERROR
          }))
        })
    }
  }, [dispatch, userId, cardId])

  return {
    deleteSuccess
  }
}
