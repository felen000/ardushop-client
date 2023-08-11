<script>
import { mapState } from 'vuex'
import updateProfile from '../api/updateProfile'
export default {
	data() {
		return {
			username: '',
			email: '',
			emailNotifications: false,
			address: '',
			file: '',
			src: 'kkkkk',
			SERVER_URL: import.meta.env.VITE_API_URL
		}
	},
	methods: {
		chooseFile() {
			this.$refs.input.click()
		},
		addFile(e) {
			this.file = e.target.files[0]
			console.log(e.target.files)
			this.src = URL.createObjectURL(this.file)
		},
		async updateProfile() {
			let updatedUserData = {
				username: this.username,
				email: this.email,
				settings: {
					emailNotifications: this.emailNotifications,
					address: this.address,
				}
			}

			let message = await updateProfile(this.userId, this.file, updatedUserData)
			this.$emit('showMessage', message)
			console.log(message)
		}
	},
	computed: {
		...mapState({
			userData: state => state.user.userData,
			userId: state => state.user.userId
		}),
	},
	mounted() {
		this.username = this.userData.username
		this.email = this.userData.email
		this.emailNotifications = this.userData.settings.emailNotifications
		this.address = this.userData.settings.address
	},
	emits: {
		showMessage: null
	}
}
</script>

<template>
	<div class="container">
		<div class="profile">
			<h1 class="profile__title">Профиль</h1>
			<div class="profile__grid">
				<div class="profile__header">
					<div class="profile__img-wrapper">
						<img v-if="!file" class="profile__img" :src="SERVER_URL + '/images/avatars/' + userData.image" alt="">
						<img v-else class="profile__img" :src="src">
						<pencil-icon class="pencil" @click="chooseFile"></pencil-icon>
						<input @change="addFile" type="file" ref="input" class="hidden" accept="image/*">
					</div>
					<div class="profile__info">
						<app-input v-model="username">Имя</app-input>
						<app-input v-model="email">Почта</app-input>
					</div>
				</div>
				<div class="profile__right">
					<div class="profile__address">
						<h3 class="profile__subtitle">Адрес доставки</h3>
						<app-input v-model="address"></app-input>
					</div>
					<div class="profile__notifications">
						<h3 class="profile__subtitle">Уведомления</h3>

						<app-checkbox v-model="emailNotifications" :disabled="false">Email</app-checkbox>
					</div>
					<blue-button class="profile__btn" @click="updateProfile">Сохранить</blue-button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.profile__img-wrapper {
	position: relative;
}

.pencil {
	position: absolute;
	bottom: 10%;
	right: 0;
}

.profile__title {
	margin-bottom: 40px;
}

.profile__grid {
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 100%;
	gap: 30px;
	margin-top: auto;
}

.profile__header {
	justify-self: start;
	align-self: start;
	display: flex;
	align-items: center;
	column-gap: 20px;
}

.profile__right {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	column-gap: 20px;
}

.profile__img {
	align-self: center;
	border-radius: 50%;
	width: 100px;
	height: 100px;
	margin-bottom: 15px;
	object-fit: cover;
}

.profile__subtitle {
	margin-bottom: 10px;
}

.profile__orders .profile__subtitle {
	margin-bottom: 0;
}

.profile__orders {
	align-self: start;
	border-radius: 5px;
	cursor: pointer;
	padding: 5px 5px 5px 0;
	transition-duration: 0.3s;
	display: flex;
	justify-content: space-between;
}

.profile__orders:hover {
	background-color: var(--grey);
	text-decoration: underline;
}

.profile__btn {
	grid-column: 2/3;
	align-self: end;
	justify-self: end;
}
</style>