import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { useAuth } from '@/features/authentication'

import { MESSAGE_SEVERITY, notificationReceived } from '@/store/app/appSlice'
import LoginComponent from '@/components/login'

function LoginPage () {
  const { authSignIn, authUser, authLoading, authError } = useAuth()
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!authLoading && authError) {
      dispatch(notificationReceived({
        notification: authError ?? 'Sign-in error.',
        severity: MESSAGE_SEVERITY.ERROR
      }))
    }
  }, [dispatch, authLoading, authError])

  useEffect(() => {
    if (!authLoading && authUser) {
      router.push('/cms')
    }
  }, [authUser, authLoading, router])

  const signIn = async (e) => {
    e.preventDefault()
    const { email, password } = e.target

    authSignIn({
      email: email.value,
      password: password.value
    })
  }

  return (
    <LoginComponent
      signIn={signIn}
      loading={authLoading}
    />
  )
}

export default LoginPage