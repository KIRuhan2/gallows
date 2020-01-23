import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkTheme: false,
    frase: 'Hello World!'
  },
  mutations: {
    changeTheme (state) {
      state.darkTheme = !state.darkTheme
    },
    setDarkTheme (state) {
      state.darkTheme = true
    },
    setLightTheme (state) {
      state.darkTheme = false
    }
  },
  actions: {
  },
  modules: {
  }
})
