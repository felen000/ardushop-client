import api from "../../../http"

export default async function(userId, productId) {
	try {
		let res = await api.get('/wishlist/check', {params: {userId, productId}})

		return res.data
	} catch (error) {
		let res = error.response

		console.log(res)
	}
}