import request from '@/util/request'

/**
 *  获取城市列表
 * @param {Number} 1获取城市数据 2获取城市下区的数据
 * @returns
 */
export const getCityList = (level) => {
  return request({
    url: '/area/city',
    params: {
      level
    }
  })
}

/**
 *  根据城市名称查询该城市信息
 * @param {String} id
 * @returns
 */
export const getAreaInfo = (name) => {
  return request({
    url: '/area/info',
    params: {
      name
    }
  })
}
