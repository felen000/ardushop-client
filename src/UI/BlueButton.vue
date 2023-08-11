<script>
export default {
	name: 'blue-button'
}
</script>

<template>
	<button class="btn" type="button">
		<slot></slot>
	</button>
</template>

<style scoped>
.btn {
	appearance: none;
	border-radius: 5px;
	border: none;
	color: var(--grey);
	cursor: pointer;
	padding: 10px;
	background-color: #0d6efd;
	transition: all linear .2s;
}

.btn:hover {
	background-color: #105fd5;
}

.btn:active {
	background-color: #0d58c9;
	transform: scale(.99);
}
</style>