/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-20 16:28:00
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-21 10:21:50
 */
import type { RouteRecordRaw } from 'vue-router'
export interface UserState {
  token: string | null
  menuRoutes: RouteRecordRaw[]
}
