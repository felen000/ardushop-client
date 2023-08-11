import api from '../http';

export const userModule = {
  state: () => {
    return {
      userId: '',
      userData: {},
			userRole: ''
    };
  },
  getters: {},
  mutations: {
    setUserId(state, id) {
      state.userId = id;
    },
    setUserData(state, data) {
      state.userData = data;
    },
    removeUserData(state) {
			state.userRole = '';
      state.userData = '';
    },
    setUserRole(state, data) {
      state.userRole = data;
    },
  },
  actions: {
    async loadProfile({ state, commit }) {
     	let id = state.userId;
			let res = await api.get(`/user/${id}`)
			let userData = res.data
      commit('setUserData', userData);
    },
  },
  namespaced: true,
};
