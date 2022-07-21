import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken } from '@/util'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储token
    user: getToken() || '',

    // 详细内容id
    detailId: localStorage.getItem('detailId'),
    // 城市id
    cityId: localStorage.getItem('cityId'),
    // 当前选中城市
    currentCity: localStorage.getItem('currentCity'),
    // 选中的当前小区
    currentCommityId: ''
  },
  getters: {},
  mutations: {
    setUser (state, payload) {
      state.user = payload
      // 把vuex中的token存储到token
      setToken(payload)
    },
    getDetailId (state, payload) {
      state.detailId = payload
      localStorage.setItem('detailId', payload)
    },
    setCityId (state, payload) {
      state.cityId = payload
      localStorage.setItem('cityId', payload)
    },
    setCurrentCity (state, payload) {
      state.currentCity = payload
      localStorage.setItem('currentCity', payload)
    },
    setcurrentCommityId (state, payload) {
      state.currentCommityId = payload
      // localStorage.setItem('currentCommityId', payload)
    }
  },
  actions: {},
  modules: {}
})
