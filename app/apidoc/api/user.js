'use strict'
/**
 * @api {POST} /user 新增用户
 * @apiDescription 用户新增的接口
 * @apiName create a user
 * @apiGroup User
 * @apiUse userParams
 * @apiUse userRespones
 * @apiErrorExample {json} Error-Response:
 *  {
 *    status: 200,
 *    errorCode: 20100,
 *    errorMsg: '该用户已经存在'
 *  }
*/

/**
 * @api {DELETE} /user/:_id 删除用户
 * @apiDescription 用户删除的接口
 * @apiName delete a user
 * @apiGroup User
 * @apiUse headerParams
 * @apiParam {String} _id 用户的id
 * @apiSuccessExample Success-Response:
 * {
 *   errorCode: 0,
 *   status: 200,
 *   data: "用户删除成功！"
 * }
 * @apiUse userNotFind
*/

/**
 * @api {PUT} /user/:_id 更新用户
 * @apiDescription 更新用户信息的接口
 * @apiName update a user
 * @apiGroup User
 * @apiUse headerParams
 * @apiParam {String} _id 用户的id
 * @apiUse userParamsOptional
 * @apiSuccessExample Success-Response:
 * {
 *   errorCode: 0,
 *   status: 200,
 *   data: "用户信息更新成功！"
 * }
 * @apiUse userNotFind
*/

/**
 * @api {POST} /user/:_id 用户详情
 * @apiDescription 用户详情的接口
 * @apiName view a user
 * @apiGroup User
 * @apiParam {String} _id 用户的id
 * @apiUse userRespones
 * @apiUse userNotFind
*/

/**
 * @api {GET} /user 用户列表
 * @apiDescription 查看用户列表的接口
 * @apiName get userList
 * @apiGroup User
 * @apiUse headerParams
 * @apiUse listParams
 * @apiUse userParamsOptional
 * @apiSuccessExample Success-Response:
 * {
 *   errorCode: 0,
 *   status: 200,
 *   data: [
 *    {
 *      _id: '123',
 *      name: 'morehao',
 *      createdAt: '20180913',
 *      updatedAt: '20180913',
 *      lastLogin: '暂未登录'
 *    }
 *  ]
 * }
 * @apiUse userNotFind
*/

/**
 * @api {POST} /users/login 用户登录
 * @apiDescription 用户登录的接口
 * @apiName user login
 * @apiGroup User
 * @apiParam {String} name 用户名
 * @apiParam {String} password 密码
 * @apiSuccessExample Success-Response:
 * {
 *   errorCode: 0,
 *   status: 200,
 *   data: [
 *    {
 *      _id: '123',
 *      name: 'morehao',
 *      createdAt: '20180913',
 *      updatedAt: '20180913',
 *      lastLogin: '暂未登录',
 *      token: '123asd123qsdwf1'
 *    }
 *  ]
 * }
 * @apiUse userNotFind
*/
