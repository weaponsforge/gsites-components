import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { _createPost, _getPosts } from '@/store/posts/postThunks'
import { useAuth } from '@/features/authentication'

import CreatePostComponent from '@/features/posts/components/createpost'

const defaultState = { title: '', slug: '', country: '', author: '' }

function CreatePost () {
  const [content, setContent] = useState('')
  const { authUser } = useAuth()
  const dispatch = useDispatch()

  const handleNewContent = (newContent) => {
    setContent(newContent)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const meta = Object.keys(defaultState).reduce((list, key) => ({
      ...list, [key]: e.target[key].value }), [])

    for (let key in meta) {
      if (meta[key] === '' || meta[key] === null || meta[key] === undefined || (meta[key]?.length || 0) > 50) {
        return
      }
    }

    if (content === '') {
      return
    }

    dispatch(_createPost({
      pathToCollection: `users/${authUser.uid}/posts`,
      params: { ...meta, content }
    }))
      .unwrap()
      .then(() => {
        console.log('success!')
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
