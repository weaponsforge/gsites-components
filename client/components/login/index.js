import PropTypes from 'prop-types'

function LoginComponent ({ signIn }) {
  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={signIn}>
        <input type="text" id="email" placeholder="email" /><br />
        <input type="text" id="password" placeholder="password" /><br />
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

LoginComponent.propTypes = {
  signIn: PropTypes.func
}

export default LoginComponent
