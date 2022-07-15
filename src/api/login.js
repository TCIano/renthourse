import request from '@/util/request'
/**
 *
 * @param {Object} data //{username，password}
 * @returns Promise
 */
// 登录api
export const login = (data) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data
  })
}

/**
 *
 * @param {String} token //token
 * @returns
 */
// 用户信息api
export const info = (token) => {
  return request({
    url: '/user',
    headers: {
      authorization: token
    }
  })
}
