'use strict'

const mdbs = require('../app/models')
const myutil = require('../app/myutil')
const configs = require('../app/config')

module.exports = async (name, password, saltKey) => {
  try {
    const findRes = await mdbs.User.findOne({name: name})
    if (findRes) {
      console.log('admin用户已经存在，请勿重复添加')
      return 'admin用户已经存在，请勿重复添加'
    } else {
      const newPwd = myutil.crypto.encrypted(password, saltKey)
      mdbs.User.create({
        name: name,
        nickname: name,
        password: newPwd
      })
      console.log('admin用户添加成功')
      return 'admin用户添加成功'
    }
  } catch (error) {
    console.log('添加admin用户的操作存在错误')
    return '添加admin用户的操作存在错误'
  }
}
