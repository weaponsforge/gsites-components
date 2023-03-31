import {
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'

import { USER_STATES } from '@/store/constants'
import { _authSignOut, _authSignIn } from './userThunk'

const userAdapter = createEntityAdapter({
  selectId: (user) => user.id,
})

const userSlice = createSlice({
  name: 'user',
  initialState: userAdapter.getInitialState({
    currentRequestId: null,
    authStatus: USER_STATES.LOADING,
    authLoading: true,
    authError: '',
    authUser: null
  }),
  reducers: {
    authenticationLoading (state, action) {
      state.currentRequestId = action.payload || undefined
      state.authStatus = USER_STATES.LOADING
      state.authLoading = true
      state.authError = ''
    },
    authReceived (state, action) {
      state.authUser = action.payload
      state.authLoading = false

      if (action.payload !== null) {
        state.authStatus = USER_STATES.SIGNED_IN
        state.authError = ''
      } else {
        state.authStatus = (state.authStatus === USER_STATES.SIGNED_IN)
          ? USER_STATES.SIGNED_OUT
          : USER_STATES.IDLE
      }
    },
    authStatusReceived (state, action) {
      state.authStatus = action.payload
      state.authLoading = (state.authStatus === USER_STATES.LOADING)
    },
    authErrorReceived (state, action) {
      state.authError = action.payload
    },
    authLoadingReceived (state, action) {
      state.authLoading = action.payload

      if (action.payload) {
        state.authStatus == USER_STATES.LOADING
      }
    }
  },
  extraReducers: (builder) => {
    // Sign-in success thunk
    // Note: Handle the authUser assignment using onAuthStateChanged() in the useFireabaseAuth() hook

    // Sign-in failure thunk
    builder.addCase(_authSignIn.rejected, (state, action) => {
      const { message } = action.error

      state.authStatus = USER_STATES.IDLE
      state.authLoading = false
      state.authError = action?.payload ?? message
    })

    // Sign-out success thunk
    builder.addCase(_authSignOut.fulfilled, (state, { payload }) => {
      state.authError = payload ?? ''
      state.authLoading = false
      state.authUser = null

      state.authStatus = (payload)
        ? USER_STATES.IDLE
        : USER_STATES.SIGNED_OUT
    })

    // Sign-out failure thunk
    builder.addCase(_authSignOut.rejected, (state, action) => {
      const { message } = action.error

      state.authStatus = USER_STATES.SIGNED_IN
      state.authLoading = false
      state.authError = action?.payload ?? message
    })
  }
})

export const {
  authenticationLoading,
  authErrorReceived,
  authInitReceived,
  authLoadingReceived,
  authReceived,
  authStatusReceived
} = userSlice.actions

export default userSlice.reducer
