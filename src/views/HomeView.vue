<script>
import BestsellersCarousel from '../modules/BestsellersCarousel';
import AppProducts from '../modules/Products';

export default {
	components: {
		BestsellersCarousel,
		AppProducts,

	},
	data() {
		return {
			modalVisible: false
		}
	}
};
</script>

<template>
	<main>
		<bestsellers-carousel />
		<app-products />
	</main>
</template>
