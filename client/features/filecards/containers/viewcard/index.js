import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { useAuth } from '@/features/authentication'
import useFetchCard from '../../hooks/usefetchcard'
import useDeleteCard from '../../hooks/usedeletecard'

import ViewCardComponent from '../../components/viewcard'

const actionDeleteSettings = {
  title: 'Delete Post',
  message: 'Are you sure you want to delete this Post?',
  success: 'Post deleted.'
}

const ACTION_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete'
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

function ViewCard () {
  const [state, setState] = useState(defaultState)
  const router = useRouter()
  const dispatch = useDispatch()

  const card = useSelector(state => state.cards.card)

  const { authUser } = useAuth()
  const { deleteSuccess } = useDeleteCard(authUser?.uid, state.docId)
  useFetchCard(authUser?.uid, state.tempId)

  useEffect(() => {
    if (
      router.isReady &&
      authUser !== null
    ) {
      if (card === null) {
        setState(prev => ({ ...prev, tempId: router.query.id }))
      }
    }
  }, [dispatch, router.isReady, router.query, authUser, card])

  // Delete this Card
  const deleteCard = (cardId) => {
    setState({ ...state, docId: cardId })
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
    } else {
      router.push(`/cms/filecards/${mode}?id=${docId}`)
    }
  }

  return (
    <ViewCardComponent
      handleControlClick={handleControlClick}
      handleDeleteCancel={() => setState(prev => ({ ...prev, isOpenDialog: false }))}
      deleteCard={deleteCard}
      navigateToCards={() => router.push('/cms/filecards')}
      localstate={state}
      actionTypes={ACTION_TYPES}
      deleteSuccess={deleteSuccess}
    />
  )
}

export default ViewCard
