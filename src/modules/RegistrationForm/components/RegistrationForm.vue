<script>
import registration from '../api/registration'

export default {
	data() {
		return {
			username: '',
			password: '',
			passwordCopy: '',
			email: '',
			isSeller: false,
			isInvalid: false,
			message: '',
			isLoading: false
		}
	},
	methods: {
		async registration() {
			if (!this.username || !this.email || !this.password || !this.passwordCopy) {
				this.message = 'Запоните все поля'
				return
			}

			if (this.passwordCopy != this.password) {
				this.message = 'Пароли не совпадают'
				return
			}

			this.isLoading = true
			let { message: responseMessage } = await registration(this.username, this.email, this.password, this.isSeller)

			this.isLoading = false
			if (responseMessage == 'ok') {
				this.$router.go(-1)
				return
			}

			this.isLoading = false
			this.isInvalid = true
			this.message = responseMessage
		},
		resetMessage() {
			this.message = ''
		}
	},
	watch: {
		username() {
			this.resetMessage()
		},
		password() {
			this.resetMessage()
		}
	}
}
</script>

<template>
	<h1 class="registration__title">ArduShop</h1>
	<app-preloader v-if="isLoading"></app-preloader>
	<form v-else class="form">
		<app-input class="form__input" v-model="username" type="text" id="username" required placeholder="Ivan Ivanov">Имя</app-input>

		<app-input class="form__input" v-model="email" type="email" id="email" required placeholder="example@mail.com">Почта</app-input>

		<app-input class="form__input" v-model="password" type="password" id="password" required placeholder="password1234">Пароль</app-input>

		<app-input @keydown.enter="registration" class="form__input" v-model="passwordCopy" type="password" id="password" required
			placeholder="password1234">Повторите пароль</app-input>

		<app-checkbox class="input" v-model="isSeller">Я продавец</app-checkbox>
		<div class="message">
			{{ message }}
		</div>
		<blue-button @click="registration" type="button" class="form__button">Регистрация</blue-button>
	</form>
</template>

<style scoped>
.registration__title {
	text-align: center;
}

.form__input {
	margin-bottom: 15px;
}

.form__button {
	width: 100%;
	margin-bottom: 10px;
}

.form__button:focus {
	outline: 3px solid var(--blue);
	outline-offset: 1px;
}

.message {
	margin-bottom: 10px;
}
</style>