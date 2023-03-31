import { createAsyncThunk } from '@reduxjs/toolkit'
import { auth } from '@/config/firebase'
import { signOut, signInWithEmailAndPassword } from 'firebase/auth'

import { authLoadingReceived } from '@/store/user/userSlice'

/**
 * Thunk for Firebase Sign-in.
 * @params {Object} userData - User sign-in data.
 *    - email: {String} email - user email
 *    - password: {String} password - user password
 */
export const _authSignIn = createAsyncThunk('auth/signin', async(userData, thunkAPI) => {
  const { email, password } = userData

  try {
    thunkAPI.dispatch(authLoadingReceived(true))
    await signInWithEmailAndPassword(auth, email, password)
    return true
  } catch (err) {
    return thunkAPI.rejectWithValue(err?.response?.data ?? err.message)
  }
})


/**
 * Thunk for Firebase Sign-out.
 * @params {String} errorMessage - Optional error message to persist on sign-out success.
 */
export const _authSignOut = createAsyncThunk('auth/signout', async(errorMessage = '', thunkAPI) => {
  try {
    thunkAPI.dispatch(authLoadingReceived(true))
    await signOut(auth)
    return errorMessage
  } catch (err) {
    return thunkAPI.rejectWithValue(err?.response?.data ?? err.message)
  }
})
