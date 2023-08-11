<script>
export default {
	name: 'pencil-icon'
}
</script>

<template>
	<div class="pencil" @click="chooseFile"><font-awesome-icon :icon="['fas', 'pen']" /></div>
</template>

<style>
.pencil {
	background-color: var(--grey);
	width: 30px;
	height: 30px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #ccc;
	transition-duration: 0.3s;

}

.pencil:hover {
	color: inherit;
	cursor: pointer;
}
</style>