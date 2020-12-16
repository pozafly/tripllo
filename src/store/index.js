import Vue from 'vue';
import Vuex from 'vuex';
import { loginUser, validId, signup } from '@/api/auth.js';
import { saveAuthToCookie, saveUserToCookie } from '@/utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    username: '',
  },
  getters: {},
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
    clearToken(state) {
      state.token = '';
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      console.log(data);
      commit('setToken', data.data.token);
      commit('setUsername', data.data.userName);
      saveAuthToCookie(data.data.token);
      saveUserToCookie(data.data.userName);
    },
    async VALIDID({ commit }, userId) {
      return await validId(userId);
    },
    async SIGNUP({ commit }, userData) {
      return await signup(userData);
    },
  },
});
