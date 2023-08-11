import api from "../../../http";

export default async function(userId, productId) {
	try {
		await api.post('/cart/add', {
			userId,
			productId,
		});
		return { message: 'ok' };
	} catch (error) {
		console.log(error);
		return { message: error.message };
	}
}