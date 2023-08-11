<script>
export default {
	name: 'delete-button'
}
</script>

<template>
<font-awesome-icon class="fa-x" icon="fa-solid fa-x" />
</template>

<style>
.fa-x {
	border-radius: 5px;
	padding: 10px;
}

.fa-x:hover {
	color: #ffffff;
	background-color: var(--blue);
}
.fa-x:active {
	transform: scale(.95);
}
</style>