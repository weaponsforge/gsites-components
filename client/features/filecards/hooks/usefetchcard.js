import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { _getCard } from '@/store/cards/cardThunks'
import { notificationReceived } from '@/store/app/appSlice'
import { MESSAGE_SEVERITY } from '@/store/app/appSlice'

const defaultState = { fetchSuccess: false, document: null }

/**
 * Fetchs a Firestore Card document to the cards.card store object.
 * @param {String} userId Firebase user's auth ID
 * @param {String} cardId - Firestore Card document ID
 * @returns {Bool}
 *    - fetchSuccess: {Bool} Document fetch success or failure. Fetched Card is stored in the cards.card store object.
 *    - document: {Object} Local state Card document. Can default to null even if the card store has a cached value.
 */
export default function useFetchCard (userId, cardId) {
  const [state, setState] = useState(defaultState)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!cardId) {
      setState(defaultState)
    }
  }, [cardId])

  useEffect(() => {
    if (userId && cardId) {
      dispatch(_getCard(`users/${userId}/cards/${cardId}`))
        .unwrap()
        .then((response) => {
          setState({ fetchSuccess: true, document: response })
        })
        .catch((error) => {
          setState(defaultState)

          dispatch(notificationReceived({
            notification: error ?? 'Sorry, something went wrong while fetching the File Card.',
            severity: MESSAGE_SEVERITY.ERROR
          }))
        })
    }
  }, [dispatch, userId, cardId])

  return {
    fetchSuccess: state.fetchSuccess,
    document: state.document
  }
}
