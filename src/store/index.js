import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isShowAddPost: false
  },
  getters: {
    isShowAddPost (state) {
      return state.isShowAddPost
    }
  },
  mutations: {
    set (state, { type, items }) {
      state[type] = items
    }
  },
  actions: {
    showAddPost ({ commit }, status) {
      commit('set', { type: 'isShowAddPost', items: status })
    }
  }
})

export default store
