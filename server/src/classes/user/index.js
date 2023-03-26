const User = require('./user')
const USER = new User()

const createuser = USER.createuser.bind(USER)
const updateuser = USER.updateuser.bind(USER)
const deleteuser = USER.deleteuser.bind(USER)
const getuser = USER.getuser.bind(USER)
const listusers = USER.listusers.bind(USER)

module.exports = {
  createuser,
  updateuser,
  deleteuser,
  getuser,
  listusers
}
