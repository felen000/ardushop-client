<script>
export default {
	name: 'app-modal',
	props: {
		show: {
			type: Boolean,
			default: false
		}
	},
	emits: {
		'update:show': null
	}
}
</script>

<template>
	<div class="modal" @click="$emit('update:show', false)" v-if="show">
		<div @click.stop="" class="modal-content">
				<slot></slot>
		</div>
	</div>
</template>

<style scoped>
.modal {
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background-color: rgba(0, 0, 0, .5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
}

.modal-content {
	background-color: #ffffff;
	padding: 15px;
	border-radius: 5px;
	min-width: 345px;
}
</style>