import request from '@/utils/http'
/**
 * 预连接
 * @param data 预连接参数
 * @returns 预连接响应
 */
export function preConnect(userId: number) {
  return request.post<any>({
    url: '/ws/pre-connect?websocketId=' + userId
  })
}
