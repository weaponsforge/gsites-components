import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { _updatePost } from '@/store/posts/postThunks'
import { notificationReceived, MESSAGE_SEVERITY } from '@/store/app/appSlice'
import { useAuth } from '@/features/authentication'

import useFetchPost from '../../hooks/usefetchpost'
import CreatePostComponent from '../../components/createpost'
import { ADAPTER_STATES } from '@/store/constants'

const defaultState = { title: '', description: '', slug: '', country: '', author: '' }
const defaultSaveStatus = { isOpenDialog: false, saveSuccess: false, docId: null, tempId: null }

function EditPost () {
  const [details, setDetails] = useState(defaultState)
  const [saveState, setSaveStatus] = useState(defaultSaveStatus)
  const [content, setContent] = useState(null)

  const { authUser } = useAuth()
  const dispatch = useDispatch()
  const router = useRouter()

  const post = useSelector(state => state.posts.post)
  const status = useSelector(state => state.posts.status)

  // Fetch the newly-selected Post
  useFetchPost(authUser?.uid, saveState.docId)

  useEffect(() => {
    if (post && content === null) {
      // Initialize the WYSIWYG Editor's content
      setContent(post.content)
    }
  }, [post, content])

  useEffect(() => {
    if (
      router.isReady &&
      authUser !== null &&
      status === ADAPTER_STATES.IDLE
    ) {
      if (post === null) {
        setSaveStatus(prev => ({ ...prev, docId: router.query.id }))
      }
    }
  }, [dispatch, router.isReady, router.query, authUser, post, status])

  const handleNewContent = (newContent) => {
    setContent(newContent)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Set the other Post details
    const meta = Object.keys(defaultState).reduce((list, key) => ({
      ...list, [key]: e.target[key].value }), [])

    // Validate input
    for (let key in details) {
      if (meta[key] === '' || meta[key] === null || meta[key] === undefined || (meta[key]?.length || 0) > 50) {
        dispatch(notificationReceived({
          notification: 'Please check your input.',
          severity: MESSAGE_SEVERITY.ERROR
        }))
        return
      }
    }

    if (content === '') {
      dispatch(notificationReceived({
        notification: 'Please check your input.',
        severity: MESSAGE_SEVERITY.ERROR
      }))
      return
    }

    setDetails(meta)
    setSaveStatus({ ...saveState, isOpenDialog: true })
  }

  const editPost = (docId) => {
    // Save Post
    dispatch(_updatePost({
      documentPath: `users/${authUser.uid}/posts/${docId}`,
      params: {
        ...details,
        uid: authUser.uid,
        content
      }
    }))
      .unwrap()
      .then(() => {
        setSaveStatus({ ...saveState, saveSuccess: true })

        dispatch(notificationReceived({
          notification: 'Success! Post updated.',
          severity: MESSAGE_SEVERITY.SUCCESS
        }))
      })
      .catch((error) => {
        setSaveStatus({ ...saveState, isOpenDialog: false })

        dispatch(notificationReceived({
          notification: error ?? 'Sorry, something went wrong while updating the Post.',
          severity: MESSAGE_SEVERITY.ERROR
        }))
      })
  }

  return (
    <CreatePostComponent
      handleNewContent={handleNewContent}
      handleSubmit={handleSubmit}
      savePost={editPost}
      toggleDialog={() => setSaveStatus(prev => ({ ...prev, isOpenDialog: !prev.isOpenDialog }))}
      saveState={saveState}
      mode='edit'
      content={content}
      post={{
        id: post?.id,
        title: post?.title,
        description: post?.description,
        country: post?.country,
        slug: post?.slug,
        author: post?.author,
        date_created: post?.date_created,
        date_updated: post?.date_updatedw
      }}
      dialogSettings={{
        dialogTitle: 'Update Post',
        dialogText: 'Would you like to update this Post?',
        dialogTextSuccess: 'Post updated.',
        headerTitle: 'Edit Post',
        headerSubTitle: 'Update an existing Post'
      }}
    />
  )
}

export default EditPost
