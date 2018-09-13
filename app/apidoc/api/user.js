'use strict'
/**
 * @api {POST} /user create a user
 * @apiDescription 用户新增的接口
 * @apiName 用户注册
 * @apiGroup User
 * @apiUse userParams
 * @apiSuccessExample Success-Response:
 * {
 *   errorCode: 0,
 *   status: 200,
 *   data: {
 *     _id: '123',
 *     name: 'morehao',
 *     createdAt: '20180913',
 *     updatedAt: '20180913',
 *     lastLogin: '暂未登录'
 *   }
 * }
 * @apiErrorExample {json} Error-Response:
 *  {
 *    status: 200,
 *    errorCode: 20100,
 *    errorMsg: '该用户已经存在'
 *  }
*/
