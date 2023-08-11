<script>
export default {
	data() {
		return {
			SERVER_URL: import.meta.env.VITE_API_URL
		}
	},
	props: {
		title: String,
		image: String,
		price: Number,
		id: String,
		page: String
	},
	methods: {
		toProduct() {
			this.$router.push({ name: this.page, params: { id: this.id } })
		}
	}
};
</script>

<template>
	<div class="card">
		<img :src="`${SERVER_URL}/${image}`" class="card__img" :alt="title" />
		<div class="card__body">
			<div class="price">
				{{ price }}₽
			</div>
			<h3 class="card__title">{{ title }}</h3>
			<blue-button class="card__btn" @click="toProduct">
				<slot></slot>
			</blue-button>
		</div>
	</div>
</template>

<style>
.card {
	border: 1px solid #cccccc;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
}

.card__body {
	display: flex;
	flex-direction: column;
	padding: 5px;
	flex-grow: 1;
}

.card__img {
	height: 150px;
	width: 100%;
	object-fit: cover;
}

.card__title {
	margin: 0 0 5px;
}

.price {
	font-size: 20px;
	margin-bottom: 5px;
}

.card__btn {
	margin-top: auto;
}
</style>