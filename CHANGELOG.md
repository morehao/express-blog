<a name="1.0.0"></a>
# [1.0.0](https://github.com/morehao/express-restfulApi/compare/v0.0.2...v1.0.0) (2018-09-12)


### Bug Fixes

* **category:** category中controller命名修改 ([8c16c3b](https://github.com/morehao/express-restfulApi/commit/8c16c3b))
* **users:** 用户列表接口修复，populate为空数组 ([9d3ec42](https://github.com/morehao/express-restfulApi/commit/9d3ec42))


### Features

* **article:** 上传接口，获取文件的信息 ([8d2a95f](https://github.com/morehao/express-restfulApi/commit/8d2a95f))
* **article:** 文章的增、改、列表接口 ([09e8e08](https://github.com/morehao/express-restfulApi/commit/09e8e08))
* **article:** 新增upload接口，还未实现接口的内部逻辑 ([aacb78b](https://github.com/morehao/express-restfulApi/commit/aacb78b))
* **article:** 新增文章接口 ([e5b61a6](https://github.com/morehao/express-restfulApi/commit/e5b61a6))
* **article-category:** 增加文章类别的修改和列表接口 ([9ec1810](https://github.com/morehao/express-restfulApi/commit/9ec1810))
* **article-category:** 文章分类，建表和创建的接口 ([35d0b59](https://github.com/morehao/express-restfulApi/commit/35d0b59))
* **base-service:** baseservice增加findById，家、公司都可搬砖 ([89808cb](https://github.com/morehao/express-restfulApi/commit/89808cb))
* **logs:** 优化日志，格式化日志的保存与输出 ([a909324](https://github.com/morehao/express-restfulApi/commit/a909324))
* **upload:** 上传图片到七牛云 ([ea89b23](https://github.com/morehao/express-restfulApi/commit/ea89b23))
* **validator:** 添加validator校验 ([c5bda27](https://github.com/morehao/express-restfulApi/commit/c5bda27))



<a name="0.0.2"></a>
## [0.0.2](https://github.com/morehao/express-restfulApi/compare/v0.0.1...v0.0.2) (2018-07-10)


### Bug Fixes

* **files:** 删除一些无用的文件 ([885b012](https://github.com/morehao/express-restfulApi/commit/885b012))
* **package-lock:** 修复github提示的hoek版本过低问题 ([bc57a40](https://github.com/morehao/express-restfulApi/commit/bc57a40))
* **token:** 修复中间件检测不到token过期的问题 ([11f2657](https://github.com/morehao/express-restfulApi/commit/11f2657))


### Features

* **build:** 初始化创建管理员用户 ([497f904](https://github.com/morehao/express-restfulApi/commit/497f904))
* **changelog:** 新增commit提交日志 ([cca17a2](https://github.com/morehao/express-restfulApi/commit/cca17a2))
* **cros:** 设置跨域访问 ([744cdd7](https://github.com/morehao/express-restfulApi/commit/744cdd7))
* **data-return:** 对返回的数据进行格式化处理 ([762ef76](https://github.com/morehao/express-restfulApi/commit/762ef76))
* **error-handler:** 通过中间件对错误进行统一处理 ([96fb203](https://github.com/morehao/express-restfulApi/commit/96fb203))
* **list:** 分页处理，增加总数据数目dataCount ([f8d7c68](https://github.com/morehao/express-restfulApi/commit/f8d7c68))
* **log4js:** 请求日志console到命令行终端工具 ([db27a8f](https://github.com/morehao/express-restfulApi/commit/db27a8f))
* **log4js:** 通过log4js记录程序日志 ([d131947](https://github.com/morehao/express-restfulApi/commit/d131947))
* **mocha-test:** 利用mocha测试框架编写单元测试 ([7baa7e4](https://github.com/morehao/express-restfulApi/commit/7baa7e4))
* **package-lock:** 删除package-lock.json,重新生成该文件 ([e21aa6d](https://github.com/morehao/express-restfulApi/commit/e21aa6d))
* **role-right:** 权限管理model文件 ([91223ec](https://github.com/morehao/express-restfulApi/commit/91223ec))
* **study-async:** 新增node改写回调函数的学习 ([dfd2ccc](https://github.com/morehao/express-restfulApi/commit/dfd2ccc))
* **token:** JWT实现token机制 ([bcbefae](https://github.com/morehao/express-restfulApi/commit/bcbefae))
* **user-login:** 新增用户登录接口 ([0fb860d](https://github.com/morehao/express-restfulApi/commit/0fb860d))
* **users:** 用户管理的增删改查基本接口 ([54b534d](https://github.com/morehao/express-restfulApi/commit/54b534d))


### Performance Improvements

* **middlewares:** 优化中间件注册和使用 ([1667338](https://github.com/morehao/express-restfulApi/commit/1667338))



