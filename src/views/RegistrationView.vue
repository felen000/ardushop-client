<script>
import RegistrationForm from '../modules/RegistrationForm';
export default {
	components: {
		RegistrationForm
	}
}
</script>

<template>
	<main class="main">
		<div class="wrapper">
			<div class="content">

				<registration-form></registration-form>
			</div>
		</div>
	</main>
</template>


<style scoped>
.main {
	background: url('/src/assets/images/reg_bg.jpg') no-repeat;
	background-size: cover;
}
.wrapper {
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background-color: rgba(0, 0, 0, .3);
	display: flex;
	align-items: center;
	justify-content: center;
}

.content {
	background-color: #ffffff;
	padding: 15px;
	border-radius: 5px;
	min-width: 395px;
}
</style>