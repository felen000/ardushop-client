<script>
import { EditProfile } from '../modules/Profile';
export default {
	components: {
		EditProfile
	},
	emits: {
		'showMessage': null
	},
	methods: {
		showMessage(mes) {
			this.$emit('showMessage', mes)
		}
	}
}
</script>

<template>
	<main class="main">
		<edit-profile @show-message="showMessage"></edit-profile>
	</main>
</template>

<style>

</style>