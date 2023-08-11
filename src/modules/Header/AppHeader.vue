<script>
import logout from './api/logout'
import { mapState } from 'vuex';

export default {
	data() {
		return {
			menuVisible: false,
			SERVER_URL: import.meta.env.VITE_API_URL
		}
	},
	emits: {
		showModal: null
	},
	computed: {
		...mapState({
			isAuth: state => state.isAuth,
			userData: state => state.user.userData,
			userRole: state => state.user.userRole
		})
	},
	methods: {
		goCart() {
			this.$router.push({ name: 'cart' })
		},
		goProfile() {
			this.$router.push({ name: 'profile' })
		},
		goHome() {
			this.$router.push({ name: 'home' })
		},
		goWish() {
			this.$router.push({ name: 'wish' })
		},
		goProducts() {
			this.$router.push({ name: 'products' })
		},
		toggleMenu() {
			this.menuVisible = !this.menuVisible
		},
		logout() {
			logout()
		}
	}
};
</script>

<template>
	<header class="header" v-if="$route.name != 'registr'">
		<div class="container">
			<nav class="nav">
				<div @click="goHome" class="header__logo">
					<img class="logo" src="/src/assets/images/arduino-seeklogo.com.svg" alt="logo">
					<div class="logo-text">Ardushop</div>
				</div>
				<div class="nav__right-block">
					<ul class="nav__list">
						<li class="nav__link">
							<heart-icon @click="goWish" />
						</li>
						<li class="nav__link">
							<cart-icon @click="goCart" />
						</li>
					</ul>
					<blue-button v-if="!isAuth" @click="$emit('showModal')">Войти</blue-button>
					<div class="profile" v-else @click="toggleMenu">
						<div class="profile__image">
							<img :src="`${SERVER_URL}/images/avatars/${userData.image}`" alt="">
						</div>
						<div class="caret"></div>
					</div>
				</div>
				<div class="profile__menu" :class="{ 'active': menuVisible }" v-if="isAuth">
					<ul class="profile__list" @click="toggleMenu">
						<li class="profile__link" @click="goProfile">Профиль</li>
						<li class="profile__link" @click="goProducts" v-if="userRole == 'SELLER'">Мои товары</li>
						<li class="profile__link logout" @click="logout">Выйти</li>
					</ul>
				</div>
			</nav>
		</div>
	</header>
</template>

<style scoped>
.header {
	position: sticky;
	top: 0;
	z-index: 10;
	background-color: var(--grey);
	padding: 10px 0;
}

.header__logo {
	display: flex;
	align-items: center;
	gap: 10px;
	cursor: pointer;
}

.logo-text {
	font-size: 1.2em;
}

.nav {
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 2;
	background-color: var(--grey);
}

.nav__right-block {
	align-items: center;
	display: flex;
}

.nav__list {
	display: flex;
	justify-content: space-between;
	margin: 0;
}

.nav__link {
	list-style: none;
	margin-right: 15px;
	z-index: 2;
}

.profile {
	display: flex;
	gap: 5px;
	z-index: 2;
	align-items: center;
	cursor: pointer;
}

.profile__image img {
	border-radius: 50%;
	width: 40px;
	height: 40px;
	object-fit: cover;
}

.profile__menu {
	position: absolute;
	background-color: #fff;
	border-radius: 5px;
	top: -100px;
	right: 0;
	opacity: 0;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
	-webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
	transition-duration: 0.3s;

}

.profile__menu.active {
	opacity: 100%;
	top: 120%;
}

.profile__list {
	margin: 0;
	padding: 5px 10px;
	list-style: none;
	color: #959494;
}

.profile__link {
	margin-bottom: 5px;
	transition-duration: 0.3s;
	cursor: pointer;
}

.profile__link:hover {
	color: #000;
}

.logout {
	color: rgba(255, 0, 0, 0.373);
}

.logout:hover {
	color: red;
}

.caret {
	display: inline-block;
	width: 0;
	height: 0;
	margin-left: 2px;
	vertical-align: middle;
	border-top: 4px dashed;
	border-top: 4px solid\9;
	border-right: 4px solid transparent;
	border-left: 4px solid transparent;
}
</style>
