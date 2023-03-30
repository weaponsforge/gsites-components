import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { useAuth } from '@/features/authentication'
import useDeletePost from '../../hooks/usedeletepost'
import { postsReset } from '@/store/posts/postSlice'

import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import PostsComponent from '../../components/list'

import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone'
import PageviewTwoToneIcon from '@mui/icons-material/PageviewTwoTone'
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone'

const defaultState = { isOpenDialog: false, docId: null, message: '', tempId: null }

function PostsList () {
  const [state, setState] = useState(defaultState)
  const router = useRouter()
  const dispatch = useDispatch()

  const { authUser } = useAuth()
  const { deleteSuccess } = useDeletePost(authUser?.uid, state.docId)

  useEffect(() => {
    // Delete the selected Post from cache
    dispatch(postsReset())
  }, [dispatch])

  const navigateToPostActionPage = (action, docId) => {
    router.push(`/cms/posts/${action}?id=${docId}`)
  }

  const handleDeleteIconClick = (docId) => {
    setState({
      ...state,
      isOpenDialog: true,
      tempId: docId,
      docId: null,
      message: `Do you want to delete Post ${docId}?`
    })
  }

  return (
    <PostsComponent
      handleDeleteCancel={() => setState(prev => ({ ...prev, isOpenDialog: false }))}
      handleDeleteConfirm={(postId) => setState(prev => ({ ...prev, docId: postId }))}
      deleteState={state}
      deleteSuccess={deleteSuccess}
      columns={[
        { field: 'title', headerName: 'Title', minWidth: 250, flex: 1 },
        { field: 'country', headerName: 'Country', minWidth: 180 },
        { field: 'published', headerName: 'Status', minWidth: 190,
          valueGetter: (params) => {
            console.log(params)
            return params.row?.published ? 'published' : 'draft'
          }
        },
        { field: 'action', headerName: 'Action', minWidth: 150,
          renderCell: (params) => {
            return (
              <ButtonGroup variant='outlined' size='small'>
                <Button onClick={() => handleDeleteIconClick(params.id)}>
                  <DeleteForeverTwoToneIcon />
                </Button>
                <Button onClick={() => navigateToPostActionPage('edit', params.id)}>
                  <BorderColorTwoToneIcon />
                </Button>
                <Button onClick={() => navigateToPostActionPage('view', params.id)}>
                  <PageviewTwoToneIcon />
                </Button>
              </ButtonGroup>
            )
          }
        },
        { field: 'date_created', headerName: 'Date Created', minWidth: 250 }
      ]}
    />
  )
}

export default PostsList
