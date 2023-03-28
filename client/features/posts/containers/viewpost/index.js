import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

import { _getPost } from '@/store/posts/postThunks'
import { MESSAGE_SEVERITY, notificationReceived } from '@/store/app/appSlice'
import { useAuth } from '@/features/authentication'

import ViewPostComponent from '../../components/viewpost'

function ViewPost () {
  const { authUser } = useAuth()
  const router = useRouter()
  const mounted = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    if (
      router.isReady &&
      mounted.current === undefined &&
      authUser !== null
    ) {
      dispatch(_getPost(`users/${authUser.uid}/posts/${router.query.id}`))
        .unwrap()
        .then()
        .catch((error) => {
          dispatch(notificationReceived({
            notification: error ?? 'Error loading the post',
            severity: MESSAGE_SEVERITY.ERROR
          }))
        })
      mounted.current = true
    }
  }, [dispatch, router.isReady, router.query, authUser])

  return (
    <ViewPostComponent />
  )
}

export default ViewPost
