import api from "../../../http"
import store from "../../../store";
export default function () {
	try {
		api.post('/auth/logout');
		localStorage.removeItem('token')
		store.commit('setAuth', false);
		store.commit('user/removeUserData')
		console.log('logged out');
	} catch (error) {
		console.log(error);
	}
}
