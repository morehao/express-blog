'use strict'
// 角色与权限关联关系
const {right} = require('./right')
module.exports = {
  root: [right.userAll], // 超级管理员
  admin: [right.userLogin, right.userView, right.userList], // 普通管理员
  normal: [right.userLogin, right.userEdit, right.userView] // 普通用户
}
