import api from "../../../http"

export default async function(userId, productId) {
	try {
		let res = await api.post('/wishlist/add', {userId, productId})

		return res.data
	} catch (error) {
		let res = error.response

		console.log(res)
	}
}