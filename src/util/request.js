import axios from 'axios'
import store from '@/store'
const request = axios.create({
  baseURL: 'http://liufusong.top:8080',
  timout: 3000
})
// 请求拦截器
request.interceptors.request.use(
  // 每次请求的网络配置
  (config) => {
    const token = store.state.user
    if (token) {
      config.headers.Authorization = token
    }
    console.log(config)
    return config
  },
  // 请求失败的fanhui
  (error) => {
    return Promise.reject(error)
  }
)

export default request
