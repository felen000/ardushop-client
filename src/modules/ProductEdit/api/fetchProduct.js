import api from '../../../http'

export default async function(id) {
	let response = await api.get(`/product/${id}`)
	let product = response.data
	return product
}