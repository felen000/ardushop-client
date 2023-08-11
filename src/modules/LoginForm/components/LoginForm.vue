<script>
import login from '../api/login.js'
export default {
	data() {
		return {
			email: '',
			password: '',
			isInvalid: false,
			message: '',
			isLoading: false
		}
	},
	emits: {
		hideModal: null
	},
	methods: {
		async login() {
			if (!this.email || !this.password) {
				this.message = 'Заполните все поля';
				return
			}
			this.isLoading = true
			let { message } = await login(this.email, this.password)

			if (message == 'ok') {
				this.isLoading = false
				this.hideModal()
				return
			}

			this.isLoading = false
			this.isInvalid = true
			this.message = message
		},
		hideModal() {
			this.$emit('hideModal')
		},
		toRegistr() {
			this.hideModal()
			this.$router.push({ name: 'registr' })
		},
		reseMessage() {
			this.message = ''
		}
	},
	watch: {
		username() {
			this.reseMessage()
		},
		password() {
			this.reseMessage()

		}
	}
}
</script>

<template>
	<h1 class="login__title">ArduShop</h1>
	<p class="login__subtitle">Войдите, чтобы начать покупки</p>

	<app-preloader v-if="isLoading"></app-preloader>
	<form v-else class="form">
		<app-input v-model="email" type="email" id="email" class="form__input">Почта</app-input>

		<app-input @keydown.enter="login" v-model="password" type="password" id="password" class="form__input">Пароль</app-input>

		<div class="message">
			{{ message }}
		</div>
		<blue-button @click="login" type="button" class="form__button">Войти</blue-button>
		<white-button @click="toRegistr" type="button" class="form__button">Регистрация</white-button>
	</form>
</template>

<style>
.login__title,
.login__subtitle {
	text-align: center;
}

.form__input {
	margin-bottom: 10px;
}


.form__button {
	width: 100%;
	margin-bottom: 10px;
}

.form__registr-button {
	width: 100%;
	background-color: #cccccc;
	color: #0d6efd;
}

.message {
	margin-bottom: 10px;
}
</style>