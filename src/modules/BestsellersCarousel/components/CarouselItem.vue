<script>
export default {
	props: {
		image: String,
		title: String,
		id: String
	},
	data() {
		return {
			VITE_API_URL: import.meta.env.VITE_API_URL
		}
	},
	methods: {
		toProduct() {
			this.$router.push({ name: 'product', params: { id: this.id } })
		}
	}
}
</script>

<template>
	<div @click="toProduct" class="carousel-item">
		<img :src="VITE_API_URL + '/' + image" class="image" alt="Arduino Nano" />
		<div class="content">
			<h3>{{ title }}</h3>
		</div>
	</div>
</template>

<style scoped>
.carousel-item {
	width: 100%;
	border: 1px solid #ccc;
	border-radius: 5px;
}

.carousel-item:hover {
	cursor: pointer;
}

.image {
	width: 100%;
	height: 300px;
	object-fit: cover;
}

.content {
	padding: 15px;
}

h3 {
	margin: 0;
}
</style>