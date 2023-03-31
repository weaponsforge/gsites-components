import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { USER_STATES } from '@/features/authentication'

// Reducers
import appReducer from '@/store/app/appSlice'
import postsReducer from '@/store/posts/postSlice'
import userReducer from '@/store/user/userSlice'

const combinedReducer = combineReducers({
  app: appReducer,
  posts: postsReducer,
  user: userReducer
})

const rootReducer = (state, action) => {
  if (state && state?.user?.authStatus === USER_STATES.SIGNED_OUT) {
    // Clear all store data on user sign-out
    state = undefined
  }

  return combinedReducer(state, action)
}

export const store = configureStore({
  reducer: rootReducer
})
