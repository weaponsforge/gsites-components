import { createContext, useContext } from 'react'
import useFirebaseAuth from '@/features/authentication/hooks/usefirebaseauth'

const AuthContext = createContext()

/**
 * Context Provider that passes the global Firebase user auth object from the useFirebaseAuth() hook
 * @param {Obect} children - Root app Component
 */
export function AuthProvider ({ children }) {
  const authUser = useFirebaseAuth()
  return <AuthContext.Provider value={authUser}>{children}</AuthContext.Provider>
}

/**
 * Hook that returns the current Firebase user context value from the AuthProvider context provider.
 * @returns {Object} authUser - partial, relevant signed-in Firebase user data
 * @returns {Bool} authLoading - Firebase auth status is being fetched from Firebase (from intial page load or during sign-out)
 * @returns {String} authError - Firebase authentication error
 * @returns {String} authStatus - Descriptive Auth status info. One of USER_STATES
 * Usage: const { authUser, authLoading, authError, authStatus, authSignIn, authSignOut } = useAuth()
 */
export const useAuth = () => {
  return useContext(AuthContext)
}
