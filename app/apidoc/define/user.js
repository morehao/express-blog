'use strict'
/**
 * @apiDefine userParams
 * @apiParam {String} name 用户名
 * @apiParam {Number} age 年龄
 * @apiParam {String} nickName 昵称
 * @apiParam {Enum} sex 性别
 * @apiParam {String} company 学校或者公司
 * @apiParam {String} website 个人网站
 * @apiParam {String} instruction 个人简介
 * @apiParam {String} role 用户角色
*/

/**
 * @apiDefine userParamsOptional
 * @apiParam {String} name 可选，用户名
 * @apiParam {Number} age 可选，年龄
 * @apiParam {String} nickName 可选，昵称
 * @apiParam {Enum} sex 可选，性别
 * @apiParam {String} company 可选，学校或者公司
 * @apiParam {String} website 可选，个人网站
 * @apiParam {String} instruction 可选，个人简介
 * @apiParam {String} role 可选，用户角色
*/

/**
 * @apiDefine userRespones
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
*/
/**
 * @apiDefine userNotFind
 * @apiErrorExample {json} Error-Response:
 * {
 *   status: 200,
 *   errorCode: 20101,
 *   errorMsg: '该用户不存在！'
 * }
*/
