<script>
import { RouterView } from 'vue-router';
import AppHeader from './modules/Header/AppHeader.vue';
import AppFooter from './modules/Footer/AppFooter.vue';
import LoginForm from './modules/LoginForm';
import checkAuth from './utilities/checkAuth';


export default {
	components: {
		RouterView,
		AppHeader,
		AppFooter,
		LoginForm
	},
	data() {
		return {
			modalVisible: false,
			messageVisible: false,
			message: ''
		}
	},
	methods: {
		checkAuth() {
			if (localStorage.getItem('token')) {
				checkAuth()
			}
		},
		showMessage(message) {
			this.messageVisible = true
			this.message = message
			setInterval(() => {
				this.messageVisible = false
				this.message = ''
			}, 5000)
		}
	},
	mounted() {
		this.checkAuth()
	}

};
</script>

<template>
	<div class="main-wrapper" @show-message="showMessage">
		<app-header @show-modal="modalVisible = true" />
		<router-view @show-message="showMessage" />
		<app-footer />
	</div>
	<app-modal v-model:show="modalVisible">
		<login-form @hide-modal="modalVisible = false" />
	</app-modal>
	<message-modal :show-message="messageVisible" :isError="message.error">{{ message.message }}</message-modal>
</template>

<style></style>
