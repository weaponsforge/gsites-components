import { createAsyncThunk } from '@reduxjs/toolkit'
import { cardsLoading } from './cardSlice'
import {
  createCard, getCards, getCard, deleteCard, updateCard
} from '@/services/cards'
import { ADAPTER_STATES } from '@/store/constants'
import { timestampToDateString } from '@/utils/firestoreutils'

/**
 * Create a new Card thunk
 * @params {String} pathToCollection - Firestore slash-separated path to a collection
 * @params {Object} params - Card object
 * @returns {Object} Request response
 */
export const _createCard = createAsyncThunk('cards/create', async (card, thunkAPI) => {
  const { status } = thunkAPI.getState().cards
  const { pathToCollection, params } = card

  if (status === ADAPTER_STATES.PENDING) {
    return
  }

  try {
    thunkAPI.dispatch(cardsLoading(thunkAPI.requestId))
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
 * @params {String} documentPath - Firestore slash-separated path to a Document
 * @params {Object} params - Updated Card object
 */
export const _updateCard = createAsyncThunk('cards/update', async (card, thunkAPI) => {
  const { status } = thunkAPI.getState().cards
  const { documentPath, params } = card

  if (status === ADAPTER_STATES.PENDING) {
    return
  }

  try {
    thunkAPI.dispatch(cardsLoading(thunkAPI.requestId))
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
