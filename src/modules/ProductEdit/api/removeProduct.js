import api from "../../../http";

export default async function(productId) {
	try {
		let res = await api.delete(`/product/seller/delete/${productId}`)
		let message = res.data
		return message
	} catch (error) {
		console.log(error)
		return {message: error.response.data.message ?? error.message, error: true}
	}
}