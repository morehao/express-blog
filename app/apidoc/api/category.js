'use strict'
/**
  * @api {POST} /category 新增文章类别
  * @apiName create a category
  * @apiGroup Category
  * @apiDescription 新增文章类别的接口
  * @apiUse headerParams
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
