import { createAsyncThunk } from '@reduxjs/toolkit'
import { cardsLoading } from './cardSlice'
import {
  createCard, getCards, getCard, deleteCard, updateCard
} from '@/services/cards'
import { ADAPTER_STATES } from '@/store/constants'
import { timestampToDateString } from '@/utils/firestoreutils'
import { uploadFileToStorage } from '@/utils/storageutils'

/**
 * Create a new Card thunk
 * @typedef {Object} parameters input parameters
 * @params {String} parameters.pathToCollection - Firestore slash-separated path to a collection
 * @params {Object} parameters.params - Card object
 * @params {File} file - File from an <input type="file" /> object.
 * @returns {Object} Request response
 */
export const _createCard = createAsyncThunk('cards/create', async (card, thunkAPI) => {
  const { status } = thunkAPI.getState().cards
  let { pathToCollection, params, file } = card

  if (status === ADAPTER_STATES.PENDING) {
    return
  }

  try {
    thunkAPI.dispatch(cardsLoading(thunkAPI.requestId))

    // Upload the picture file
    if (file) {
      try {
        const downloadURL = await uploadFileToStorage(`users/${params.uid}/${file[0].name}`, file[0])
        params = { ...params, picture_url: downloadURL }
      } catch (err) {
        return thunkAPI.rejectWithValue(err?.response?.data ?? err.message)
      }
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
 * @params {String} documentPath - Firestore slash-separated path to a Collection
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
 * @params {String} documentPath - Firestore slash-separated path to a Document
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
 * @params {String} documentPath - Firestore slash-separated path to a Document
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
 * @params {String} parameters.pathToCollection - Firestore slash-separated path to a collection
 * @params {Object} parameters.params - Card object
 * @params {File} file - File from an <input type="file" /> object.
 */
export const _updateCard = createAsyncThunk('cards/update', async (card, thunkAPI) => {
  const { status } = thunkAPI.getState().cards
  let { file, documentPath, params } = card

  if (status === ADAPTER_STATES.PENDING) {
    return
  }

  try {
    thunkAPI.dispatch(cardsLoading(thunkAPI.requestId))

    // Upload the picture file
    if (file) {
      try {
        const extension = file[0].name.substring(file[0].name.length - 3)
        const downloadURL = await uploadFileToStorage(`users/${params.uid}/${card.id}.${extension}`, file[0])
        params = { ...params, picture_url: downloadURL }
      } catch (err) {
        return thunkAPI.rejectWithValue(err?.response?.data ?? err.message)
      }
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
