'use strict'
// 当请求方式为GET和DELETE时，isParams的值，1代表请求的url中有数组对象，0代表没有，默认为0
// 已注册的路由
module.exports = {
  users: {
    add: {
      routerNameCN: '创建用户',
      routerNmaeEN: 'add user',
      router: '/users',
      method: 'POST',
      isParams: 0
    },
    delete: {
      routerNameCN: '删除用户',
      routerNmaeEN: 'delete user',
      router: '/users',
      method: 'DELETE',
      isParams: 1
    },
    edit: {
      routerNameCN: '编辑用户',
      routerNmaeEN: 'edit user',
      router: '/users',
      method: 'PUT',
      isParams: 1
    },
    view: {
      routerNameCN: '查看单个用户',
      routerNmaeEN: 'view user',
      router: '/users',
      method: 'GET',
      isParams: 1
    },
    viewList: {
      routerNameCN: '查看用户列表',
      routerNmaeEN: 'view user list',
      router: '/users',
      method: 'GET',
      isParams: 0
    },
    login: {
      routerNameCN: '用户登录',
      routerNmaeEN: 'user login',
      router: '/users',
      method: 'POST',
      isParams: 0
    }
  }
}
