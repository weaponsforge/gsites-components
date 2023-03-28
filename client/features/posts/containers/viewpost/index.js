import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

import { useAuth } from '@/features/authentication'
import useDeletePost from '../../hooks/usedeletepost'
import useFetchPost from '../../hooks/usefetchpost'

import ViewPostComponent from '../../components/viewpost'

const defaultState = { isOpenDialog: false, docId: null, tempId: null }

function ViewPost () {
  const [deleteState, setDeleteState] = useState(defaultState)
  const router = useRouter()
  const dispatch = useDispatch()

  const { authUser } = useAuth()
  const { deleteSuccess } = useDeletePost(authUser?.uid, deleteState.docId)
  useFetchPost(authUser?.uid, deleteState.tempId)

  useEffect(() => {
    if (
      router.isReady &&
      authUser !== null
    ) {
      setDeleteState(prev => ({ ...prev, tempId: router.query.id }))
    }
  }, [dispatch, router.isReady, router.query, authUser])

  const deletePost = (postId) => {
    setDeleteState({ ...deleteState, docId: postId })
  }

  const handleControlClick = (mode, docId) => {
    if (mode === 'delete') {
      setDeleteState({ ...deleteState, isOpenDialog: true })
    } else {
      router.push(`/cms/posts/${mode}?id=${docId}`)
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
