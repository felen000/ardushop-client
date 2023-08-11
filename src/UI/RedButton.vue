<script>
export default {
	name: 'red-button'
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
	color: #ffffff;
	cursor: pointer;
	padding: 10px;
	background-color: #f42424;
	transition: all linear .2s;
}

.btn:hover {
	background-color: #d72727;
}

.btn:active {
	background-color: #a82121;
	scale: .95;
}
</style>
