import { createAsyncThunk } from '@reduxjs/toolkit'
import { cardsLoading } from './cardSlice'
import {
  createCard, getCards, getCard, deleteCard, updateCard, getCardsByCategory, getPublicCardById
} from '@/services/cards'
import { ADAPTER_STATES } from '@/store/constants'
import { timestampToDateString } from '@/utils/firestoreutils'
import { uploadFileToStorage } from '@/utils/storageutils'

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

    // Set the picture file
    if (cardIconFile) {
      fileQueryNames.push('picture_url')
      fileQueries.push(uploadFileToStorage(`users/${params.uid}/${cardIconFile.name}`, cardIconFile))
    }

    // Set the document file
    if (file) {
      fileQueryNames.push('download_url')
      fileQueries.push(uploadFileToStorage(`users/${params.uid}/${file.name}`, file))
    }

    // Upload the picture/document files first
    if (fileQueries.length > 0) {
      const responseArray = await Promise.all(fileQueries)

      fileQueryNames.forEach((key, index) => {
        params = { ...params, [key]: responseArray[index] }
      })
    }

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
export const _deleteCard = createAsyncThunk('cards/delete', async (documentPath, thunkAPI) => {
  const { status } = thunkAPI.getState().cards

  if (status === ADAPTER_STATES.PENDING) {
    return
  }

  try {
    thunkAPI.dispatch(cardsLoading(thunkAPI.requestId))
    const docId = documentPath.substring(documentPath.lastIndexOf('/') + 1)

    await deleteCard(documentPath)
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

    // Set the picture file
    if (cardIconFile) {
      fileQueryNames.push('picture_url')
      const docId = documentPath.substring(documentPath.lastIndexOf('/') + 1)
      const extension = cardIconFile.name.substring(cardIconFile.name.length - 3)
      fileQueries.push(uploadFileToStorage(`users/${params.uid}/${docId}.${extension}`, cardIconFile))
    }

    // Set the document file
    if (file) {
      fileQueryNames.push('download_url')
      fileQueries.push(uploadFileToStorage(`users/${params.uid}/${file.name}`, file))
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

/**
 * Fetch saved Cards by category thunk.
 * @param {String} category - Card category name.
 */
export const _getCardsByCategory = createAsyncThunk('cards/list/category', async (category, thunkAPI) => {
  const { status } = thunkAPI.getState().cards

  if (status === ADAPTER_STATES.PENDING) {
    return
  }

  try {
    thunkAPI.dispatch(cardsLoading(thunkAPI.requestId))
    const response = await getCardsByCategory(category)

    return response.map(item => ({
      ...item,
      date_created: timestampToDateString(item.date_created),
      date_updated: timestampToDateString(item.date_updated)
    }))
  } catch (err) {
    return thunkAPI.rejectWithValue(err?.response?.data ?? err.message)
  }
})

export const _getPublicCardById = createAsyncThunk('cards/list/id', async (cardId, thunkAPI) => {
  const { status } = thunkAPI.getState().cards

  if (status === ADAPTER_STATES.PENDING) {
    return
  }

  try {
    thunkAPI.dispatch(cardsLoading(thunkAPI.requestId))
    const response = await getPublicCardById(cardId)

    if (response === undefined) {
      return thunkAPI.rejectWithValue('Card document not found.')
    } else {
      return {
        ...response[0],
        date_created: timestampToDateString(response[0].date_created),
        date_updated: timestampToDateString(response[0].date_updated)
      }
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err?.response?.data ?? err.message)
  }
})