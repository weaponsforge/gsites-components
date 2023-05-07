import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { useAuth } from '@/features/authentication'
import useDeleteCard from '../../hooks/usedeletecard'
import useInitStore from '@/hooks/useinitstore'
import { cardsReset } from '@/store/cards/cardSlice'
import { _getCards } from '@/store/cards/cardThunks'


import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import FileCardsComponent from '../../components/list'

import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone'
import PageviewTwoToneIcon from '@mui/icons-material/PageviewTwoTone'
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone'

const defaultState = { isOpenDialog: false, docId: null, message: '', tempId: null }

function FileCardsList () {
  const [state, setState] = useState(defaultState)
  const router = useRouter()
  const dispatch = useDispatch()

  const { authUser } = useAuth()
  const { deleteSuccess } = useDeleteCard(authUser?.uid, state.docId)

  useEffect(() => {
    // Delete the selected Card from cache
    dispatch(cardsReset())
  }, [dispatch])

  // Fetch all Cards store items just once
  useInitStore({
    uid: authUser?.uid ?? undefined,
    storeName: 'cards',
    fetchThunk: _getCards,
    collectionPath: `users/${authUser?.uid}/cards`
  })

  const navigateToPostActionPage = (action, docId) => {
    router.push(`/cms/filecards/${action}?id=${docId}`)
  }

  const handleDeleteIconClick = (docId) => {
    setState({
      ...state,
      isOpenDialog: true,
      tempId: docId,
      docId: null,
      message: `Do you want to delete File Card ${docId}?`
    })
  }

  return (
    <FileCardsComponent
      handleDeleteCancel={() => setState(prev => ({ ...prev, isOpenDialog: false }))}
      handleDeleteConfirm={(cardId) => setState(prev => ({ ...prev, docId: cardId }))}
      deleteState={state}
      deleteSuccess={deleteSuccess}
      columns={[
        { field: 'title', headerName: 'Title', minWidth: 250, flex: 1 },
        { field: 'subtitle', headerName: 'Subtitle', minWidth: 180 },
        { field: 'category', headerName: 'Category', minWidth: 190 },
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

export default FileCardsList
