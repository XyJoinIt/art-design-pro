declare namespace Api {
  /** 通用类型 */
  namespace Common {
    /** 分页参数 */
    interface PaginationParams {
      /** 当前页码 */
      current: number
      /** 每页条数 */
      size: number
      /** 总条数 */
      total: number
    }

    /** 通用搜索参数 */
    type CommonSearchParams = Pick<PaginationParams, 'current' | 'size'>

    /** 分页响应基础结构 */
    interface PaginatedResponse<T = any> {
      records: T[]
      current: number
      size: number
      total: number
    }

    /**  租户基础结构*/
    interface TenantBase extends BaseEntity {
      tenantId?: number
    }

    /** 基础结构*/
    interface BaseEntity {
      id?: number
      CreateTime?: string
      CreateUserId?: number
      UpdateTime?: string
      UpdateUserId?: number
      Remark?: string
    }
  }

  /** 认证类型 */
  namespace Auth {
    /** 登录参数 */
    interface LoginParams {
      account: string
      password: string
    }

    /** 登录响应 */
    interface LoginResponse {
      accessToken: string
      refreshToken: string
    }

    /** 用户信息 */
    interface UserInfo {
      buttons: string[]
      roles: string[]
      userId: number
      account: string
      email: string
      avatar?: string
    }
  }

  /** 系统管理类型 */
  namespace SystemManage {
    /** 用户列表 */
    type UserList = Api.Common.PaginatedResponse<UserListItem>

    /** 用户列表项 */
    interface UserListItem extends Api.Common.TenantBase {
      account?: string
      nickName?: string
      password?: string
      name?: string
      phone?: string
      status?: number
      email?: string
      lastLoginTime?: string
    }

    /** 用户搜索参数 */
    type UserSearchParams = Partial<
      Pick<UserListItem, 'id' | 'account' | 'userPhone'> & Api.Common.CommonSearchParams
    >

    /** 角色列表 */
    type RoleList = Api.Common.PaginatedResponse<RoleListItem>

    /** 角色列表项 */
    interface RoleListItem {
      id: number
      name: string
      code: string
      remark?: string
    }

    /** 角色搜索参数 */
    type RoleSearchParams = Partial<
      Pick<RoleListItem, 'roleId' | 'roleName' | 'roleCode' | 'description' | 'enabled'> &
        Api.Common.CommonSearchParams
    >
  }

  /** app应用 */
  namespace App {
    namespace Customer {
      /** 客户列表 */
      type CustomerPage = Api.Common.PaginatedResponse<CustomerItem>

      /** 客户列表项 */
      interface CustomerItem extends Api.Common.TenantBase {
        id: number
        phone: string
        avatar?: string
        backgroundImage?: string
        nickName?: string
        gender?: number
        signature?: string
        region?: string
        email?: string
        birthDay?: string
        status?: number
      }

      /** 客户搜索参数 */
      type CustomerSearchParams = Partial<
        Pick<CustomerItem, 'phone' | 'nickName' | 'startTime' | 'endTime'> &
          Api.Common.CommonSearchParams
      >
    }

    namespace Comment {
      /** 评论列表 */
      type CommentPage = Api.Common.PaginatedResponse<CommentItem>

      /** 评论列表项 */
      interface CommentItem extends Api.Common.TenantBase {
        id: number
        userId: number
        parentId?: number
        userName?: string
        userAvatar?: string
        content?: string
        createTime?: string
      }

      /** 评论搜索参数 */
      type CommentSearchParams = Partial<
        Pick<CommentItem, 'userId' | 'startTime' | 'endTime'> & Api.Common.CommonSearchParams
      >
    }
  }
}
