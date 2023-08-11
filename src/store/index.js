import { createStore } from "vuex";
import { userModule } from "./userModule";
const store = createStore({
  state () {
    return {
      isAuth: false,
			userId: '',
			products: []
    }
  },
  mutations: {
    setAuth (state, value) {
      state.isAuth = value
    },
    setUser (state, user) {
      state.user = user.id
    },
    removeUser (state) {
      state.user = {}
    },
  },
	modules: {
		user: userModule
	}
})

export default store