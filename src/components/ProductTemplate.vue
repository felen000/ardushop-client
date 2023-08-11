<script>
export default {}
</script>

<template>
	<div class="container">
		<div class="product">
			<div class="product__header">
				<slot name="header"></slot>
			</div>
			<div class="product__body">
				<div class="product__left">
					<slot name="left"></slot>
				</div>
				<div class="product__right">
					<slot name="right"></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.product__header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.product__body {
	display: flex;
}

.product__left {
	flex: 0 0 60%;
}

.product__right {
	flex: 0 0 40%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
}
</style>