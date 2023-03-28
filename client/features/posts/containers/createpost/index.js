import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { _createPost } from '@/store/posts/postThunks'
import { notificationReceived, MESSAGE_SEVERITY } from '@/store/app/appSlice'
import { useAuth } from '@/features/authentication'

import CreatePostComponent from '../../components/createpost'

const defaultState = { title: '', slug: '', country: '', author: '' }
const defaultSaveStatus = { isOpenDialog: false, saveSuccess: false }

function CreatePost () {
  const [details, setDetails] = useState(defaultState)
  const [saveState, setSaveStatus] = useState(defaultSaveStatus)
  const [content, setContent] = useState('')

  const { authUser } = useAuth()
  const dispatch = useDispatch()

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

  const savePost = () => {
    // Save Post
    dispatch(_createPost({
      pathToCollection: `users/${authUser.uid}/posts`,
      params: { ...details, content }
    }))
      .unwrap()
      .then(() => {
        setSaveStatus({ ...saveState, saveSuccess: true })

        dispatch(notificationReceived({
          notification: 'Success! Post created.',
          severity: MESSAGE_SEVERITY.SUCCESS
        }))
      })
      .catch((error) => {
        setSaveStatus({ ...saveState, isOpenDialog: false })

        dispatch(notificationReceived({
          notification: error ?? 'Sorry, something went wrong while creating the new Post.',
          severity: MESSAGE_SEVERITY.ERROR
        }))
      })
  }

  return (
    <CreatePostComponent
      handleNewContent={handleNewContent}
      handleSubmit={handleSubmit}
      savePost={savePost}
      toggleDialog={() => setSaveStatus(prev => ({ ...prev, isOpenDialog: !prev.isOpenDialog }))}
      saveState={saveState}
    />
  )
}

export default CreatePost
