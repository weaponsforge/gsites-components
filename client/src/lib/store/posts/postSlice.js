import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

import {
  _createPost,
  _getPosts,
  _getPost,
  _deletePost,
  _updatePost,
  _getPublishedPostByCountry
} from '@/store/posts/postThunks'

import { ADAPTER_STATES } from '@/store/constants'

// Entity adapter - redux state of this slice
// By default, `createEntityAdapter` gives you `{ ids: [], entities: {} }`.
export const postsAdapter = createEntityAdapter({
  selectId: (post) => post.id,
  sortComparer: (a, b) => (new Date(b.date_created) - new Date(a.date_created))
})

const postSlice = createSlice({
  name: 'posts',
  initialState: postsAdapter.getInitialState({
    status: ADAPTER_STATES.IDLE,
    currentRequestId: null,
    initialized: false,
    error: '',
    post: null
  }),
  reducers: {
    postsLoading (state, action) {
      state.status = ADAPTER_STATES.PENDING
      state.currentRequestId = action.payload || undefined
      state.error = ''
    },
    postsReset (state, action) {
      state.status = ADAPTER_STATES.IDLE
      state.currentRequestId = action.payload || undefined
      state.error = ''
      state.post = null
    },
    postsReceived (state, action) {
      postsAdapter.setAll(state, action.payload)
      state.status = ADAPTER_STATES.IDLE
      state.currentRequestId = undefined
    }
  },
  // extraReducers offers automated ways for monitoring Entity adapters
  // and adjusting the slice's states
  extraReducers: (builder) => {
    // Fetch all Posts thunk handler
    builder.addCase(_getPosts.fulfilled, (state, { payload }) => {
      state.status = ADAPTER_STATES.IDLE
      state.currentRequestId = undefined
      state.initialized = true
      postsAdapter.setAll(state, payload)
    })

    builder.addCase(_getPosts.rejected, (state, action) => {
      const { message } = action.error
      state.status = ADAPTER_STATES.IDLE
      state.error = action?.payload ?? message
      state.currentRequestId = undefined
      state.post = null
    })

    // Fetch Post thunk handler
    builder.addCase(_getPost.fulfilled, (state, action) => {
      state.status = ADAPTER_STATES.IDLE
      state.currentRequestId = undefined
      state.post = action.payload
    })

    builder.addCase(_getPost.rejected, (state, action) => {
      const { message } = action.error
      state.status = ADAPTER_STATES.IDLE
      state.error = action?.payload ?? message
      state.currentRequestId = undefined
      state.post = null
    })

    // Create new Post thunk handler
    builder.addCase(_createPost.fulfilled, (state, action) => {
      const { requestId } = action.meta

      if (
        state.status === ADAPTER_STATES.PENDING &&
        state.currentRequestId === requestId
      ) {
        state.status = ADAPTER_STATES.IDLE
        state.currentRequestId = undefined
        state.post = action.payload

        // Remove the content field
        const post = { ...action.payload, content: '-' }

        // Insert the new Post to the collection of Posts
        postsAdapter.addOne(state, post)
      }
    })

    builder.addCase(_createPost.rejected, (state, action) => {
      const { message } = action.error
      state.status = ADAPTER_STATES.IDLE
      state.error = action?.payload ?? message
      state.currentRequestId = undefined
      state.post = null
    })

    // Delete Post thunk handler
    builder.addCase(_deletePost.fulfilled, (state, action) => {
      const { requestId } = action.meta

      if (
        state.status === ADAPTER_STATES.PENDING &&
        state.currentRequestId === requestId
      ) {
        state.status = ADAPTER_STATES.IDLE
        state.currentRequestId = undefined
        state.post = null
        postsAdapter.removeOne(state, action.payload)
      }
    })

    builder.addCase(_deletePost.rejected, (state, action) => {
      const { message } = action.error
      state.status = ADAPTER_STATES.IDLE
      state.error = action?.payload ?? message
      state.currentRequestId = undefined
    })

    // Update Post thunk handler
    builder.addCase(_updatePost.fulfilled, (state, action) => {
      const { requestId } = action.meta

      if (
        state.status === ADAPTER_STATES.PENDING &&
        state.currentRequestId === requestId
      ) {
        state.status = ADAPTER_STATES.IDLE
        state.currentRequestId = undefined
        state.post = action.payload

        // Remove the content field
        const post = { ...action.payload, content: '-' }

        // Insert the new Post to the collection of Posts
        postsAdapter.setOne(state, post)
      }
    })

    builder.addCase(_updatePost.rejected, (state, action) => {
      const { message } = action.error
      state.status = ADAPTER_STATES.IDLE
      state.error = action?.payload ?? message
      state.currentRequestId = undefined
    })

    // Fetch Post by country thunk handler (uses a collectionGroup query)
    builder.addCase(_getPublishedPostByCountry.fulfilled, (state, action) => {
      state.status = ADAPTER_STATES.IDLE
      state.currentRequestId = undefined
      state.post = action.payload
      state.error = ''
    })

    builder.addCase(_getPublishedPostByCountry.rejected, (state, action) => {
      const { message } = action.error
      state.status = ADAPTER_STATES.IDLE
      state.error = action?.payload ?? message
      state.currentRequestId = undefined
      state.post = null
    })
  }
})

export const {
  postsLoading,
  postsReceived,
  postsReset
} = postSlice.actions

export default postSlice.reducer