import api from "../../../http"

export default async function(sellerId) {
	try {
		let res = await api.get(`/product/seller/all/${sellerId}`)
		let products = res.data
		return products
	} catch (error) {
		console.log(error)
	}
}