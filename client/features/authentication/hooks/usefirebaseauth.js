import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { auth } from '@/config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { authReceived, authErrorReceived } from '@/store/user/userSlice'

import { _authSignOut, _authSignIn } from '@/store/user/userThunk'

/**
 * Hook that listens for the Firebase user auth info using the Firebase onAuthStateChanged() method.
 * Sets the global Firebase user auth details in the user { authUser, authLoading, authError, authStatus } local state.
 * This hook should ideally be called only ONCE (preferrably in a React Context on the root App component) to avoid gaving multiple onAuthStateChanged() listeners.
 * @returns {Object} authUser - partial, relevant signed-in Firebase user data
 * @returns {Bool} authLoading - Firebase auth status is being fetched from Firebase (from intial page load or during sign-out)
 * @returns {String} authError - Firebase authentication error
 * @returns {String} authStatus - Descriptive Auth status info. One of USER_STATES
 * Usage: const { authUser, authLoading, authError, authStatus, authSignIn, authSignOut } = useAuth()
 */
export default function useFirebaseAuth () {
  const { authUser, authLoading, authError, authStatus } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    const handleFirebaseUser = async (firebaseUser) => {
      if (firebaseUser) {
        // Check if user is emailVerified
        if (!firebaseUser?.emailVerified ?? false) {
          dispatch(_authSignOut('Email not verified. Please verify your email first.'))
          return
        }

        try {
          // Retrieve the custom claims information
          const { claims } = await firebaseUser.getIdTokenResult()

          if (claims.account_level) {
            // Get the firebase auth items of interest
            dispatch(authReceived({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              name: firebaseUser.displayName,
              accessToken: firebaseUser.accessToken,
              emailVerified: firebaseUser.emailVerified,
              account_level: claims.account_level
            }))
          } else {
            // User did not sign-up using the custom process
            dispatch(_authSignOut('Missing custom claims'))
          }
        } catch (err) {
          dispatch(authErrorReceived(err?.response?.data ?? err.message))
          dispatch(authReceived(null))
        }
      } else {
        dispatch(authReceived(null))
      }
    }

    const unsubscribe = onAuthStateChanged(auth, handleFirebaseUser)
    return () => unsubscribe()
  }, [dispatch])

  const authSignIn = ({ email, password }) => {
    dispatch(_authSignIn({ email, password }))
  }

  const authSignOut = () => {
    dispatch(_authSignOut())
  }

  return {
    authUser,
    authLoading,
    authStatus,
    authError,
    authSignIn,
    authSignOut
  }
}
