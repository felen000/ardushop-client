<script>
import ProductEdit from '../modules/ProductEdit';
export default {
	components: {
		ProductEdit
	},
	methods: {
		showMessage(message) {
			this.$emit('showMessage', message)
		}
	},
	emits: {
		showMessage: null
	}
}
</script>

<template>
	<main class="main">
		<product-edit @show-message="showMessage"></product-edit>
	</main>
</template>

<style>
</style>