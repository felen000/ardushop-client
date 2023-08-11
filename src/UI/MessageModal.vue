<script>
export default {
	name: 'message-modal',
	props: {
		isError: {type: Boolean, default: false},
		showMessage: {type: Boolean, default: false}
	},
	data() {
		return {
		}
	}
}
</script>

<template>
	<transition name=fade>
	<div class="modal" v-if="showMessage">
		<div class="container">

				<div class="modal-content" :class="{'error': isError}">
					<slot></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<style scoped>
.container {
	height: 100%;
	position: relative;
	/* z-index: 10; */
}
.modal {
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 10;
}

.modal-content {
	position: absolute;
	bottom: 75px;
	right: 0;
	background-color: #ffffff;
	padding: 15px;
	border-radius: 5px;
	box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
	color: #42c149;
}

.error {
	color: #e41d1d;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>