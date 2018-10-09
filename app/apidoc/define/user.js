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
 * @apiDefine userResponse
 * @apiSuccessExample Success-Response:
{
    "status": 200,
    "errorCode": 0,
    "data": {
        "intruction": "这个人很懒，什么都有没留下、、、",
        "logo": "/upload/images/defaultlogo.png",
        "role": "ordinary users",
        "_id": "5bbc59366501713374220caa",
        "name": "morehao",
        "nickName": "毛浩先生",
        "age": 24,
        "sex": "male",
        "company": "太原科技大学",
        "website": "morehao.com",
        "createdAt": "2018-10-09 15:31:02",
        "updatedAt": "2018-10-09 15:31:02",
        "__v": 0,
        "lastLogin": "2018-10-09 15:31:02",
        "id": "5bbc59366501713374220caa",
        "reSex": "男"
    }
}
*/

/**
 * @apiDefine userListResponse
 * @apiSuccessExample Success-Response:
  {
    "status": 200,
    "errorCode": 0,
    "data": {
        "dataCount": 1,
        "list": [
            {
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
                "lastLogin": "暂无登录记录"
            }
        ]
    }
  }
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
