<script>
import removeFromCart from '../api/removeFromCart';
import setProductCount from '../api/setProductCount';
import { mapState } from 'vuex'

export default {
	props: {
		id: String,
		image: String,
		title: String,
		price: Number,
		count: Number
	},
	data() {
		return {
			checked: false,
			productCount: this.count,
			SERVER_URL: import.meta.env.VITE_API_URL
		}
	},
	computed: {
		...mapState({
			userId: state => state.user.userId
		}),
	},
	methods: {
		async removeFromCart() {
			await removeFromCart(this.userId, this.id)
			this.$emit('deleteFromCart', this.id)
		},
		increaseCount() {
			this.productCount++
		},
		decreaseCount() {
			if (this.productCount > 1) {
				this.productCount--
			}
		},
		setProductCount() {
			setProductCount(this.userId, this.id, this.productCount)
		},
		goProduct() {
			this.$router.push({ name: 'product', params: { id: this.id } })
		}
	},
	emits: {
		deleteFromCart: null,
		selectItem: null,
		unselectItem: null,
		changeCount: null
	},
	watch: {
		productCount() {
			this.setProductCount()
			this.$emit('changeCount', { id: this.id, count: this.productCount })
		},
		checked(checked) {
			if (checked) {
				this.$emit('selectItem', this.id)
			} else {
				this.$emit('unselectItem', this.id)
			}
		}
	}
}
</script>

<template>
	<div class="cart-item" @click="checked = !checked">
		<input type="checkbox" v-model="checked" class="cart-item__check">
		<div class="cart-item__outer-img">
			<img class="cart-item__img" :src="SERVER_URL + '/' + image" alt="alt" />
		</div>
		<div class="cart-item__text">
			<h3 class="cart-item__title" @click.stop="goProduct">{{ title }}</h3>
			<p class="cart-item__price">{{ price }}₽</p>
		</div>
		<div class="cart-item__count" @click.stop>
			<div class="decrease" @click.stop="decreaseCount">-</div>
			<div class="count">{{ productCount }}</div>
			<div class="increase" @click.stop="increaseCount">+</div>
		</div>
		<delete-button @click.stop="removeFromCart" />
	</div>
</template>

<style>
.cart-item {
	display: flex;
	gap: 10px;
	background-color: var(--grey);
	border-radius: 10px;
	margin-bottom: 15px;
	user-select: none;
	cursor: pointer;
}

.cart-item__img {
	width: 100px;
	height: 100px;
	align-items: center;
	object-fit: cover;
}

.cart-item {
	padding: 10px;
}

.cart-item__text {
	align-self: start;
	flex: 1 1 auto;
}

.cart-item__title:hover {
	text-decoration: underline;
}

.cart-item__count {
	align-self: center;
	display: flex;
	align-items: center;
	gap: 5px;
	font-size: 30px;
}

.increase,
.decrease {
	font-size: 40px;
	padding: 10px;
	border-radius: 5px;
}

.increase:hover,
.decrease:hover {
	background-color: var(--blue);
	color: #ffffff;
}

.increase:active,
.decrease:active {
	transform: scale(.95);
}

.cart-item__btn {
	align-self: flex-start;
}

.remove-btn {
	border-radius: 5px;
	padding: 10px;
}

.remove-btn:hover {
	color: #ffffff;
	background-color: var(--blue);
}

.remove-btn:active {
	transform: scale(.95);
}
</style>