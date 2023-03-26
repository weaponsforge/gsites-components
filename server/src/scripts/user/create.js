const { createuser } = require('../../classes/user')
const getargs = require('../../utils/getargs')

const createNewUser = async () => {
  try {
    // Get the nodejs args
    const args = getargs(['email', 'password', 'displayname'])
    console.log(args)

    const params = {
      email: args.email,
      password: args.password,
      displayname: args.displayname,
      account_level: 1
    }

    console.log('Creating a default user...')
    const user = await createuser(params)

    console.log('User created!')
    console.log(user)
  } catch (err) {
    console.log(err.message)
  }
}

createNewUser()
