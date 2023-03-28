import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

// Entity adapter - redux state of this slice
// By default, `createEntityAdapter` gives you `{ ids: [], entities: {} }`.
export const appAdapter = createEntityAdapter({
  selectId: (app) => app.id
})

export const MESSAGE_SEVERITY = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  WARNING: 'warning'
}

const appSlice = createSlice({
  name: 'app',
  initialState: appAdapter.getInitialState({
    /** Global notification messages */
    notification: '',
    /** Error messages */
    error: '',
    /** Notification severity type */
    severity: MESSAGE_SEVERITY.INFO,
    /** App's initial load status */
    loaded: false
  }),
  reducers: {
    notificationReceived (state, action) {
      const { notification, severity } = action.payload
      state.notification = notification
      state.severity = severity
    },
    errorReceived (state, action) {
      state.error = action.payload
      state.severity = MESSAGE_SEVERITY.ERROR
    },
    /* eslint-disable no-unused-vars */
    resetMessage (state, action) {
      state.notification = ''
      state.severity = MESSAGE_SEVERITY.INFO
    },
    loadedReceived (state, action) {
      state.loaded = action.payload
    },
  }
})

export const {
  notificationReceived,
  errorReceived,
  loadedReceived,
  resetMessage
} = appSlice.actions

export default appSlice.reducer
