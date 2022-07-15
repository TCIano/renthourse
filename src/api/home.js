import request from '@/util/request'

// 轮播图api
export const getSwiper = () => {
  return request({
    url: '/home/swiper'
  })
}
