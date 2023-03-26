import { WithAuth, useAuth } from '@/features/authentication'

function CMSPage () {
  const { authSignOut } = useAuth()

  const signOut = async () => {
    try {
      await authSignOut()
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div>
      Hello, World!<br />

      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default WithAuth(CMSPage)
