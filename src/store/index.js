import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 书籍页面状态管理
import pageDataModule from './modules/pageDataModule'
export default new Vuex.Store({
  state: {
    playEl: null,
    // 音量
    volume: 1,
  },
  mutations: {
    setGlobalPlayEl(state, el) {
      if (state.playEl) {
        // 暂停播放元素
        state.playEl.pause && state.playEl.pause()
      }
      state.playEl = el
      if (el && state.playEl.volume) state.playEl.volume = state.volume;
    },
    setVolume(state, type) {
      let num = state.volume * 100
      if (type == 'minish') {
        // 减小
        num -= 5
      } else if (type == 'add') {
        // 增大
        num += 5
      }
      if (num > 100) num = 100
      else if (num <= 0) num = 1
      let volume = (num / 100).toFixed(2)
      if (state.volume == volume) return
      state.volume = volume
      if (state.playEl && state.playEl.volume) state.playEl.volume = state.volume;
    },
  },
  actions: {
  },
  modules: {
    pageDataModule
  }
})
