import request from '@/utils/http'

/**
 * 获取客户分页列表
 */
export function fetchCustomerPage(params: Api.App.Customer.CustomerSearchParams) {
  return request.get<Api.App.Customer.CustomerPage>({
    url: '/app/customer/get-page',
    params
  })
}

/**
 * 获取客户详情
 */
export function fetchCustomerDetail(id: number) {
  return request.get<Api.App.Customer.CustomerItem>({
    url: `/app/customer/get-detail/${id}`
  })
}

/**
 * 修改客户
 */
export function fetchEditCustomer(data: Api.App.Customer.CustomerItem) {
  return request.post<Api.App.Customer.CustomerItem>({
    url: '/app/customer/update-profile',
    data
  })
}
/**
 * 删除客户
 */
export function fetchDeleteCustomer(id: number) {
  return request.post<Api.App.Customer.CustomerItem>({
    url: `/app/customer/delete/${id}`
  })
}

/**
 * 评论分页
 */
export function fetchCommentPage(params: Api.App.Comment.CommentSearchParams) {
  return request.get<Api.App.Comment.CommentPage>({
    url: '/app/forum/share/comment-page',
    params
  })
}
