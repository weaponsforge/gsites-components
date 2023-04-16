import { createAsyncThunk } from '@reduxjs/toolkit'
import { cardsLoading } from './cardGallerySlice'
import {
  getCardsByCategory,
  getPublicCardById
} from '@/services/cards'
import { ADAPTER_STATES } from '@/store/constants'
import { timestampToDateString } from '@/utils/firestoreutils'

/**
 * Fetch Cards by category. Uses a subcollection query.
 * @param {String} category - Card category name.
 */
export const _getCardsByCategory = createAsyncThunk('cards_gallery/list/category', async (category, thunkAPI) => {
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

/**
 * Fetch Card by ID thunk. Uses a subcollection query.
 * @param {String} cardId - Card ID.
 */
export const _getPublicCardById = createAsyncThunk('cards_gallery/list/id', async (cardId, thunkAPI) => {
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