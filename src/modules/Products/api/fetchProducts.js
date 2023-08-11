import api from "../../../http";

export default async function() {
	let res = await api.get('/product/all')
	return res.data
}