import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { USER_STATES } from '@/features/authentication'

// Reducers
import postsReducer from '@/store/posts/postSlice'
import appReducer from '@/store/app/appSlice'

const combinedReducer = combineReducers({
  app: appReducer,
  posts: postsReducer
})

const rootReducer = (state, action) => {
  if (state && state?.user?.authState === USER_STATES.SIGNED_OUT) {
    // Clear all store data
    state = undefined
  }

  return combinedReducer(state, action)
}

export const store = configureStore({
  reducer: rootReducer
})
