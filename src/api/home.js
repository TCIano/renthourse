import request from '@/util/request'

/**
 *
 // 轮播图api
 * @returns
 */
export const getSwiper = () => {
  return request({
    url: '/home/swiper'
  })
}

/**
 * 租房小組
 * @param {String} 当前城市id
 * @returns
 */
export const getHouseGroup = (area) => {
  return request({
    url: '/home/groups',
    params: {
      area
    }
  })
}
