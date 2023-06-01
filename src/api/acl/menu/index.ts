/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-06-01 15:21:59
 * @LastEditors: Huccct
 * @LastEditTime: 2023-06-01 15:29:44
 */
import request from '@/utils/request'
import type { PermissionResponseData } from './type'

enum API {
  ALLPERMISSION_URL = '/admin/acl/permission',
}

export const reqAllPermission = () =>
  request.get<any, PermissionResponseData>(API.ALLPERMISSION_URL)
