import api from "../../../http"

export default async function(userId, productId, productCount) {
	try {
		let res = await api.patch('/cart/count', {
			productId,
			userId,
			productCount,
		});

		return res.data;
	} catch (error) {
		console.log(error);
		return { message: error.response.data.message };
	}
}