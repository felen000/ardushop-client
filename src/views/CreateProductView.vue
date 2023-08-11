<script>
import ProductCreate from '../modules/ProductCreate';
export default {
	components: {
		ProductCreate
	},
	emits: {
		'showMessage': null
	},
	methods: {
		showMessage(message) {
			this.$emit('showMessage', message)
		}
	}
}
</script>

<template>
<main>
	<product-create @show-message="showMessage"></product-create>
</main>
</template>

<style>

</style>