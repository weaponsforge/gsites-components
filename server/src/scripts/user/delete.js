const { deleteuser, getuser } = require('../../classes/user')
const getargs = require('../../utils/getargs')

const deleteExistingUser = async () => {
  try {
    // Get the nodejs args
    const args = getargs({
      params: ['email']
    })

    // Get the user data
    const user = await getuser({
      email: args.email
    })

    // Delete user
    console.log(`Deleting user ${args.email}...`)
    await deleteuser(user.uid)

    console.log('User deleted!')
  } catch (err) {
    console.log(err.message)
  }
}

deleteExistingUser()
