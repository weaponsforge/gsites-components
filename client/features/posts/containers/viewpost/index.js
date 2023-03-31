import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { _updatePost } from '@/store/posts/postThunks'
import { notificationReceived } from '@/store/app/appSlice'
import { useAuth } from '@/features/authentication'
import useDeletePost from '../../hooks/usedeletepost'
import useFetchPost from '../../hooks/usefetchpost'
import { MESSAGE_SEVERITY } from '@/store/app/appSlice'

import ViewPostComponent from '../../components/viewpost'

const actionDeleteSettings = {
  title: 'Delete Post',
  message: 'Are you sure you want to delete this Post?',
  success: 'Post deleted.'
}

const actionPublishSettings = {
  title: 'Publish Post',
  message: 'Are you sure you want to publish this Post?',
  success: 'Post successfully published.'
}

const actionUnPublishSettings = {
  title: 'Unpublish Post',
  message: 'Are you sure you want to unpublish this Post?',
  success: 'Post successfully unpublished.'
}

const ACTION_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  PUBLISH: 'publish',
  UNPUBLISH: 'unpublish'
}

const defaultState = {
  isOpenDialog: false,
  docId: null,
  tempId: null,
  action: null,
  actionTypes: ACTION_TYPES,
  actionSuccess: false,
  dialogTitle: '',
  dialogMessage: '',
  dialogSuccess: ''
}

function ViewPost () {
  const [state, setState] = useState(defaultState)
  const router = useRouter()
  const dispatch = useDispatch()

  const post = useSelector(state => state.posts.post)

  const { authUser } = useAuth()
  const { deleteSuccess } = useDeletePost(authUser?.uid, state.docId)
  useFetchPost(authUser?.uid, state.tempId)

  useEffect(() => {
    if (
      router.isReady &&
      authUser !== null
    ) {
      if (post === null) {
        setState(prev => ({ ...prev, tempId: router.query.id }))
      }
    }
  }, [dispatch, router.isReady, router.query, authUser, post])

  // Delete this Post
  const deletePost = (postId) => {
    setState({ ...state, docId: postId })
  }

  // Toggle this Post's published status
  const togglePublishedStatus = async (postId, isPostPublished) => {
    dispatch(_updatePost({
      documentPath: `users/${authUser.uid}/posts/${postId}`,
      params: { published: isPostPublished }
    }))
      .unwrap()
      .then(() => {
        setState({ ...state, docId: null, isOpenDialog: false  })

        dispatch(notificationReceived({
          notification: actionPublishSettings.success,
          severity: MESSAGE_SEVERITY.SUCCESS
        }))
      })
      .catch(error => {
        setState({ ...state, isOpenDialog: false })

        dispatch(notificationReceived({
          notification: error ?? 'Sorry, something went wrong while updating the Post.',
          severity: MESSAGE_SEVERITY.ERROR
        }))
      })
  }

  const handleControlClick = (mode, docId) => {
    if (mode === ACTION_TYPES.DELETE) {
      setState({
        ...state,
        isOpenDialog: true,
        action: ACTION_TYPES.DELETE,
        dialogTitle: actionDeleteSettings.title,
        dialogMessage: actionDeleteSettings.message,
        dialogSuccess: actionDeleteSettings.success
      })
    } else if (mode === ACTION_TYPES.PUBLISH) {
      setState({
        ...state,
        isOpenDialog: true,
        action: (!post?.published) ? ACTION_TYPES.PUBLISH : ACTION_TYPES.UNPUBLISH,
        dialogTitle: (!post?.published) ? actionPublishSettings.title : actionUnPublishSettings.title,
        dialogMessage: (!post?.published) ? actionPublishSettings.message : actionUnPublishSettings.message,
        dialogSuccess: (!post?.published) ? actionPublishSettings.success : actionUnPublishSettings.success
      })
    } else {
      router.push(`/cms/posts/${mode}?id=${docId}`)
    }
  }

  return (
    <ViewPostComponent
      handleControlClick={handleControlClick}
      handleDeleteCancel={() => setState(prev => ({ ...prev, isOpenDialog: false }))}
      deletePost={deletePost}
      publishPost={togglePublishedStatus}
      navigateToPosts={() => router.push('/cms/posts')}
      localstate={state}
      actionTypes={ACTION_TYPES}
      deleteSuccess={deleteSuccess}
    />
  )
}

export default ViewPost
