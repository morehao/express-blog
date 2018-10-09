'use strict'
/**
 * @api {POST} /user 新增用户
 * @apiDescription 用户新增的接口
 * @apiName create a user
 * @apiGroup User
 * @apiUse userParams
 * @apiUse userResponse
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
 * @apiUse headerParams
 * @apiParam {String} _id 用户的id
 * @apiUse userResponse
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
 * @apiUse userListResponse
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
  {
    "status": 200,
    "errorCode": 0,
    "data": {
        "_id": "5bbc59366501713374220caa",
        "intruction": "这个人很懒，什么都有没留下、、、",
        "logo": "/upload/images/defaultlogo.png",
        "role": "ordinary users",
        "name": "morehao",
        "nickName": "毛浩先生",
        "age": 24,
        "sex": "male",
        "company": "太原科技大学",
        "website": "morehao.com",
        "createdAt": "2018-10-09 15:31:02",
        "updatedAt": "2018-10-09 15:31:02",
        "__v": 0,
        "reSex": "男",
        "lastLogin": "暂无登录记录",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YmJjNTkzNjY1MDE3MTMzNzQyMjBjYWEiLCJpYXQiOjE1MzkwNzAzNjksImV4cCI6MTUzOTE1Njc2OX0.NkluX_5Z7NhcE_azAa16Jtqh3YBnbzXO2MecYKD0exs"
    }
  }
 * @apiUse userNotFind
*/
