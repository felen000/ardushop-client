<script>
// import ProductCard from './ProductCard.vue';
import ProductCard from '../../../components/ProductCard.vue';
import ProductsFilters from './ProductsFilters.vue';
import fetchProducts from '../api/fetchProducts'
export default {
	components: {
		ProductCard,
		ProductsFilters
	},
	data() {
		return {
			products: [],
			type: 'all',
			sort: '0',
			unsortedProducts: []
		}
	},
	methods: {
		async loadProducts() {
			this.products = await fetchProducts()
		},
		sortProducts() {
			let unsortedProducts = this.filteredProducts;


			if (this.sort == '1') {
				return unsortedProducts.sort((a, b) => a.price - b.price)
			} else if (this.sort == '-1') {
				return unsortedProducts.sort((a, b) => b.price - a.price)
			} else {
				return unsortedProducts
			}

		}
	},
	mounted() {
		this.loadProducts()
	},
	computed: {
		filteredProducts() {
			let filteredProducts = this.type == 'all' ? this.products : this.products.filter(product => product.type == this.type)
			return filteredProducts
		},
		sortedProducts() {
			let productsToSort = [...this.filteredProducts];
			if (this.sort == '1') {
				return productsToSort.sort((a, b) => a.price - b.price)
			} else if (this.sort == '-1') {
				return productsToSort.sort((a, b) => b.price - a.price)
			}
			return this.unsortedProducts
		}
	},
	watch: {
		filteredProducts() {
			this.unsortedProducts = this.filteredProducts
		}
	}
}
</script>

<template>
	<section class="goods">
		<div class="container">
			<div class="goods__content">
				<products-filters @change-sort="this.sort = $event" @change-type="this.type = $event"></products-filters>
				<div class="product-cards">
					<h2 class="product-cards__title">Arduino</h2>
					<app-preloader v-if="products.length == 0"></app-preloader>
					<div v-else class="product-cards__body">
						<transition-group name="product-list">
							<product-card class="product-list-item" v-for="product in sortedProducts" :key="product._id"
								:id="product._id" :image="product.image" :title="product.title" :price="product.price"
								page="product"
								>Купить</product-card>
						</transition-group>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style>
h2 {
	margin-bottom: 15px;
}

.goods__content {
	display: flex;
	min-height: 560px;
}

.filters {
	flex: 1 1 20%;
}

.product-cards {
	flex: 1 1 80%;
}

.product-cards__body {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 10px;
}

.product-list-item {
	transition: all 0.8s ease;
}

.product-list-enter-from,
.product-list-leave-to {
	opacity: 0;
	transform: translateY(30px);
}

.product-list-leave-active {
	position: absolute;
}
</style>