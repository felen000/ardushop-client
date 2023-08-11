<script>
export default {
	name: 'heart-icon',
	data() {
		return {
			color: '#000000'
		}
	},
	changeFill() {
		console.log('hi');
		this.color = '#ad3a3a'
	}
}
</script>
<template>
<font-awesome-icon class="fa icon" icon="fa-regular fa-heart" />
</template>