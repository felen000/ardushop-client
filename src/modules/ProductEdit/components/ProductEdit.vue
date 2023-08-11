<script>
import fetchProduct from '../api/fetchProduct'
import editProduct from '../api/editProduct'
import removeProduct from '../api/removeProduct'
import ProductTemplate from '../../../components/ProductTemplate.vue'
export default {
	components: {
		ProductTemplate
	},
	data() {
		return {
			product: {},
			id: this.$route.params.id,
			SERVER_URL: import.meta.env.VITE_API_URL,
			src: '',
			image: '',
			typeOptions: [{
				name: 'Тип',
				value: ''
			},
			{
				name: 'Плата',
				value: 'board'
			},
			{
				name: 'Модуль',
				value: 'module'
			},
			{
				name: 'Набор',
				value: 'kit'
			},
			]
		}
	},
	methods: {
		async loadProduct() {
			this.product = await fetchProduct(this.id)
		},
		chooseFile() {
			this.$refs.input.click()
		},
		addFile(e) {
			this.image = e.target.files[0]
			console.log(e.target.files)
			this.src = URL.createObjectURL(this.image)
		},
		async saveSettings() {
			let message = await editProduct(this.image, this.product)
			this.$emit('showMessage', message)
		},
		async deleteProduct() {
			if (confirm('Удалить?')) {
				let message = await removeProduct(this.id)
				this.$emit('showMessage', message)
				setTimeout(() => {
					this.$router.go(-1)
				}, 2000)
			}
		}
	},
	computed: {
		userId() {
			return this.$store.state.userId
		}
	},
	mounted() {
		this.loadProduct()
		if (this.userId) {
			this.checkCart()
			this.checkWish()
		}
	},
	emits: {
		'showMessage': null
	}
}
</script>

<template>
	<product-template>
		<template v-slot:header>
			<h1 class="product__title">{{ product.title }}</h1>
		</template>
		<template v-slot:left>
			<div class="product__img-wrapper">
				<img class="product__img" :src="src || `${SERVER_URL}/${product.image}`" alt="Arduino Uno">
				<input type="file" class="hidden" ref="input" @change="addFile">
				<pencil-icon class="pencil" @click="chooseFile"></pencil-icon>
			</div>
			<app-textarea v-model="product.description">Описание</app-textarea>
		</template>
		<template v-slot:right>
			<div class="product__edit">
				<app-input v-model="product.title">Название</app-input>
				<app-input type="number" v-model="product.price">Цена (в рублях)</app-input>
				<app-select v-model="product.type" :options="typeOptions">
				</app-select>
				<div class="product__checkboxes">
					<h3>Категория</h3>
					<app-checkbox id="ard" v-model="product.categories" value="arduino">Arduino</app-checkbox>
					<app-checkbox id="rasp" v-model="product.categories" value="raspberry">Raspberry Pi</app-checkbox>
					<app-checkbox id="best" v-model="product.categories" value="bestseller">Бестселлеры</app-checkbox>
				</div>
				<blue-button class="product__btn" @click="saveSettings">Сохранить</blue-button>
				<red-button class="product__btn" @click="deleteProduct">Удалить</red-button>
			</div>
		</template>
	</product-template>
</template>

<style scoped>
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