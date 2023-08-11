import api from "../../../http";

export default async function() {
	let res = await api.get('/product/bestsellers')
	return res.data
}