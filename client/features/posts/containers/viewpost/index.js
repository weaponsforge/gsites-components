import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

import { useAuth } from '@/features/authentication'
import { _getPost } from '@/store/posts/postThunks'
import useDeletePost from '../../hooks/usedeletepost'
import { MESSAGE_SEVERITY, notificationReceived } from '@/store/app/appSlice'

import ViewPostComponent from '../../components/viewpost'

const defaultState = { isOpenDialog: false, docId: null, tempId: null }

function ViewPost () {
  const [deleteState, setDeleteState] = useState(defaultState)
  const router = useRouter()
  const mounted = useRef()
  const dispatch = useDispatch()

  const { authUser } = useAuth()
  const { deleteSuccess } = useDeletePost(authUser?.uid, deleteState.docId)

  useEffect(() => {
    if (
      router.isReady &&
      mounted.current === undefined &&
      authUser !== null
    ) {
      mounted.current = true

      dispatch(_getPost(`users/${authUser.uid}/posts/${router.query.id}`))
        .unwrap()
        .then()
        .catch((error) => {
          dispatch(notificationReceived({
            notification: error ?? 'Error loading the post',
            severity: MESSAGE_SEVERITY.ERROR
          }))
        })
    }
  }, [dispatch, router.isReady, router.query, authUser])

  const deletePost = (postId) => {
    setDeleteState({ ...deleteState, docId: postId })
  }

  const handleControlClick = (mode) => {
    if (mode === 'delete') {
      setDeleteState({ ...deleteState, isOpenDialog: true })
    } else {
      router.push(`/cms/posts/${mode}`)
    }
  }

  return (
    <ViewPostComponent
      handleControlClick={handleControlClick}
      handleDeleteCancel={() => setDeleteState(prev => ({ ...prev, isOpenDialog: false }))}
      deletePost={deletePost}
      navigateToPosts={() => router.push('/cms/posts')}
      deleteState={deleteState}
      deleteSuccess={deleteSuccess}
    />
  )
}

export default ViewPost
