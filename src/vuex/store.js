import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  showNav: true,
  showDBG: true,
  showFooter: true,
  screenWidth: 0,
  screenHeight: 0,
  scrollTop: 0
}

const mutations = {
  // NAV 相关
  disableNav (state) {
    state.showNav = false
  },
  enableNav (state) {
    state.showNav = true
  },
  // 动态背景相关
  disableDBG (state) {
    state.showDBG = false
  },
  enableDBG (state) {
    state.showDBG = true
  },
  // Footer相关
  disableFooter (state) {
    state.showFooter = false
  },
  enableFooter (state) {
    state.showFooter = true
  },
  // screen 相关
  modifyScreenWidth (state, payload) {
    state.screenWidth = payload.screenWidth
  },
  modifyScreenHeight (state, payload) {
    state.screenHeight = payload.screenHeight
  },
  // scrollTop 相关
  modifyScrollTop (state, payload) {
    state.scrollTop = payload.scrollTop
  }
}

export default new Vuex.Store({
  state,
  mutations
})
