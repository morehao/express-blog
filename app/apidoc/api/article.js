'use strict'
/**
  * @api {POST} /article 新增文章
  * @apiName create an article
  * @apiGroup Article
  * @apiDescription 新增文章的接口
  * @apiUse headerParams
  * @apiUse articleParams
  * @apiUse articleCreareResponse
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
 * @apiSuccessExample Success-Response:
  {
    "status": 200,
    "errorCode": 0,
    "data": "文章修改成功！"
  }
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
 * @apiUse articleListResponse
 * @apiUse articleNotFind
*/
