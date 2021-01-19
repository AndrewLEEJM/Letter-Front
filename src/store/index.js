import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    imgList: [],
  },
  mutations: {
    init(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.imgList = payload.map((n) => n.slice(2));
    },
  },
  actions: {
    init({ commit }, payload) {
      commit('init', payload);
    },
  },
  getters: {
    imgList: (state) => state.imgList,
  },
  modules: {
  },
});
