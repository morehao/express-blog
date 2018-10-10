# express-blog
在express框架下的学习与摸索,如果可能,最终希望形成一个博客系统<br>
1、restfulAPI的实现<br>
2、实现MVC模式<br>
3、res添加属性，对返回的数据格式化为统一的标准<br>
4、对错误进行通过中间件进行统一处理<br>
5、用户管理的简单增删改查接口<br>
6、用户列表查询的封装处理<br>
7、npm run build 初始化创建管理员用户<br>
8、读出数据的二次处理（填充）<br>
9、学习使用vscode调试程序<br>
10、使用JWT实现token认证<br>
11、使用log4js管理日志<br>
12、使用mocha框架编写测试代码<br>
13、设置跨域访问<br>
14、优化日志，格式化日志信息，但仍需修改<br>
15、 后来添加的东西忘记记录了。。。。。<br>
参考资料：<br>
[restful api](https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd)<br>
[log4js](https://juejin.im/post/5b7d0e20f265da43231f00d4)

命令说明：
``` shell
# 安装依赖
npm install
# 开发模式启动程序
npm run dev
# 生产模式启动程序
npm run start
# 生成接口文档
npm run apidoc
# 生成提交日志
npm run changelog
# 运行测试代码
npm run test
# 初始化构建，生成admin账号
npm run build
```
注：执行`npm run apidoc`后启动程序，开发环境下访问`localhost:4000/apidoc`即可查看接口文档。
