import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/features/authentication'

import LoginComponent from '@/components/login'

function LoginPage () {
  const { authSignIn, authUser, authLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!authLoading && authUser) {
      router.push('/cms')
    }
  }, [authUser, authLoading, router])

  const signIn = async (e) => {
    e.preventDefault()
    const { email, password } = e.target

    try {
      await authSignIn({
        email: email.value,
        password: password.value
      })
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <LoginComponent signIn={signIn} />
  )
}

export default LoginPage