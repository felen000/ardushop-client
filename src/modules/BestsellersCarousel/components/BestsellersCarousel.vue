<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import CarouselItem from './CarouselItem.vue'
import fetchBestsellers from '../api/fetchBestsellers.js'

export default {
	data() {
		return {
			products: []
		}
	},
	components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
		CarouselItem
	},
	methods: {
		async loadBestsellers() {
			this.products = await fetchBestsellers()
		}
	},
	mounted() {
		this.loadBestsellers()
	}
}
</script>
<template>
	<section>
		<div class="container">
			<h2>Популярное</h2>
			<app-preloader v-if="products.length == 0"></app-preloader>
			<carousel v-else :autoplay="5000" :items-to-show="1" :wrap-around="true">
				<slide v-for="product in products" :key="product._id">
					<carousel-item :image="product.image" :title="product.title" :id="product._id"/>
				</slide>

				<template #addons>
					<navigation />
					<pagination />
				</template>
			</carousel>
		</div>
	</section>
</template>
