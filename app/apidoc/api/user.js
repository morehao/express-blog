'use strict'
/**
    * @api {POST} /article 新增文章
    * @apiName Add a article
    * @apiGroup User
    * @apiParam {String} title 文章标题
    * @apiParam {String} content 文章内容
    * @apiParam {String} type 文章格式，可选值为['markdown', 'html']
    * @apiSuccess {String} _id 文章id
    * @apiSuccess {String} title 文章标题
    * @apiSuccess {String} content 文章内容
    * @apiSuccess {String} content 文章类别
    * @apiUse userData
    * @apiSuccessExample Success-Response:
    * {
    *   errorCode: 0,
    *   status: 200,
    *   data: {
    *     _id: '00001',
    *     title: "标题",
    *     content: '内容',
    *     authorId: '作者信息'
    *   }
    * }
  */
