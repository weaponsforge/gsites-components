import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/features/authentication/hooks/useauth'

import LoadingCover from '@/components/common/layout/loadingcover'

/**
 * HOC that listens for the Firebase user auth info from the global "user" states set by the useAuth() hook.
 * Displays a loading cover page while waiting for the remote authentication info to settle in.
 * Displays and returns the Component parameter if there is user data from the remote auth.
 * Redirect to the /login page if there is no user info after the remote auth settles in.
 * @param {Component} Component
 * @returns {Component} (Component parameter or a Loading placeholder component)
 * Usage: export default ProtectedPage(MyComponent)
 */
function WithAuth (Component) {
  function AuthListener (props) {
    const router = useRouter()
    const { authLoading, authError, authUser } = useAuth()

    useEffect(() => {
      if (!authLoading && !authUser) {
        router.push('/login')
      }
    }, [authUser, authLoading, router])

    const ItemComponent = () => {
      if (authLoading) {
        return <LoadingCover />
      } else if (authUser) {
        return <Component {...props} />
      } else {
        return <LoadingCover authError={authError} />
      }
    }

    return (<ItemComponent />)
  }

  return AuthListener
}

export default WithAuth
