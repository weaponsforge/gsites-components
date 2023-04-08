import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useAuth } from '@/features/authentication'
import useInitStore from '@/hooks/useinitstore'

import LoadingCover from '@/components/common/layout/loadingcover'
import { AdminDrawer } from '@/features/cms'

/**
 * HOC that listens for the Firebase user auth info from the global "user" states set by the useAuth() hook.
 * Displays a loading cover page while waiting for the remote authentication info to settle in.
 * Displays and returns the Component parameter wrappped inside the <AdminDrawer> Component if there is user data from the remote auth.
 * Redirect to the /login page if there is no user info after the remote auth settles in.
 * @param {Component} Component
 * @returns {Component} (Component parameter or a Loading placeholder component)
 * Usage: export default ProtectedPage(MyComponent)
 */
function WithCMSAuth (Component) {
  function AuthListener (props) {
    const router = useRouter()
    const { authLoading, authError, authUser } = useAuth()

    // Fetch Posts
    useInitStore(authUser?.uid ?? undefined)

    useEffect(() => {
      if (!authLoading && !authUser) {
        router.push('/login')
      }
    }, [authUser, authLoading, router])

    return ((() => {
      if (authLoading) {
        return <LoadingCover />
      } else if (authUser) {
        return (
          <AdminDrawer>
            <Component {...props} />
          </AdminDrawer>
        )
      } else {
        return <LoadingCover authError={authError} />
      }
    })())
  }

  return AuthListener
}

export default WithCMSAuth
