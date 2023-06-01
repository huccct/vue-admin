/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-06-01 15:21:59
 * @LastEditors: Huccct
 * @LastEditTime: 2023-06-01 17:17:44
 */
import request from '@/utils/request'
import type { MenuParams, PermissionResponseData } from './type'

enum API {
  ALLPERMISSION_URL = '/admin/acl/permission',
  ADDMENU_URL = '/admin/acl/permission/save',
  UPDATE_URL = '/admin/acl/permission/update',
  DELETEMENU_URL = '/admin/acl/permission/remove/',
}

export const reqAllPermission = () =>
  request.get<any, PermissionResponseData>(API.ALLPERMISSION_URL)

export const reqAddOrUpdateMenu = (data: MenuParams) => {
  if (data.id) {
    return request.put<any, any>(API.UPDATE_URL, data)
  } else {
    return request.post<any, any>(API.ADDMENU_URL, data)
  }
}

export const reqRemoveMenu = (id: number) =>
  request.delete<any, any>(API.DELETEMENU_URL + id)
