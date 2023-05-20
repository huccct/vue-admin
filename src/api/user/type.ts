/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-19 17:16:03
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-20 16:27:04
 */
// 登录接口需要携带参数ts类型
export interface LoginForm {
  username?: string
  password?: string
}
interface dataType {
  token?: string
  message?: string
}
export interface LoginResponseData {
  code?: number
  data?: dataType
}

interface userInfo {
  userId?: number
  avatar?: string
  username?: string
  password: string
  desc?: string
  roles?: string[]
  buttons?: string[]
  routes?: string[]
  token?: string
}

interface user {
  checkUser?: userInfo
}
export interface UserResponseData {
  code?: number
  data?: user
}
