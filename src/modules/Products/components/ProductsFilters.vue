<script>
export default {
	data() {
		return {
			type: '',
			sort: '',
			sortOptions:[
			{name: 'Сортировать', value: ''},
			{name: 'По умолчанию', value: '0'},
			{name: 'Сначала дороже', value: '-1'},
			{name: 'Сначала дешевле', value: '1'}]
		}
	},
	emits: {
		changeType: null,
		changeSort: null
	},
	watch: {
		type() {

			this.$emit('changeType', this.type)
		},
		sort() {
			this.$emit('changeSort', this.sort)
		}
	}
}
</script>

<template>
	<div class="filters">
		<h2>Тип</h2>
		<div class="product__radio">
			<app-radio id="1" v-model="type" name="type" value="board">Платы</app-radio>
		</div>
		<div class="product__radio">
			<app-radio id="2" v-model="type" name="type" value="kit">Наборы</app-radio>
		</div>
		<div class="product__radio">
			<app-radio id="3" v-model="type" name="type" value="module">Модули</app-radio>
		</div>
		<div class="product__radio">
			<app-radio id="4" v-model="type" name="type" :isChecked="true" value="all">Все</app-radio>
		</div>
		<h2>Сортировка</h2>
		<app-select v-model="sort" :options="sortOptions"></app-select>

	</div>
</template>

<style>
.product__radio {
	margin-bottom: 5px;
}
</style>