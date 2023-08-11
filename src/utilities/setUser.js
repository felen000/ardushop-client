import store from '../store';

export default function (user, token) {
  localStorage.setItem('token', token);
  store.commit('setAuth', true);
  store.commit('user/setUserRole', user.roles[0]);
  store.commit('user/setUserId', user.id);
  store.dispatch('user/loadProfile');
}
