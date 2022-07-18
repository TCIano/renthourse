import request from '@/util/request'

/**
 *
 // 根据id获取房屋信息
 * @param {String} id
 * @returns
 */
export const getHousesInfo = (id) => {
  return request({
    url: `/houses/${id}`
  })
}
