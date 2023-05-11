import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/**
 * Fetch a store object's items (entities) only once during initial page load.
 * @typedef {Object} params - Input parameters.
 * @param {String} params.uid - Signed-in Firebase user's auth ID
 * @param {String} params.storeName - Redux slice store selector name
 * @param {Function} params.fetchThunk - Redux thunk (created with createAsyncThunk) for fetching data
 * @param {String} params.collectionPath - Firestore slash-separated path to a collection
 * @returns {Bool} - Selected store's "initialized" (entities loaded) state
 */
export default function useInitStore ({
  uid,
  storeName,
  fetchThunk,
  collectionPath
}) {
  const initialized = useSelector(state => state[storeName]?.initialized)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!initialized && uid !== undefined) {
      dispatch(fetchThunk(collectionPath))
    }
  }, [dispatch, uid, initialized, collectionPath, fetchThunk])

  return {
    initialized
  }
}
