import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { _getPublishedPostByCountry } from '@/store/posts/postThunks'
import { MESSAGE_SEVERITY, notificationReceived } from '@/store/app/appSlice'

const defaultState = { loading: false, error: '' }

export default function useFetchPublicPost (country = null) {
  const [state, setState] = useState(defaultState)
  const dispatch = useDispatch()

  useEffect(() => {
    if (country) {
      setState(prev => ({ ...prev, error: '', loading: true }))

      dispatch(_getPublishedPostByCountry(country))
        .unwrap()
        .then(() => {
          setState(prev => ({ ...prev, loading: false }))
        })
        .catch((error) => {
          setState(prev => ({ ...prev, loading: false, error }))

          dispatch(notificationReceived({
            notification: error,
            severity: MESSAGE_SEVERITY.ERROR
          }))
        })
    } else {
      setState(defaultState)
    }
  }, [dispatch, country])

  return {
    loading: state.loading,
    error: state.error
  }
}
