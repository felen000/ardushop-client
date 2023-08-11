<script>
export default {
	name: 'app-input',
	props: {
		type: {type: String, default: 'text'},
		id: String,
		placeholder: String,
		modelValue: [String, Number]
	},
	emits: {
		'update:modelValue': null
	}
}
</script>

<template>
	<div class="input-block">
		<label :for="id" class="label"><slot></slot></label>
		<input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :type="type" class="input" :id="id" required :placeholder="placeholder">
	</div>
</template>

<style>
.input-block {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 5px;
}

.input {
	border: 1px solid #cccccc;
	border-radius: 5px;
	padding: 10px;
}
</style>