'use strict'

module.exports = {
  // 密码盐
  saltKey: 'express_frame',
  // jwt实现token认证的secret
  jwtSecret: 'express_jwt',
  port: process.env.PORT || 4000,
  website: '127.0.0.1:4000',
  // mongodb数据库配置
  dbConfig: {
    URL: 'mongodb://127.0.0.1:27017/express-blog',
    DB: 'express-blog',
    HOST: '127.0.0.1',
    PORT: 27017,
    USERNAME: 'morehao',
    PASSWORD: 'morehao'
  },
  adminConfig: {
    name: 'admin',
    password: '123456',
    role: 'ordinary users'
  },
  qiniuConfig: {
    accessKey: '',
    secretKey: '',
    bucket: 'express-blog',
    originUrl: ''
  }
  // redis数据库配置
}
