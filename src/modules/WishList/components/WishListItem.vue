<script>
import removeFromList from '../api/removeFromList';
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
			SERVER_URL: import.meta.env.VITE_API_URL
		}
	},
	computed: {
		...mapState({
			userId: state => state.user.userId
		})
	},
	methods: {
		async removeFromWish() {
			let { message } = await removeFromList(this.userId, this.id)
			if (message == 'ok') {
				this.$emit('removeFromList', this.id)
			}
		},
		goProduct() {
			this.$router.push({ name: 'product', params: { id: this.id } })
		}
	},
	emits: {
		removeFromList: null,
	}
}
</script>

<template>
	<div class="wish-list-item">
		<div class="wish-list-item__outer-img">
			<img class="wish-list-item__img" :src="SERVER_URL + '/' + image" alt="alt" />
		</div>
		<div class="wish-list-item__text">
			<h3 class="wish-list-item__title" @click.stop="goProduct">{{ title }}</h3>
			<p class="wish-list-item__price">{{ price }}₽</p>
		</div>

		<heart-solid @click.stop="removeFromWish" />
	</div>
</template>

<style>
.wish-list-item {
	display: flex;
	gap: 10px;
	background-color: var(--grey);
	border-radius: 10px;
	margin-bottom: 15px;
	user-select: none;
	cursor: pointer;
}

.wish-list-item__img {
	width: 200px;
	height: 200px;
	align-items: center;
	object-fit: cover;
}

.wish-list-item {
	padding: 10px;
}

.wish-list-item__text {
	font-size: 1.3em;
	align-self: start;
	flex: 1 1 auto;
}

.wish-list-item__title:hover {
	text-decoration: underline;
}

.wish-list-item__count {
	align-self: center;
	display: flex;
	align-items: center;
	gap: 5px;
	font-size: 30px;
}

.wish-list-item__btn {
	align-self: flex-start;
}
</style>