<script>
import createProduct from '../api/createProduct'
import { mapState } from 'vuex'
import ProductTemplate from '../../../components/ProductTemplate.vue'

export default {
	components: {
		ProductTemplate
	},
	data() {
		return {
			SERVER_URL: import.meta.env.VITE_API_URL,
			src: '',
			image: '',
			title: '',
			price: 0,
			description: '',
			type: '',
			categories: []
		}
	},
	methods: {
		chooseFile() {
			this.$refs.input.click()
		},
		addFile(e) {
			this.image = e.target.files[0]
			console.log(e.target.files)
			this.src = URL.createObjectURL(this.image)
		},
		async createProduct() {
			let productData = {
				title: this.title,
				price: this.price,
				description: this.description.replaceAll('\n', '<br>'),
				type: this.type,
				categories: this.categories,
				seller: this.userId
			}
			if (!this.image) {
				this.$emit('showMessage', { message: 'Добавьте изображение', error: true })
				return
			}
			if (!this.title || !this.price || !this.description || !this.type || !this.categories) {
				this.$emit('showMessage', { message: 'Заполните все поля', error: true })
				return
			}
			let message = await createProduct(this.image, productData)
			this.$emit('showMessage', message)
		}
	},
	computed: {
		...mapState({
			userId: state => state.user.userId
		})
	},
	emits: {
		'showMessage': null
	}
}
</script>

<template>
	<product-template>
		<template v-slot:header>
			<h1 class="product__title">Создание товара</h1>
		</template>
		<template v-slot:left>
			<div class="product__img-wrapper">
				<img class="product__img" :src="src || `${SERVER_URL}/images/goods/default.jpg`" alt="Arduino Uno">
				<input type="file" class="hidden" ref="input" @change="addFile">
				<pencil-icon class="pencil" @click="chooseFile"></pencil-icon>
			</div>
			<app-textarea v-model="description">Описание</app-textarea>
		</template>
		<template v-slot:right>
			<div class="product__edit">
				<app-input v-model="title">Название</app-input>
				<app-input type="number" v-model="price">Цена (в рублях)</app-input>
				<select class="select" v-model="type">
					<option disabled value="">Тип</option>
					<option value="board">Плата</option>
					<option value="module">Модуль</option>
					<option value="kit">Набор</option>
				</select>
				<div class="product__checkboxes">
					<h3>Категория</h3>
					<app-checkbox id="ard" v-model="categories" value="arduino">Arduino</app-checkbox>
					<app-checkbox id="rasp" v-model="categories" value="raspberry">Raspberry Pi</app-checkbox>
					<app-checkbox id="best" v-model="categories" value="bestseller">Бестселлеры</app-checkbox>
				</div>
				<blue-button class="product__btn" @click="createProduct">Сохранить</blue-button>
			</div>
		</template>
	</product-template>
</template>

<style scoped>
.product__header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.product__body {
	display: flex;
}

.product__img {
	width: 100%;
	max-height: 385px;
	border-radius: 5px;
	object-fit: cover;
	margin-bottom: 20px;
}

.product__img-wrapper {
	position: relative;
}

.pencil {
	position: absolute;
	top: 0;
	right: 0;
}

.product__btn {
	width: 100%;
	padding: 20px;
	font-size: 25px;
}

.product__edit {
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 80%;
}

.product__checkboxes {
	display: flex;
	flex-direction: column;
	gap: 10px;
}
</style>