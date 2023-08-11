import api from "../../../http";

export default async function(productId, userId) {
	let res =  await api.get('/product/check', {
		params: {
			productId,
			userId
		}
	})

	return res.data
}