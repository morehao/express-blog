'use strict'
/**
  * @api {POST} /article 新增文章
  * @apiName create an article
  * @apiGroup Article
  * @apiDescription 新增文章的接口
  * @apiUse headerParams
  * @apiUse articleParams
  * @apiSuccessExample Success-Response:
  * {
  *   errorCode: 0,
  *   status: 200,
  *   data: {
  *     _id: '00001',
  *     title: "标题",
  *     content: '内容',
  *     authorId: '12313',
  *     createdAt: '20180913',
  *     updatedAt: '20180913'
  *   }
  * }
  * @apiErrorExample {json} Error-Response:
  *  {
  *    status: 200,
  *    errorCode: 20401,
  *    errorMsg: '该文章已经存在'
  *  }
  */
