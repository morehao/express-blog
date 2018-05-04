'use strict'

module.exports = {
  // 密码盐
  saltKey: 'express_frame',

  port: process.env.PORT || 3000,
  //mongodb数据库配置
  dbConfig: {
    URL: 'mongodb://127.0.0.1:27017/express-frame',
    DB: 'express-frame',
    HOST: '127.0.0.1',
    PORT: 27017,
    USERNAME: 'morehao',
    PASSWORD: 'morehao',
  }

  //redis数据库配置
}