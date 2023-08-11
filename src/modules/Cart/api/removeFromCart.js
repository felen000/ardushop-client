import api from "../../../http"

export default async function (userId, productId) {
	try {
		let res = await api.delete('/cart/remove', {
			data: {
				userId,
				productId,
			},
		});
		return res.data;
	} catch (error) {
		console.log(error);
		return { message: error.message };
	}
}