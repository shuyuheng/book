import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 书籍页面状态管理
import pageDataModule from './modules/pageDataModule'
export default new Vuex.Store({
  state: {
    webMoveEvent: ""
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    pageDataModule
  }
})
