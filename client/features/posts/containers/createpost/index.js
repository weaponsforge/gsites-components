import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { _createPost } from '@/store/posts/postThunks'
import { notificationReceived, MESSAGE_SEVERITY } from '@/store/app/appSlice'
import { useAuth } from '@/features/authentication'

import CreatePostComponent from '../../components/createpost'

const defaultState = { title: '', slug: '', country: '', author: '' }

function CreatePost () {
  const [content, setContent] = useState('')
  const { authUser } = useAuth()

  const dispatch = useDispatch()
  const router = useRouter()

  const handleNewContent = (newContent) => {
    setContent(newContent)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const meta = Object.keys(defaultState).reduce((list, key) => ({
      ...list, [key]: e.target[key].value }), [])

    for (let key in meta) {
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

    dispatch(_createPost({
      pathToCollection: `users/${authUser.uid}/posts`,
      params: { ...meta, content }
    }))
      .unwrap()
      .then(() => {
        dispatch(notificationReceived({
          notification: 'Success! Post created.',
          severity: MESSAGE_SEVERITY.SUCCESS
        }))

        router.push('/cms/posts')
      })
  }

  return (
    <CreatePostComponent
      handleNewContent={handleNewContent}
      handleSubmit={handleSubmit}
    />
  )
}

export default CreatePost
