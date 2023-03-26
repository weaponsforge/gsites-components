const { getAuth } = require('../../utils/db')

/**
 * Wrapper for managing Firebase Authentication users using the firebase-admin SDK.
 * Intended for superadmin level accounts usage.
 */
class User {
  // Create a new User with custom claims
  async createuser (params) {
    const { email, displayname, password, account_level, emailverified, disabled } = params
    let user

    try {
      user = await getAuth()
        .createUser({
          email,
          emailVerified: (emailverified !== undefined) ? emailverified : false,
          password: password ?? '123456789',
          displayName: displayname,
          disabled: (disabled !== undefined) ? disabled : false
        })
    } catch (err) {
      throw new Error(err.message)
    }

    if (user) {
      try {
        const acclevel = (account_level !== undefined) ? account_level : 2
        await getAuth().setCustomUserClaims(user.uid, { account_level: acclevel })
      } catch (err) {
        throw new Error(err.message)
      }

      try {
        // Fetch user with custom claims
        user = await this.getuser({ uid: user.uid })
      } catch (err) {
        throw new Error(err.message)
      }
    }

    return user
  }

  // Update a user's information by email or UID
  async updateuser (params) {
    const fields = ['email', 'password', 'displayName', 'disabled', 'emailVerified']
    const { uid, account_level } = params
    const info = {}
    let user

    fields.forEach((item) => {
      const key = item.toLowerCase()
      if (params[key] !== undefined && params[key] !== '') {
        info[item] = params[key]
      }
    })

    if (Object.keys(info).length > 0) {
      try {
        user = await getAuth().updateUser(uid, info)
      } catch (err) {
        throw new Error(err.message)
      }
    }

    // Update custom claims
    if (account_level) {
      try {
        await getAuth().setCustomUserClaims(uid, { account_level })
      } catch (err) {
        throw new Error(err.message)
      }
    }

    if (!user) {
      try {
        user = await this.getuser({ uid })
      } catch (err) {
        throw new Error(err.message)
      }
    }

    return user
  }

  // Delete a user by UID
  async deleteuser (uid) {
    if (!uid) {
      throw new Error('Missing UID.')
    }

    try {
      return await getAuth().deleteUser(uid)
    } catch (err) {
      throw new Error(err.message)
    }
  }

  // Get user information by user's email or UID
  async getuser (params) {
    const { uid, email } = params

    if (email) {
      try {
        return await getAuth().getUserByEmail(email)
      } catch (err) {
        throw new Error(err.message)
      }
    }

    if (uid) {
      try {
        return await getAuth().getUser(uid)
      } catch (err) {
        throw new Error(err.message)
      }
    }
  }

  // List all users
  async listusers () {
    try {
      return await getAuth().listUsers()
    } catch (err) {
      throw new Error(err.message)
    }
  }
}

module.exports = User
