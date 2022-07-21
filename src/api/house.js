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

/**
 * 查询房屋具体信息
 * @param {String} cityId
 * @returns
 */
export const getHousesList = (cityId) => {
  return request({
    url: '/houses',
    params: {
      cityId
    }
  })
}

/**
 * 发布房源所需要的条件
 * @returns Promise
 */
export const PublishHouseCondition = () => {
  return request({
    url: '/houses/params'
  })
}

/**
 *  获取房屋查询条件
 * @param {String} id 城市id
 * @returns
 */
export const getAeraHouses = (id) => {
  return request({
    url: '/houses/condition',
    params: {
      id
    }
  })
}
