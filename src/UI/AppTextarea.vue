<script>
export default {
	name: 'app-textarea',
	props: {
		id: String,
		modelValue: String,
	},
	emits: {
		'update:modelValue': null
	}
}
</script>

<template>
	<div class="textarea-block">
		<label class="textarea-label" :for="id"><slot></slot></label>
		<textarea :id="id" class="textarea" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" ></textarea>
	</div>
</template>

<style>
.textarea-block {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 5px;
}

.textarea-label {
	font-size: 1.2em;
}

.textarea {
	border: 1px solid #cccccc;
	border-radius: 5px;
	padding: 10px;
	resize: vertical;
	height: 300px;
	margin-bottom: 15px;
}
</style>