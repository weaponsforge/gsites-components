import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { _updateCard } from '@/store/cards/cardThunks'
import { notificationReceived, MESSAGE_SEVERITY } from '@/store/app/appSlice'
import { useAuth } from '@/features/authentication'
import useFetchCard from '../../hooks/usefetchcard'
import useGlobalFile from '../../hooks/useglobalfile'

import CreateCardForm from '../../components/createcardform'
import { getMimeSelectOptionBy } from '../../utils/mimetypes'
import { ADAPTER_STATES } from '@/store/constants'
import {
  INPUT_FILE_ID,
  INPUT_PHOTO_FILE_ID,
  STORE_PHOTO_LOCAL_URL,
  STORE_FILE_LOCAL_URL,
  STORE_OBJECT
} from '../../constants/variables'

const defaultState = {
  title: '',
  description: '',
  category: '',
  subtitle: '',
  picture_url: '',
  download_url: '',
  website_url: '',
  mime_type: ''
}

const defaultSaveStatus = { isOpenDialog: false, saveSuccess: false, docId: null, tempId: null }

function EditCard () {
  const [details, setDetails] = useState(defaultState)
  const [saveState, setSaveStatus] = useState(defaultSaveStatus)

  const { authUser } = useAuth()
  const dispatch = useDispatch()
  const router = useRouter()

  // Picture image
  const { fileObject: pictureImageFile } = useGlobalFile(
    null,
    INPUT_PHOTO_FILE_ID,
    STORE_OBJECT,
    STORE_PHOTO_LOCAL_URL
  )

  // File attachment
  const { fileObject } = useGlobalFile(
    null,
    INPUT_FILE_ID,
    STORE_OBJECT,
    STORE_FILE_LOCAL_URL
  )

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

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Set the other File Card details
    const meta = Object.keys(defaultState).reduce((list, key) => ({
      ...list, [key]: e.target[key].value }), [])

    // Validate input
    const optional = ['website_url', 'download_url', 'mime_type', 'description']
    let hasError = false

    for (let key in details) {
      if (meta[key] === null || meta[key] === undefined || (meta[key]?.length || 0) > 1000) {
        hasError = true
      }

      if (meta[key] === '' && !optional.includes(key)) {
        hasError = true
      }
    }

    if (hasError) {
      dispatch(notificationReceived({
        notification: 'Please check your input.',
        severity: MESSAGE_SEVERITY.ERROR
      }))
      return
    }

    const mime = getMimeSelectOptionBy({ mimeLabel: meta.mime_type })
    meta.mime_type = mime?.MIME_TYPE ?? meta.mime_type

    setDetails(meta)
    setSaveStatus({ ...saveState, isOpenDialog: true })
  }

  const editCard = async (docId) => {
    // Save File Card
    dispatch(_updateCard({
      file: fileObject,
      cardIconFile: pictureImageFile,
      documentPath: `users/${authUser.uid}/cards/${docId}`,
      params: {
        ...details,
        uid: authUser.uid,
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
