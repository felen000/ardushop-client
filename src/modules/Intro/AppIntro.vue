<script>
export default {
	data() {
		return {
			SERVER_URL: import.meta.env.VITE_API_URL
		}
	}
};
</script>
<template>
	<section id="top">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-8">
					<h1 class="mb-2">Что тaкое Ардуино?</h1>
					<p>
						Arduino — это электронный конструктор и удобная платформа быстрой разработки электронных
						устройств для новичков и профессионалов. Платформа пользуется огромной популярностью во
						всем мире благодаря удобству и простоте языка программирования, а также открытой
						архитектуре и программному коду. Устройство программируется через USB без использования
						программаторов.
					</p>
				</div>
				<div class="col-4">
					<img class="w-100" :src="`${SERVER_URL}/images/intro/arduino-uno.jpg`" alt="arduino-uno" />
				</div>
			</div>
		</div>
	</section>
</template>
