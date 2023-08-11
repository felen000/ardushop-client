<script>
export default {
	name: 'white-button'
}
</script>

<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<style scoped>
.btn {
	appearance: none;
	border-radius: 5px;
	border: none;
	color: #0d6efd;
	cursor: pointer;
	padding: 10px;
	background-color: var(--grey);
	transition: all linear .2s;
}
</style>
