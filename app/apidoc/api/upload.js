'use strict'
/**
 * @api {POST} /upload 图片上传
 * @apiName upload
 * @apiGroup Upload
 * @apiDescription 图片上传的接口，form-data方式
 * @apiUse headerParams
 * @apiParam {File} file 上传的图片文件
 * @apiSuccessExample Success-Response:
  {
    "status": 200,
    "errorCode": 0,
    "data": [
        {
            "imageUrl": "127.0.0.1:4000/upload/0c990080-cbab-11e8-b47c-83c45848f87a.jpg",
            "imageName": "0c990080-cbab-11e8-b47c-83c45848f87a.jpg",
            "resource": "server"
        }
    ]
  }
*/
