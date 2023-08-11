<script>
import WishListItem from './WishListItem.vue';
import fetchList from '../api/fetchList'
import { mapState } from 'vuex'

export default {
	components: {
		WishListItem
	},
	data() {
		return {
			wishList: [],
		}
	},
	methods: {
		async loadWishList() {
			this.wishList = await fetchList(this.userId)
		},
		removeItem(id) {
			this.wishList = this.wishList.filter(item => item._id != id)
		}
	},
	computed: {
		...mapState({
			isAuth: state => state.isAuth,
			userId: state => state.user.userId

		}),
		isListEmpty() {
			return this.wishList.length == 0
		},
	},
	watch: {
		userId() {
			if (this.userId) {
				this.loadWishList()
			}
		}
	},
	mounted() {
		if (this.userId) {
			this.loadWishList()
		}
	}
}
</script>

<template>
	<div class="container">
		<h1>Список желаний</h1>
		<div class="wish-list">
			<div>
				<transition name="fade">
					<div v-if="!isAuth">Войдите чтобы начать</div>
					<div v-else-if="isListEmpty">Вы ещё ничего не добавили</div>
					<div v-else class="wish-list__items">
						<transition-group name="list">
							<wish-list-item class="list-item" v-for="product in wishList" :key="product?._id" :id="product?._id"
								:image="product?.image" :title="product?.title" :price="product?.price" @remove-from-list="removeItem" />
						</transition-group>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<style>
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