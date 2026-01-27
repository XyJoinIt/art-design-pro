import { AppRouteRecord } from '@/types/router'
import request from '@/utils/http'

// 获取用户列表
export function fetchGetUserList(params: Api.SystemManage.UserSearchParams) {
  return request.get<Api.SystemManage.UserList>({
    url: '/sys/user/page',
    params
  })
}
/**
 * 新增用户
 * @param params
 * @returns
 */
export function fetchAddUser(data: Api.SystemManage.UserListItem) {
  return request.post({
    url: '/sys/user/add',
    data
  })
}

/**
 * 编辑用户
 * @param params
 * @returns
 */
export function fetchEditUser(data: Api.SystemManage.UserListItem) {
  return request.post({
    url: '/sys/user/edit',
    data
  })
}

/**
 * 删除用户
 * @param id
 * @returns
 */
export function fetchDeleteUser(data: { id: number }) {
  return request.post({
    url: `/sys/user/delete`,
    data
  })
}

/**
 * 获取角色分页
 * @param params
 * @returns
 */
export function fetchGetRoleList(params: Api.SystemManage.RoleSearchParams) {
  return request.get<Api.SystemManage.RoleList>({
    url: '/sys/role/page',
    params
  })
}

/**
 * 角色编辑
 * @param params
 * @returns
 */
export function fetchEditRole(data: Api.SystemManage.RoleListItem) {
  return request.post({
    url: '/sys/role/edit',
    data
  })
}

/**
 * 角色新增
 * @param data
 * @returns
 */
export function fetchAddRole(data: Api.SystemManage.RoleListItem) {
  return request.post({
    url: '/sys/role/add',
    data
  })
}

/**
 * 角色删除
 * @param id
 * @returns
 */
export function fetchDeleteRole(id: number) {
  return request.post({
    url: `/sys/role/delete`,
    data: {
      id
    }
  })
}

/**
 * 角色分配用户
 * @param data
 * @returns
 */
export function fetchAssignUserToRole(data: any) {
  return request.post({
    url: '/sys/role/assignUser',
    data
  })
}

/**
 * 获取菜单列表
 * @param id
 * @returns
 */
export function fetchGetMenuList() {
  return request.get<AppRouteRecord[]>({
    url: `/sys/menu/list`
  })
}
