import request from '@/util/request'

/**
 *  获取房屋收藏列表
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

/**
 *  房屋是否被收藏
 * @param {String} 房屋code
 * @returns
 */
export const isCollect = (id) => {
  return request({
    url: `/user/favorites/${id}`
  })
}
