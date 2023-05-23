/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-20 16:28:00
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-22 20:51:39
 */
import type { RouteRecordRaw } from 'vue-router'
export interface UserState {
  token: string | null
  menuRoutes: RouteRecordRaw[],
  username: string,
  avatar: string
}
