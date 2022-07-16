import request from '@/util/request'

/**
 *
 * @param {Strig} token
 * @returns
 */
export const collect = () => {
  return request({
    url: '/user/favorites'
    // headers: {
    //   authorization: token
    // }
  })
}
