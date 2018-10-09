'use strict'
/**
  @apiDefine articleParams
  @apiParam {String} title 文章标题
  @apiParam {String} content 文章内容
  @apiParam {String} type 文章格式，可选值为['markdown', 'html']
*/

/**
  @apiDefine articleParamsOptional
  @apiParam {String} title 可选，文章标题
  @apiParam {String} type 可选，文章格式，可选值为['markdown', 'html']
*/

/**
 * @apiDefine articleResponse
 * @apiSuccessExample Success-Response:
 * {
 *   errorCode: 0,
 *   status: 200,
 *   data: {
 *     _id: '123',
 *     title: 'title',
 *     content: 'content',
 *     createdAt: '20180913',
 *     updatedAt: '20180913'
 *   }
 * }
*/

/**
 * @apiDefine articleNotFind
 * @apiErrorExample {json} Error-Response:
 * {
 *   status: 200,
 *   errorCode: 20402,
 *   errorMsg: '该文章不存在'
 * }
*/
