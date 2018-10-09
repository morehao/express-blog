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
 * @apiDefine articleCreareResponse
 * @apiSuccessExample Success-Response:
  {
    "status": 200,
    "errorCode": 0,
    "data": {
        "countInfo": {
            "commentCount": 0,
            "visitCount": 0,
            "collectCount": 0,
            "likeCount": 0
        },
        "top": false,
        "good": false,
        "deleted": false,
        "_id": "5bbc77aded51c71df03f3ba9",
        "title": "标题1",
        "content": "内容1",
        "categoryId": "5bbc6241dbaf531fac21b662",
        "authorId": "5bbc59366501713374220caa",
        "createAt": "2018-10-09T09:41:01.086Z",
        "updateAt": "2018-10-09T09:41:01.087Z",
        "__v": 0
    }
  }
*/

/**
 * @apiDefine articleResponse
 * @apiSuccessExample Success-Response:
  {
    "status": 200,
    "errorCode": 0,
    "data": {
        "countInfo": {
            "commentCount": 0,
            "visitCount": 0,
            "collectCount": 0,
            "likeCount": 0
        },
        "top": false,
        "good": false,
        "deleted": false,
        "_id": "5bbc77aded51c71df03f3ba9",
        "title": "标题",
        "content": "内容1",
        "categoryId": {
            "_id": "5bbc6241dbaf531fac21b662",
            "name": "类别1",
            "userId": "5bbc59366501713374220caa",
            "createdAt": "2018-10-09 16:09:37",
            "updatedAt": "2018-10-09 16:09:37",
            "__v": 0,
            "id": "5bbc6241dbaf531fac21b662"
        },
        "authorId": {
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
            "lastLogin": "2018-10-09 17:48:43",
            "id": "5bbc59366501713374220caa"
        },
        "createAt": "2018-10-09T09:41:01.086Z",
        "updateAt": "2018-10-09T09:41:01.087Z",
        "__v": 0
    }
  }
*/

/**
 * @apiDefine articleListResponse
 * @apiSuccessExample Success-Response:
  {
    "status": 200,
    "errorCode": 0,
    "data": {
        "dataCount": 1,
        "list": [
            {
                "_id": "5bbc77aded51c71df03f3ba9",
                "countInfo": {
                    "commentCount": 0,
                    "visitCount": 0,
                    "collectCount": 0,
                    "likeCount": 0
                },
                "top": false,
                "good": false,
                "deleted": false,
                "title": "标题",
                "content": "内容1",
                "categoryId": {
                    "_id": "5bbc6241dbaf531fac21b662",
                    "name": "类别1",
                    "userId": "5bbc59366501713374220caa",
                    "createdAt": "2018-10-09T08:09:37.986Z",
                    "updatedAt": "2018-10-09T08:09:37.000Z",
                    "__v": 0
                },
                "authorId": {
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
                "createAt": "2018-10-09T09:41:01.086Z",
                "updateAt": "2018-10-09T09:41:01.087Z",
                "__v": 0
            }
        ]
    }
  }
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
