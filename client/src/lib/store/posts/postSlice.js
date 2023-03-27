import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

import {
  _createPost,
  _getPosts
} from '@/store/posts/postThunks'

import { ADAPTER_STATES } from '@/store/constants'

// Entity adapter - redux state of this slice
// By default, `createEntityAdapter` gives you `{ ids: [], entities: {} }`.
export const postsAdapter = createEntityAdapter({
  selectId: (post) => post.id
})

const postSlice = createSlice({
  name: 'posts',
  initialState: postsAdapter.getInitialState({
    status: ADAPTER_STATES.IDLE,
    currentRequestId: null,
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
      state.post = null
      postsAdapter.setAll(state, payload)
    })

    builder.addCase(_getPosts.rejected, (state, action) => {
      const { message } = action.error
      console.log('--rejected here')
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
        // Insert the new Post to the collection of Posts
        postsAdapter.addOne(state, action.payload)
      }
    })

    builder.addCase(_createPost.rejected, (state, action) => {
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