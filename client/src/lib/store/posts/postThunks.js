import { createAsyncThunk } from '@reduxjs/toolkit'
import { postsLoading } from './postSlice'
import { createPost, getPosts, getPost, deletePost } from '@/services/posts'
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
