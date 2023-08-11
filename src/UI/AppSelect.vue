<script>
export default {
	name: 'app-select',
	props: {
		options: Array,
		modelValue: {type: String, default: ""}
	},
	emits: {
		'update:modelValue': null
	}
}
</script>

<template>
	<select :value="modelValue" class="select" @change="$emit('update:modelValue', $event.target.value)">
			<option v-for="(option, i) in options" :key="i" :value="option.value" :disabled="option.value == ''">{{ option.name }}</option>
	</select>
</template>

<style>
.select {
	appearance: none;
	border: 1px solid #cccccc;
	padding: 10px;
	background-color: #fff;
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
	background-repeat: no-repeat;
	background-position: right .75rem center;
	background-size: 16px 12px;
	border-radius: 5px;
	width: 90%;
	font-size: 1.1em;
}
</style>