import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

// Entity adapter - redux state of this slice
// By default, `createEntityAdapter` gives you `{ ids: [], entities: {} }`.
export const appAdapter = createEntityAdapter({
  selectId: (app) => app.id
})

const appSlice = createSlice({
  name: 'app',
  initialState: appAdapter.getInitialState({
    message: '',
    error: '',
    loaded: false
  }),
  reducers: {
    messageReceived (state, action) {
      state.message = action.payload
    },
    errorReceived (state, action) {
      state.error = action.payload
    },
    loadedReceived (state, action) {
      state.loaded = action.payload
    },
  }
})

export const {
  messageReceived,
  errorReceived,
  loadedReceived
} = appSlice.actions

export default appSlice.reducer
