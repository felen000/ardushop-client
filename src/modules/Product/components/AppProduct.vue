<script>
import fetchProduct from '../api/fetchProduct';
import addToCart from '../api/addToCart';
import checkCart from '../api/checkCart';
import addToWishList from '../api/addToWishList';
import removeFromWish from '../api/removeFromWish';
import checkWish from '../api/checkWish'
import ProductTemplate from '../../../components/ProductTemplate.vue';

export default {
	components: {
		ProductTemplate
	},
	data() {
		return {
			product: {},
			isInCart: false,
			id: this.$route.params.id,
			SERVER_URL: import.meta.env.VITE_API_URL,
			isAddedToCart: false,
			isAddedToWish: false,
			isInWish: false
		}
	},
	methods: {
		async getProduct() {
			this.product = await fetchProduct(this.id)
		},
		async addToCart() {
			let { message } = await addToCart(this.userId, this.id)
			console.log(message)

			if (message == 'ok') {
				this.isAddedToCart = true
			}
		},
		async addToWish() {
			let { message } = await addToWishList(this.userId, this.id)
			if (message == 'ok') {
				this.isAddedToWish = true
			}
		},
		async removeFromWish() {
			let { message } = await removeFromWish()

			if (message == 'ok') {
				this.isInWish = false
			}
		},
		async checkCart() {
			let { isInCart } = await checkCart(this.id, this.userId)
			this.isInCart = isInCart
		},
		async checkWish() {
			console.log(this.id, this.userId)
			let { inList } = await checkWish(this.userId, this.id)
			this.isInWish = inList
		}
	},
	computed: {
		userId() {
			return this.$store.state.user.userId
		}
	},
	mounted() {
		this.getProduct()
		if (this.userId) {
			this.checkCart()
			this.checkWish()
		}
	},
	watch: {
		userId(newValue) {
			if (newValue) {
				this.checkCart()
				this.checkWish()
			}
		}
	}
}
</script>

<template>
	<product-template>
		<template v-slot:header>
			<h1 class="product__title">{{ product.title }}</h1>
			<heart-solid v-if="isInWish || isAddedToWish" @click="removeFromWish" />
			<heart-icon v-else @click="addToWish" />
		</template>
		<template v-slot:left>
			<img class="product__img" :src="`${SERVER_URL}/${product.image}`" alt="Arduino Uno">
			<p class="product__text">
				{{ product.description }}
			</p>
		</template>
		<template v-slot:right>
			<div class="product__buy">
				<p class="product__price">{{ product.price }}₽</p>
				<template v-if="isInCart">Товар уже в корзине!</template>
				<white-button v-else-if="isAddedToCart" class="product__btn">Добавлено!</white-button>
				<blue-button v-else @click="addToCart" class="product__btn">Добавить в корзину</blue-button>
			</div>
		</template>
	</product-template>
</template>

<style scoped>
.product__img {
	width: 100%;
	height: auto;
	border-radius: 5px;
	object-fit: cover;
	margin-bottom: 20px;
}

.product__text {
	line-height: 1.2;
	margin-bottom: 20px;
	font-size: 1.2rem;
}

.product__buy {
	width: 70%;
	background-color: var(--grey);
	padding: 15px;
}

.product__price {
	margin: 0 0 20px;
	font-size: 40px;
}

.product__btn {
	width: 100%;
	padding: 20px;
	font-size: 25px;
}
</style>