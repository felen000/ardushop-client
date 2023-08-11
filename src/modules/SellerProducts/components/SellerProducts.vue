<script>
import ProductCard from '../../../components/ProductCard.vue';
import fetchProducts from '../api/fetchProducts.js'
import { mapState } from 'vuex';
export default {
	components: {
		ProductCard
	},
	data() {
		return {
			products: []
		}
	},
	methods: {
		async loadProducts() {
			this.products = await fetchProducts(this.sellerId)
		},
		goProductCreate() {
			this.$router.push({name: 'productCreate'})
		}
	},
	computed: {
		...mapState({
			sellerId: state => state.user.userId
		})
	},
	mounted() {
		if (this.sellerId) {
			this.loadProducts()
		}
	},
	watch: {
		sellerId() {
			this.loadProducts()
		}
	}
}
</script>

<template>
	<div class="container">
		<h1>Мои товары</h1>
		<div class="products">

			<transition-group name="list">
				<product-card v-for="product in products" :key="product._id" :id="product._id" :title="product.title"
					:image="product.image" :price="product.price" page="productEdit">Редактировать</product-card>
				<div class="add-card" @click="goProductCreate">
					<p>+</p>
					<p>Добавить товар</p>
				</div>
			</transition-group>

		</div>
	</div>
</template>

<style>
.products {
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(5, 1fr);
}

.add-card {
	border-radius: 5px;
	border: 3px dashed #ccc;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	color: #ccc;
	transition-duration: 0.3s;
	font-size: 20px;
}

.add-card:hover {
	cursor: pointer;
	border-color: #939393;
	color: #939393;
}

.add-card p:first-child {
	font-size: 30px;
}
</style>