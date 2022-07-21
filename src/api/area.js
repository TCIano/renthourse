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

/**
 *  获取热门城市
 * @returns
 */
export const getHotCitys = () => {
  return request({
    url: '/area/hot'
  })
}

/**
 * 获取子级列表城市
 * @param {String} id 城市id
 * @returns
 */
export const getChildrenCity = (id) => {
  return request({
    url: '/area',
    params: {
      id
    }
  })
}

/**
 * 用关键词查询小区信息
 * @param {String} name 关键字
 * @param {} id 当前城市id
 * @returns
 */
export const getSearchSuggestions = (name, id) => {
  return request({
    url: '/area/community',
    params: {
      name,
      id
    }
  })
}
