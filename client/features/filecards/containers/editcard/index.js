import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { _updateCard } from '@/store/cards/cardThunks'
import { notificationReceived, MESSAGE_SEVERITY } from '@/store/app/appSlice'
import { useAuth } from '@/features/authentication'

import useFetchCard from '../../hooks/usefetchcard'
import CreateCardForm from '../../components/createcardform'
import { ADAPTER_STATES } from '@/store/constants'

const defaultState = {
  title: '',
  description: '',
  category: '',
  subtitle: '',
  picture_url: '',
  download_url: '',
  website_url: ''
}

const defaultSaveStatus = { isOpenDialog: false, saveSuccess: false, docId: null, tempId: null }

function EditCard () {
  const [details, setDetails] = useState(defaultState)
  const [saveState, setSaveStatus] = useState(defaultSaveStatus)

  const { authUser } = useAuth()
  const dispatch = useDispatch()
  const router = useRouter()

  const card = useSelector(state => state.cards.card)
  const status = useSelector(state => state.cards.status)

  // Fetch the newly-selected File Card
  useFetchCard(authUser?.uid, saveState.docId)

  useEffect(() => {
    if (
      router.isReady &&
      authUser !== null &&
      status === ADAPTER_STATES.IDLE
    ) {
      if (card === null) {
        setSaveStatus(prev => ({ ...prev, docId: router.query.id }))
      }
    }
  }, [dispatch, router.isReady, router.query, authUser, card, status])

  const handleSubmit = (e) => {
    e.preventDefault()

    // Set the other File Card details
    const meta = Object.keys(defaultState).reduce((list, key) => ({
      ...list, [key]: e.target[key].value }), [])

    // Validate input
    for (let key in details) {
      if (meta[key] === '' || meta[key] === null || meta[key] === undefined || (meta[key]?.length || 0) > 500) {
        dispatch(notificationReceived({
          notification: 'Please check your input.',
          severity: MESSAGE_SEVERITY.ERROR
        }))
        return
      }
    }

    setDetails(meta)
    setSaveStatus({ ...saveState, isOpenDialog: true })
  }

  const editCard = (docId) => {
    // Save File Card
    dispatch(_updateCard({
      documentPath: `users/${authUser.uid}/cards/${docId}`,
      params: {
        ...details,
        uid: authUser.uid
      }
    }))
      .unwrap()
      .then(() => {
        setSaveStatus({ ...saveState, saveSuccess: true })

        dispatch(notificationReceived({
          notification: 'Success! File Card updated.',
          severity: MESSAGE_SEVERITY.SUCCESS
        }))
      })
      .catch((error) => {
        setSaveStatus({ ...saveState, isOpenDialog: false })

        dispatch(notificationReceived({
          notification: error ?? 'Sorry, something went wrong while updating the File Card.',
          severity: MESSAGE_SEVERITY.ERROR
        }))
      })
  }

  return (
    <CreateCardForm
      handleSubmit={handleSubmit}
      saveCard={editCard}
      toggleDialog={() => setSaveStatus(prev => ({ ...prev, isOpenDialog: !prev.isOpenDialog }))}
      saveState={saveState}
      mode='edit'
      card={card}
      dialogSettings={{
        dialogTitle: 'Update File Card',
        dialogText: 'Would you like to update this File Card?',
        dialogTextSuccess: 'File Card updated.',
        headerTitle: 'Edit File Card',
        headerSubTitle: 'Update an existing File Card'
      }}
    />
  )
}

export default EditCard
