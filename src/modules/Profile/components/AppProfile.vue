<script>
import { mapActions, mapState } from 'vuex'

export default {
	data() {
		return {
			user: {},
			SERVER_URL: import.meta.env.VITE_API_URL
		}
	},
	methods: {
		...mapActions({
			loadProfile: 'user/loadProfile'
		}),
		goEdit() {
			this.$router.push({ name: 'editProfile' })
		}
	},
	computed: {
		...mapState({
			userData: state => state.user.userData,
			userId: state => state.user.userId,
		}),
		isEmail() {
			return this.userData?.settings?.emailNotifications
		}
	},
	mounted() {
		if (this.userId) {
			this.loadProfile()
		}
	},
	watch: {
		userId() {
			this.loadProfile()
		}
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
						<img class="profile__img" :src="SERVER_URL + '/images/avatars/' + userData?.image">

					</div>
					<div class="profile__info">
						<h2 class="profile__name">{{ userData?.username }}</h2>
						<p class="profile__email">{{ userData?.email }}</p>
					</div>
				</div>
				<div class="profile__right">
					<div class="profile__address">
						<h3 class="profile__subtitle">Адрес доставки</h3>
						<p>{{ userData?.settings?.address }}</p>
					</div>
					<div class="profile__notifications">
						<h3 class="profile__subtitle">Уведомления</h3>
						<app-checkbox v-model="isEmail" :disabled="true">Email</app-checkbox>
					</div>
					<blue-button @click="goEdit" class="profile__btn">Редактировать</blue-button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
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

.hidden {
	opacity: 0;
	width: 0;
	height: 0;

}
</style>