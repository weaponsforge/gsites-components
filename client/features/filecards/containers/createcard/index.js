import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { cardsReset } from '@/store/cards/cardSlice'
import { _createCard } from '@/store/cards/cardThunks'
import { notificationReceived, MESSAGE_SEVERITY } from '@/store/app/appSlice'
import { useAuth } from '@/features/authentication'
import useGlobalFile from '../../hooks/useglobalfile'

import { getMimeSelectOptionBy } from '../../utils/mimetypes'
import {
  INPUT_FILE_ID,
  INPUT_PHOTO_FILE_ID,
  STORE_PHOTO_LOCAL_URL,
  STORE_FILE_LOCAL_URL,
  STORE_OBJECT
} from '../../constants/variables'

import CreateCardForm from '../../components/createcardform'

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

const defaultSaveStatus = { isOpenDialog: false, saveSuccess: false }

function CreateCard () {
  const [details, setDetails] = useState(defaultState)
  const [saveState, setSaveStatus] = useState(defaultSaveStatus)

  const { authUser } = useAuth()
  const dispatch = useDispatch()

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

  useEffect(() => {
    dispatch(cardsReset())
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault()

    // Set the other Post details
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

  const saveCard = () => {
    // Save Card
    dispatch(_createCard({
      file: fileObject,
      cardIconFile: pictureImageFile,
      pathToCollection: `users/${authUser.uid}/cards`,
      params: {
        ...details,
        uid: authUser.uid,
        published: false
      }
    }))
      .unwrap()
      .then(() => {
        setSaveStatus({ ...saveState, saveSuccess: true })

        dispatch(notificationReceived({
          notification: 'Success! File Card created.',
          severity: MESSAGE_SEVERITY.SUCCESS
        }))
      })
      .catch((error) => {
        setSaveStatus({ ...saveState, isOpenDialog: false })

        dispatch(notificationReceived({
          notification: error ?? 'Sorry, something went wrong while creating the File Card.',
          severity: MESSAGE_SEVERITY.ERROR
        }))
      })
  }

  return (
    <CreateCardForm
      handleSubmit={handleSubmit}
      saveCard={saveCard}
      toggleDialog={() => setSaveStatus(prev => ({ ...prev, isOpenDialog: !prev.isOpenDialog }))}
      saveState={saveState}
      mode='create'
      dialogSettings={{
        dialogTitle: 'Create a New File Card',
        dialogText: 'Would you like to create a new File Card?',
        dialogTextSuccess: 'New File Card created.',
        headerTitle: 'Create File Card',
        headerSubTitle: 'Create a new File Card here.'
      }}
    />
  )
}

export default CreateCard
