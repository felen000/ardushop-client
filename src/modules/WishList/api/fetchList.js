import api from "../../../http"

export default async function(userId) {
	try {
		let res = await api.get(`/wishlist/${userId}`)

		return res.data
	} catch (error) {
		let res = error.response

		console.log(res)
	}
}