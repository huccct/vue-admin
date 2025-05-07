/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2024-03-21
 */

// 模拟角色数据
const roleList = [
  {
    id: 1,
    roleName: '超级管理员',
    roleDesc: '系统最高权限',
    createTime: '2024-03-21',
    updateTime: '2024-03-21',
    permissions: ['*'],
  },
  {
    id: 2,
    roleName: '普通管理员',
    roleDesc: '普通管理权限',
    createTime: '2024-03-21',
    updateTime: '2024-03-21',
    permissions: ['product:view', 'user:view'],
  },
]

// 模拟菜单数据
const menuList = [
  {
    id: 1,
    name: '系统管理',
    path: '/system',
    component: 'Layout',
    icon: 'setting',
    children: [
      {
        id: 2,
        name: '用户管理',
        path: 'user',
        component: 'system/user/index',
        icon: 'user',
      },
      {
        id: 3,
        name: '角色管理',
        path: 'role',
        component: 'system/role/index',
        icon: 'peoples',
      },
    ],
  },
  {
    id: 4,
    name: '商品管理',
    path: '/product',
    component: 'Layout',
    icon: 'shopping',
    children: [
      {
        id: 5,
        name: '商品列表',
        path: 'list',
        component: 'product/list/index',
        icon: 'list',
      },
      {
        id: 6,
        name: '商品分类',
        path: 'category',
        component: 'product/category/index',
        icon: 'tree',
      },
    ],
  },
]

export default [
  // 获取角色列表
  {
    url: '/admin/acl/role/:page/:limit',
    method: 'get',
    response: ({ query }) => {
      const { page = 1, limit = 10, roleName = '' } = query
      let filteredList = [...roleList]
      if (roleName) {
        filteredList = roleList.filter((role) =>
          role.roleName.includes(roleName),
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
  // 添加角色
  {
    url: '/admin/acl/role/save',
    method: 'post',
    response: ({ body }) => {
      roleList.push({
        ...body,
        id: roleList.length + 1,
        createTime: new Date().toISOString().split('T')[0],
        updateTime: new Date().toISOString().split('T')[0],
      })
      return {
        code: 200,
        data: null,
        message: '添加成功',
      }
    },
  },
  // 更新角色
  {
    url: '/admin/acl/role/update',
    method: 'put',
    response: ({ body }) => {
      const index = roleList.findIndex((item) => item.id === body.id)
      if (index !== -1) {
        roleList[index] = { ...roleList[index], ...body }
      }
      return {
        code: 200,
        data: null,
        message: '更新成功',
      }
    },
  },
  // 获取角色权限
  {
    url: '/admin/acl/permission/toAssign/:roleId',
    method: 'get',
    response: (request) => {
      const roleId = Number(request.url.split('/').pop())
      const role = roleList.find((item) => item.id === roleId)
      return {
        code: 200,
        data: {
          assignPermissions: role?.permissions || [],
          allPermissions: menuList,
        },
      }
    },
  },
  // 分配角色权限
  {
    url: '/admin/acl/permission/doAssign',
    method: 'post',
    response: ({ query }) => {
      const { roleId, permissionId } = query
      const role = roleList.find((item) => item.id === Number(roleId))
      if (role) {
        role.permissions = Array.isArray(permissionId)
          ? permissionId
          : [permissionId]
      }
      return {
        code: 200,
        data: null,
        message: '分配权限成功',
      }
    },
  },
  // 删除角色
  {
    url: '/admin/acl/role/remove/:roleId',
    method: 'delete',
    response: (request) => {
      const roleId = Number(request.url.split('/').pop())
      const index = roleList.findIndex((item) => item.id === roleId)
      if (index !== -1) {
        roleList.splice(index, 1)
      }
      return {
        code: 200,
        data: null,
        message: '删除成功',
      }
    },
  },
  // 获取菜单列表
  {
    url: '/admin/acl/permission',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: menuList,
      }
    },
  },
  // 添加菜单
  {
    url: '/admin/acl/permission/save',
    method: 'post',
    response: ({ body }) => {
      menuList.push({
        ...body,
        id: Date.now(),
      })
      return {
        code: 200,
        data: null,
        message: '添加成功',
      }
    },
  },
  // 更新菜单
  {
    url: '/admin/acl/permission/update',
    method: 'put',
    response: ({ body }) => {
      const updateMenu = (list) => {
        for (let i = 0; i < list.length; i++) {
          if (list[i].id === body.id) {
            list[i] = { ...list[i], ...body }
            return true
          }
          if (list[i].children && updateMenu(list[i].children)) {
            return true
          }
        }
        return false
      }
      updateMenu(menuList)
      return {
        code: 200,
        data: null,
        message: '更新成功',
      }
    },
  },
  // 删除菜单
  {
    url: '/admin/acl/permission/remove/:id',
    method: 'delete',
    response: (request) => {
      const id = Number(request.url.split('/').pop())
      const deleteMenu = (list) => {
        for (let i = 0; i < list.length; i++) {
          if (list[i].id === id) {
            list.splice(i, 1)
            return true
          }
          if (list[i].children && deleteMenu(list[i].children)) {
            return true
          }
        }
        return false
      }
      deleteMenu(menuList)
      return {
        code: 200,
        data: null,
        message: '删除成功',
      }
    },
  },
]
