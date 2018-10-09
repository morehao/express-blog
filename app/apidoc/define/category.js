'use strict'
/**
  @apiDefine categoryParams
  @apiParam {String} name 文章类别名称
*/

/**
 * @apiDefine categoryCreateResponse
 * @apiSuccessExample Success-Response:
  {
    "status": 200,
    "errorCode": 0,
    "data": {
        "_id": "5bbc5fbe2e22a330ccad507a",
        "name": "类别",
        "userId": "5bbc59366501713374220caa",
        "createdAt": "2018-10-09 15:58:54",
        "updatedAt": "2018-10-09 15:58:54",
        "__v": 0,
        "id": "5bbc5fbe2e22a330ccad507a"
    }
  }
*/

/**
 * @apiDefine categoryResponse
 * @apiSuccessExample Success-Response:
  {
    "status": 200,
    "errorCode": 0,
    "data": {
        "_id": "5bbc6241dbaf531fac21b662",
        "name": "类别1",
        "userId": {
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
            "lastLogin": "2018-10-09 16:56:54",
            "id": "5bbc59366501713374220caa"
        },
        "createdAt": "2018-10-09 16:09:37",
        "updatedAt": "2018-10-09 16:09:37",
        "__v": 0,
        "id": "5bbc6241dbaf531fac21b662"
    }
  }
*/

/**
 * @apiDefine categoryListResponse
 * @apiSuccessExample Success-Response:
  {
    "status": 200,
    "errorCode": 0,
    "data": {
        "dataCount": 2,
        "list": [
            {
                "_id": "5bbc5fbe2e22a330ccad507a",
                "name": "类别",
                "userId": {
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
                    "createdAt": "2018-10-09T07:31:02.362Z",
                    "updatedAt": "2018-10-09T07:31:02.000Z",
                    "__v": 0
                },
                "createdAt": "2018-10-09T07:58:54.940Z",
                "updatedAt": "2018-10-09T07:58:54.000Z",
                "__v": 0
            }
        ]
    }
  }
*/

/**
 * @apiDefine categoryNotFind
 * @apiErrorExample {json} Error-Response:
 * {
 *   status: 200,
 *   errorCode: 20302,
 *   errorMsg: '该分类不存在'
 * }
*/
