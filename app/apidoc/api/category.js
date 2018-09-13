'use strict'
/**
  * @api {POST} /category create a category
  * @apiName 新增文章类别
  * @apiGroup Category
  * @apiDescription 新增文章类别的接口
  * @apiHeader {String} token 用户登录后返回的token令牌
  * @apiUse categoryParams
  * @apiSuccessExample Success-Response:
  * {
  *   errorCode: 0,
  *   status: 200,
  *   data: {
  *     _id: '00001',
  *     name: '技术',
  *     createdAt: '20180913',
  *     updatedAt: '20180913'
  *   }
  * }
  * @apiErrorExample {json} Error-Response:
  *  {
  *    status: 200,
  *    errorCode: 20301,
  *    errorMsg: '该分类已经存在'
  *  }
*/
