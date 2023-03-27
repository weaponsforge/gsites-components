import { useEffect, useState } from 'react'
import { auth } from '@/config/firebase'
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { USER_STATES } from '../constants'

const authSignOut = async () => {
  return await signOut(auth)
}

const authSignIn = async ({ email, password }) => {
  return await signInWithEmailAndPassword(auth, email, password)
}

const defaultState = {
  authUser: null,
  authLoading: true,
  authStatus: USER_STATES.LOADING,
  authError: ''
}

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
  const [state, setState] = useState(defaultState)

  useEffect(() => {
    const handleFirebaseUser = async (firebaseUser) => {
      if (firebaseUser) {
        // Check if user is emailVerified
        if (!firebaseUser?.emailVerified ?? false) {
          setState(prev => ({
            ...prev,
            authError: 'Email not verified. Please verify your email first.'
          }))

          await signOut(auth)
          return
        }

        try {
          // Retrieve the custom claims information
          const { claims } = await firebaseUser.getIdTokenResult()

          if (claims.account_level) {
            // Get the firebase auth items of interest
            setState(prev => ({
              ...prev,
              authStatus: USER_STATES.SIGNED_IN,
              authLoading: false,
              authError: '',
              authUser: {
                uid: firebaseUser.uid,
                email: firebaseUser.email,
                name: firebaseUser.displayName,
                accessToken: firebaseUser.accessToken,
                emailVerified: firebaseUser.emailVerified,
                account_level: claims.account_level
              }
            }))
          } else {
            // User did not sign-up using the custom process
            setState(prev => ({ ...prev,
              authError: 'Missing custom claims',
              authLoading: false
            }))

            await signOut(auth)
          }
        } catch (err) {
          setState(prev => ({ ...prev,
            authUser: null,
            authStatus: USER_STATES.SIGNED_OUT,
            authLoading: false,
            authError: err?.response?.data ?? err.message,
          }))
        }
      } else {
        // No user is signed-in
        setState(prev => ({
          ...prev,
          authUser: null,
          authLoading: false,
          authStatus: USER_STATES.SIGNED_OUT
        }))
      }
    }

    const unsubscribe = onAuthStateChanged(auth, handleFirebaseUser)
    return () => unsubscribe()
  }, [])

  return {
    authUser: state.authUser,
    authLoading: state.authLoading,
    authStatus: state.authStatus,
    authError: state.authError,
    authSignOut,
    authSignIn
  }
}
