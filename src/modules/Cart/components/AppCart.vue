<script>
import CartItem from './CartItem.vue';
import fetchCart from '../api/fetchCart'
import { mapState } from 'vuex'

export default {
	components: {
		CartItem
	},
	data() {
		return {
			cart: [],
			selectedProducts: []
		}
	},
	methods: {
		async loadCart() {
			this.cart = await fetchCart(this.userId)
		},
		deleteCartItem(id) {
			this.cart = this.cart.filter(product => product.productInfo._id != id)
		},
		selectItem(id) {
			let product = this.cart.find(item => item.productInfo._id == id)
			this.selectedProducts.push(product)
		},
		unselectItem(id) {
			this.selectedProducts = this.selectedProducts.filter(product => product.productInfo._id != id)
		},
		changeCount({ id, count }) {
			let product = this.cart.find(item => item.productInfo._id == id)
			product.count = count
		}
	},
	computed: {
		...mapState({
			isAuth: state => state.isAuth,
			userId: state => state.user.userId

		}),
		isCartEmpty() {
			return this.cart.length == 0
		},
		totalPrice() {
			return this.selectedProducts.reduce((accum, product) => {
				return accum + product.productInfo.price * product.count
			}, 0)
		}
	},
	watch: {
		userId() {
			if (this.userId) {
				this.loadCart()
			}
		}
	},
	mounted() {
		if (this.userId) {
			this.loadCart()
		}
	}
}
</script>

<template>
	<div class="container">
		<h1>Корзина</h1>
		<div class="cart">
			<div>
				<transition name="fade">
					<div v-if="!isAuth">Войдите чтобы начать покупки</div>
					<div v-else-if="isCartEmpty">Корзина пуста</div>
					<div v-else class="cart__items">
						<transition-group name="list">
							<cart-item class="list-item" v-for="product in cart" :key="product.productInfo?._id"
								:id="product.productInfo?._id" :image="product.productInfo?.image" :title="product.productInfo?.title"
								:price="product.productInfo?.price" :count="product.count" @delete-from-cart="deleteCartItem"
								@select-item="selectItem" @unselect-item="unselectItem" @change-count="changeCount" />
						</transition-group>
					</div>
				</transition>
			</div>
			<div class="payment">
				<div class="payment__buy">
					<p class="payment__price">{{ totalPrice }}₽</p>
					<blue-button class="payment__btn">Оплатить</blue-button>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.cart {
	display: grid;
	grid-template-columns: 3fr 1fr;
}

.payment__buy {
	background-color: var(--grey);
	width: 70%;
	margin: 0 auto;
	padding: 15px;
}

.payment__price {
	margin: 0 0 20px;
	font-size: 40px;
}

.payment__btn {
	width: 100%;
	padding: 20px;
	font-size: 25px;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.list-item {
	transition: all 0.8s ease;
}

.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(-30px);
}

.list-leave-active {
	position: absolute;
}
</style>