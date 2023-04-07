import { createAsyncThunk } from '@reduxjs/toolkit'
import { postsLoading } from './cardSlice'
import {
  createCard, getCards, getCard, deleteCard, updateCard
} from '@/services/posts'
import { ADAPTER_STATES } from '@/store/constants'
import { timestampToDateString } from '@/utils/firestoreutils'

/**
 * Create a new Card thunk
 * @params {String} pathToCollection - Firestore slash-separated path to a collect
 * @params {Object} params - Post object
 * @returns {Object} Request response
 */
export const _createCard = createAsyncThunk('cards/create', async (post, thunkAPI) => {
  const { status } = thunkAPI.getState().posts
  const { pathToCollection, params } = post

  if (status === ADAPTER_STATES.PENDING) {
    return
  }

  try {
    thunkAPI.dispatch(postsLoading(thunkAPI.requestId))
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
 * Fetch all Posts thunk
 * @params {String} documentPath - Firestore slash-separated path to a Collection
 */
export const _getCards = createAsyncThunk('cards/list', async (collectionPath, thunkAPI) => {
  try {
    thunkAPI.dispatch(postsLoading(thunkAPI.requestId))
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
 * Fetch the full, original Card thunk
 * @params {String} documentPath - Firestore slash-separated path to a Document
 */
export const _getCard = createAsyncThunk('cards/view', async (documentPath, thunkAPI) => {
  try {
    thunkAPI.dispatch(postsLoading(thunkAPI.requestId))
    const response = await getCard(documentPath)

    if (response === undefined) {
      return thunkAPI.rejectWithValue('Post document not found.')
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
  const { status } = thunkAPI.getState().posts

  if (status === ADAPTER_STATES.PENDING) {
    return
  }

  try {
    thunkAPI.dispatch(postsLoading(thunkAPI.requestId))
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
 * @params {Object} params - Updated Post object
 */
export const _updateCard = createAsyncThunk('cards/update', async (post, thunkAPI) => {
  const { status } = thunkAPI.getState().posts
  const { documentPath, params } = post

  if (status === ADAPTER_STATES.PENDING) {
    return
  }

  try {
    thunkAPI.dispatch(postsLoading(thunkAPI.requestId))
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
