/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2024-03-21
 */

// 模拟用户列表数据
const userList = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    name: '超级管理员',
    phone: '13800138000',
    roleName: '超级管理员',
    createTime: '2024-03-21',
    updateTime: '2024-03-21',
    status: 1,
  },
  {
    id: 2,
    username: 'test',
    password: '123456',
    name: '测试用户',
    phone: '13800138001',
    roleName: '普通管理员',
    createTime: '2024-03-21',
    updateTime: '2024-03-21',
    status: 1,
  },
]

export default [
  // 用户登录接口
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      const checkUser = userList.find(
        (item) => item.username === username && item.password === password,
      )
      if (!checkUser) {
        return { code: 201, data: { message: '账号或者密码不正确' } }
      }
      return { code: 200, data: 'Admin Token' }
    },
  },
  // 获取用户信息
  {
    url: '/api/user/info',
    method: 'get',
    response: (request) => {
      const token = request.headers.token
      if (token === 'Admin Token') {
        return {
          code: 200,
          data: {
            name: 'admin',
            avatar:
              'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            roles: ['admin'],
            buttons: ['cuser.detail'],
            routes: [
              'home',
              'Acl',
              'User',
              'Role',
              'Permission',
              'Product',
              'Trademark',
              'Attr',
              'Spu',
              'Sku',
            ],
          },
          message: '获取用户信息成功',
        }
      }
      return {
        code: 201,
        data: null,
        message: '获取用户信息失败',
      }
    },
  },
  // 获取用户列表
  {
    url: '/api/acl/user/:page/:limit',
    method: 'get',
    response: ({ query }) => {
      const { username } = query
      let filteredList = userList
      if (username) {
        filteredList = userList.filter((user) =>
          user.username.includes(username),
        )
      }
      return {
        code: 200,
        data: {
          records: filteredList,
          total: filteredList.length,
        },
      }
    },
  },
  // 添加/更新用户
  {
    url: '/api/acl/user/save',
    method: 'post',
    response: ({ body }) => {
      const newUser = {
        ...body,
        id: userList.length + 1,
        createTime: new Date().toISOString().split('T')[0],
        updateTime: new Date().toISOString().split('T')[0],
        status: 1,
      }
      userList.push(newUser)
      return { code: 200, data: null, message: '添加成功' }
    },
  },
  {
    url: '/api/acl/user/update',
    method: 'put',
    response: ({ body }) => {
      const index = userList.findIndex((item) => item.id === body.id)
      if (index !== -1) {
        userList[index] = {
          ...userList[index],
          ...body,
          updateTime: new Date().toISOString().split('T')[0],
        }
      }
      return { code: 200, data: null, message: '更新成功' }
    },
  },
  // 删除用户
  {
    url: '/api/acl/user/remove/:id',
    method: 'delete',
    response: (request) => {
      const id = request.query.id
      if (!id) {
        return { code: 201, data: null, message: '参数错误' }
      }
      const index = userList.findIndex((item) => item.id === Number(id))
      if (index !== -1) {
        userList.splice(index, 1)
        return { code: 200, data: null, message: '删除成功' }
      }
      return { code: 201, data: null, message: '用户不存在' }
    },
  },
  // 批量删除用户
  {
    url: '/api/acl/user/batchRemove',
    method: 'delete',
    response: ({ body }) => {
      const { idList } = body
      idList.forEach((id) => {
        const index = userList.findIndex((item) => item.id === id)
        if (index !== -1) {
          userList.splice(index, 1)
        }
      })
      return { code: 200, data: null, message: '批量删除成功' }
    },
  },
  // 获取用户角色
  {
    url: '/api/acl/user/toAssign/:userId',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          assignRoles: [
            {
              id: 1,
              roleName: '超级管理员',
              createTime: '2024-03-21',
              updateTime: '2024-03-21',
            },
          ],
          allRolesList: [
            {
              id: 1,
              roleName: '超级管理员',
              createTime: '2024-03-21',
              updateTime: '2024-03-21',
            },
            {
              id: 2,
              roleName: '普通管理员',
              createTime: '2024-03-21',
              updateTime: '2024-03-21',
            },
          ],
        },
      }
    },
  },
  // 分配用户角色
  {
    url: '/api/acl/user/doAssignRole',
    method: 'post',
    response: () => {
      return { code: 200, data: null, message: '分配角色成功' }
    },
  },
  // 用户登出接口
  {
    url: '/api/user/logout',
    method: 'post',
    response: () => {
      return { code: 200, data: null, message: '退出成功' }
    },
  },
]
