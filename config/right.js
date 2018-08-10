'use strict'
// 系统权限
const {users} = require('./router.js')
module.exports = {
  userAdd: [users.add],
  userDelete: [users.delete],
  userEdit: [users.edit],
  userView: [users.view],
  userList: [users.viewList],
  userLogin: [users.login],
  userAll: [users.add, users.delete, users.edit, users.view, users.viewList, users.login]
}
