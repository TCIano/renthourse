import request from '@/util/request'

export const collect = (token) => {
  return request({
    url: '/user/favorites',
    headers: {
      authorization: token
    }
  })
}
