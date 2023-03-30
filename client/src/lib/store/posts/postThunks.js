import { createAsyncThunk } from '@reduxjs/toolkit'
import { postsLoading } from './postSlice'
import {
  createPost, getPosts, getPost, deletePost, updatePost,
  getPublishedPostsByCountry
} from '@/services/posts'
import { ADAPTER_STATES } from '@/store/constants'
import { timestampToDateString } from '@/utils/firestoreutils'

/**
 * Create a new Post thunk
 * @params {String} pathToCollection - Firestore slash-separated path to a collect
 * @params {Object} params - Post object
 * @returns {Object} Request response
 */
export const _createPost = createAsyncThunk('posts/create', async (post, thunkAPI) => {
  const { status } = thunkAPI.getState().posts
  const { pathToCollection, params } = post

  if (status === ADAPTER_STATES.PENDING) {
    return
  }

  try {
    thunkAPI.dispatch(postsLoading(thunkAPI.requestId))
    const response = await createPost(pathToCollection, params)

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
export const _getPosts = createAsyncThunk('posts/list', async (collectionPath, thunkAPI) => {
  try {
    thunkAPI.dispatch(postsLoading(thunkAPI.requestId))
    const response = await getPosts(collectionPath)

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
 * Fetch the full, original Post thunk
 * @params {String} documentPath - Firestore slash-separated path to a Document
 */
export const _getPost = createAsyncThunk('posts/view', async (documentPath, thunkAPI) => {
  try {
    thunkAPI.dispatch(postsLoading(thunkAPI.requestId))
    const response = await getPost(documentPath)

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
 * Delete Post thunk
 * @params {String} documentPath - Firestore slash-separated path to a Document
 */
export const _deletePost = createAsyncThunk('posts/delete', async (documentPath, thunkAPI) => {
  const { status } = thunkAPI.getState().posts

  if (status === ADAPTER_STATES.PENDING) {
    return
  }

  try {
    thunkAPI.dispatch(postsLoading(thunkAPI.requestId))
    const docId = documentPath.substring(documentPath.lastIndexOf('/') + 1)

    await deletePost(documentPath)
    return docId
  } catch (err) {
    return thunkAPI.rejectWithValue(err?.response?.data ?? err.message)
  }
})

/**
 * Update Post thunk
 * @params {String} documentPath - Firestore slash-separated path to a Document
 * @params {Object} params - Updated Post object
 */
export const _updatePost = createAsyncThunk('posts/update', async (post, thunkAPI) => {
  const { status } = thunkAPI.getState().posts
  const { documentPath, params } = post

  if (status === ADAPTER_STATES.PENDING) {
    return
  }

  try {
    thunkAPI.dispatch(postsLoading(thunkAPI.requestId))
    const response = await updatePost(documentPath, params)

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
 * Fetch published Posts by country thunk.
 * @params {String} country - Country name.
 */
export const _getPublishedPostByCountry = createAsyncThunk('posts/list/country', async (country, thunkAPI) => {
  const { status } = thunkAPI.getState().posts

  if (status === ADAPTER_STATES.PENDING) {
    return
  }

  try {
    thunkAPI.dispatch(postsLoading(thunkAPI.requestId))
    const response = await getPublishedPostsByCountry(country)

    if (response.length === 0) {
      return thunkAPI.rejectWithValue('No Post/s fetched.')
    } else if (response.length > 1) {
      return thunkAPI.rejectWithValue('Fetched more than 1 Post.')
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
