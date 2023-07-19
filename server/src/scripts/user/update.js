const { updateuser, getuser } = require('../../classes/user')
const getargs = require('../../utils/getargs')

const ARGS_FALSE_VAL = ''
const ARGS_TRUE_VAL = 'true'
const ACCOUNT_LEVEL_SUPERADMIN = 0
const ACCOUNT_LEVEL_ADMIN = 1
const ACCOUNT_LEVEL_USER = 2

/**
 * Checks if a value is valid Boolean value from the "args" data
 * @param {String} argValue - "emailverified", "disabled" Value(s) from the "arg" data
 * @returns {Bool}
 */
const isArgsBoolean = (argValue) => {
  return [ARGS_FALSE_VAL, ARGS_TRUE_VAL].includes(argValue)
}

/**
 * Checks if a value is valid account_level Number value from the "args" data
 * @param {Number} argValue - "account_level" Value from the "arg" data
 * @returns {Bool}
 */
const isValidAccountLevel = (argValue) => {
  return [
    ACCOUNT_LEVEL_SUPERADMIN.toString(),
    ACCOUNT_LEVEL_ADMIN.toString(),
    ACCOUNT_LEVEL_USER.toString()
  ].includes(argValue)
}

/**
 * Updates a Firebase Auth user data
 */
const updateUser = async () => {
  try {
    const optionalKeys = ['email', 'uid', 'password', 'emailverified', 'displayname', 'account_level', 'disabled']
    let userData

    // Get the nodejs args
    const args = getargs({
      params: optionalKeys,
      optional: optionalKeys
    })

    if (args.email === undefined && args.uid === undefined) {
      throw new Error('One of "email" or "uid" must be defined.')
    }

    // Check for 1 or more optional parameters
    const allParams = Object.keys(args).filter(key => !['email', 'uid'].includes(key))

    if (allParams.length === 0) {
      throw new Error('Missing at least 1 optional parameter.')
    }

    // Get the user data if "args.uid" is undefined
    if (args.uid === undefined) {
      console.log('Fetching user data...')

      userData = await getuser({
        email: args.email
      })
    }

    const params = {
      uid: args?.uid ?? userData.uid
    }

    // Validate and set the optional "args" parameters
    optionalKeys.forEach(key => {
      if (args[key] !== undefined) {
        switch (key) {
          case 'account_level':
            if (!isValidAccountLevel(args[key])) {
              throw new Error(`Invalid Number value in the "${key}" key`)
            }

            params[key] = parseInt(args[key])
            break
          case 'emailverified':
          case 'disabled':
            if (!isArgsBoolean(args[key])) {
              throw new Error(`Invalid Boolean value in the "${key}" key`)
            }

            params[key] = (args[key] === 'true')
            break
          case 'displayname':
            if (isArgsBoolean(args[key])) {
              throw new Error('Display name format not supported.')
            }

            params[key] = args[key]
            break
          default:
            params[key] = args[key]
            break
        }
      }
    })

    // At least 1 of the optional args params should be present
    console.log(`Updating user UID ${params.uid}...`)
    const user = await updateuser(params)

    console.log('User updated!')
    console.log(user)
  } catch (err) {
    console.log(`[ERROR]: ${err.message}`)
  }
}

updateUser()
