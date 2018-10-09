'use strict'
/**
  * @api {POST} /category 新增文章类别
  * @apiName create a category
  * @apiGroup Category
  * @apiDescription 新增文章类别的接口
  * @apiUse headerParams
  * @apiUse categoryParams
  * @apiUse categoryCreateResponse
  * @apiErrorExample {json} Error-Response:
  *  {
  *    status: 200,
  *    errorCode: 20301,
  *    errorMsg: '该分类已经存在'
  *  }
*/

/**
  * @api {PUT} /category/:_id 文章类别更新
  * @apiName update a category
  * @apiGroup Category
  * @apiDescription 文章类别更新的接口
  * @apiUse headerParams
  * @apiParam {String} _id 文章类别的id
  * @apiParam {String} name 可选，文章类别的名称
  * @apiUse categoryResponse
  * @apiUse categoryNotFind
*/

/**
  * @api {GET} /category/:_id 文章类别详情
  * @apiName view a category
  * @apiGroup Category
  * @apiDescription 文章类别详情的接口
  * @apiUse headerParams
  * @apiParam {String} _id 文章类别的id
  * @apiUse categoryResponse
  * @apiUse categoryNotFind
*/

/**
  * @api {GET} /category/:_id 文章类别列表
  * @apiName get categoryList
  * @apiGroup Category
  * @apiDescription 文章类别列表的接口
  * @apiUse headerParams
  * @apiUse listParams
  * @apiParam {String} name 可选，文章类别的名称
  * @apiUse categoryListResponse
  * @apiUse categoryNotFind
*/
