import { createAsyncThunk } from '@reduxjs/toolkit'
import { cardsLoading } from './cardSlice'
import {
  createCard,
  getCards,
  getCard,
  deleteCard,
  updateCard,
  uploadCardFile,
  deleteCardFileByRef
} from '@/services/cards'
import { deleteFileFromStorage } from '@/utils/storageutils'
import { ADAPTER_STATES } from '@/store/constants'
import { timestampToDateString, generateDocumentId } from '@/utils/firestoreutils'

/**
 * Create a new Card thunk
 * @typedef {Object} parameters input parameters
 * @param {String} parameters.pathToCollection - Firestore slash-separated path to a collection
 * @param {Object} parameters.params - Card object
 * @param {File} cardIconFile - File from an <input type="file" /> object.
 * @returns {Object} Request response
 */
export const _createCard = createAsyncThunk('cards/create', async (card, thunkAPI) => {
  const { status } = thunkAPI.getState().cards
  let { cardIconFile, file, pathToCollection, params } = card

  if (status === ADAPTER_STATES.PENDING) {
    return
  }

  try {
    thunkAPI.dispatch(cardsLoading(thunkAPI.requestId))

    let fileQueries = []
    const fileQueryNames = []
    const docId = generateDocumentId(pathToCollection)

    // Set the picture file
    if (cardIconFile) {
      fileQueryNames.push('picture_url')

      fileQueries.push(uploadCardFile({
        pathToStorageDirectory: `users/${params.uid}`,
        file: cardIconFile,
        prefix: `${docId.id}`,
        filename: 'thumbnail'
      }))
    }

    // Set the document file
    if (file) {
      fileQueryNames.push('download_url')

      fileQueries.push(uploadCardFile({
        pathToStorageDirectory: `users/${params.uid}`,
        file,
        prefix: `${docId.id}`,
        filename: 'file'
      }))
    }

    // Upload the picture/document files first
    if (fileQueries.length > 0) {
      const responseArray = await Promise.all(fileQueries)

      fileQueryNames.forEach((key, index) => {
        params = { ...params, [key]: responseArray[index] }
      })
    }

    // Set the document ID
    params.id = docId.id

    // Create the Card document
    const response = await createCard(pathToCollection, params)

    return {
      ...response,
      date_created: timestampToDateString(response.date_created),
      date_updated: timestampToDateString(response.date_updated)
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err?.response?.data ?? err.message)
  }
})

/**
 * Fetch all Cards thunk
 * @param {String} documentPath - Firestore slash-separated path to a Collection
 */
export const _getCards = createAsyncThunk('cards/list', async (collectionPath, thunkAPI) => {
  try {
    thunkAPI.dispatch(cardsLoading(thunkAPI.requestId))
    const response = await getCards(collectionPath)

    return response.map(item => ({
      ...item,
      date_created: timestampToDateString(item.date_created),
      date_updated: timestampToDateString(item.date_updated)
    }))
  } catch (err) {
    return thunkAPI.rejectWithValue(err?.response?.data ?? err.message)
  }
})

/**
 * Fetch Card thunk
 * @param {String} documentPath - Firestore slash-separated path to a Document
 */
export const _getCard = createAsyncThunk('cards/view', async (documentPath, thunkAPI) => {
  try {
    thunkAPI.dispatch(cardsLoading(thunkAPI.requestId))
    const response = await getCard(documentPath)

    if (response === undefined) {
      return thunkAPI.rejectWithValue('Card document not found.')
    } else {
      return {
        ...response,
        date_created: timestampToDateString(response.date_created),
        date_updated: timestampToDateString(response.date_updated)
      }
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err?.response?.data ?? err.message)
  }
})

/**
 * Delete Card thunk
 * @param {String} documentPath - Firestore slash-separated path to a Document
 */
export const _deleteCard = createAsyncThunk('cards/delete', async (params, thunkAPI) => {
  const { status, card } = thunkAPI.getState().cards
  const { documentPath, uid } = params
  console.log(`---deleting`, documentPath, uid, `users/${uid}/${card.id}_thumbnail` )

  if (status === ADAPTER_STATES.PENDING) {
    return
  }

  try {
    thunkAPI.dispatch(cardsLoading(thunkAPI.requestId))
    const docId = documentPath.substring(documentPath.lastIndexOf('/') + 1)

    await Promise.all([
      deleteCard(documentPath),
      // deleteCardFileByRef(card.download_url),
      deleteCardFileByRef(`users/${uid}/${card.id}_file`),
      deleteCardFileByRef(`users/${uid}/${card.id}_thumbnail`)
      // deleteCardFileByRef(`users/${uid}/${card.id}_thumbnail`)
      // deleteCardFileByRef(card.picture_url)
    ])

    return docId
  } catch (err) {
    return thunkAPI.rejectWithValue(err?.response?.data ?? err.message)
  }
})

/**
 * Update Card thunk
 * @typedef {Object} parameters input parameters
 * @param {String} parameters.pathToCollection - Firestore slash-separated path to a collection
 * @param {Object} parameters.params - Card object
 * @param {File} cardIconFile - File from an <input type="file" /> object to display on the card's picture icon.
 * @param {File} file - File from an <input type="file" /> object to download as an attachment.
 */
export const _updateCard = createAsyncThunk('cards/update', async (card, thunkAPI) => {
  const { status } = thunkAPI.getState().cards
  let { cardIconFile, file, documentPath, params } = card

  if (status === ADAPTER_STATES.PENDING) {
    return
  }

  try {
    thunkAPI.dispatch(cardsLoading(thunkAPI.requestId))

    let fileQueries = []
    const fileQueryNames = []
    const docId = documentPath.substring(documentPath.lastIndexOf('/') + 1)

    // Overwrite the picture file
    if (cardIconFile) {
      fileQueryNames.push('picture_url')

      fileQueries.push(uploadCardFile({
        pathToStorageDirectory: `users/${params.uid}`,
        file: cardIconFile,
        filename: 'thumbnail',
        prefix: `${docId}`
      }))
    }

    // Upload a new document file
    if (file) {
      fileQueryNames.push('download_url')

      fileQueries.push(uploadCardFile({
        pathToStorageDirectory: `users/${params.uid}`,
        file,
        filename: 'file',
        prefix: `${docId}`
      }))
    }

    // Upload the picture/document files first
    if (fileQueries.length > 0) {
      const responseArray = await Promise.all(fileQueries)

      fileQueryNames.forEach((key, index) => {
        params = { ...params, [key]: responseArray[index] }
      })
    }

    // Update the Card document
    const response = await updateCard(documentPath, params)

    return {
      ...response,
      date_created: timestampToDateString(response.date_created),
      date_updated: timestampToDateString(response.date_updated)
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err?.response?.data ?? err.message)
  }
})
