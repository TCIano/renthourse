import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken } from '@/util'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储token
    user: getToken() || '',

    // 详细内容id
    detailId: ''
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
    }
  },
  actions: {},
  modules: {}
})
