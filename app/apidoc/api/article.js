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
  *     categoryId: '1231231',
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

/**
 * @api {PUT} /article/:_id 文章更新
 * @apiName update an article
 * @apiGroup Article
 * @apiDescription 文章更新的接口
 * @apiUse headerParams
 * @apiParam {String} _id 文章的id
 * @apiUse articleParamsOptional
 * @apiUse articleResponse
 * @apiUse articleNotFind
*/

/**
 * @api {GET} /article/:_id 文章详情
 * @apiName view an article
 * @apiGroup Article
 * @apiDescription 文章详情的接口
 * @apiUse headerParams
 * @apiParam {String} _id 文章的id
 * @apiUse articleResponse
 * @apiUse articleNotFind
*/

/**
 * @api {GET} /article 文章列表
 * @apiName get articleList
 * @apiGroup Article
 * @apiDescription 文章列表的接口
 * @apiUse headerParams
 * @apiUse listParams
 * @apiUse articleParamsOptional
 * @apiUse articleResponse
 * @apiUse articleNotFind
*/
