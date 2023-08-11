<script>
export default {
	methods: {
		goHome() {
			this.$router.push({ name: 'home' })
			this.$router
		}
	}
};
</script>

<template>
	<footer class="footer" v-if="$route.name != 'registr'">
		<div class="container">
			<div class="footer__content">

				<div class="footer__logo">
					<img class="logo" src="/src/assets/images/arduino-seeklogo.com.svg" alt="Logo" />
				</div>


				<p>Copyright © 2022-2023 ArduShop. Все права защищены.</p>

			</div>
		</div>
	</footer>
</template>

<style>
.footer {
	padding: 15px 0;
	background-color: var(--grey);
}

.footer__content {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>