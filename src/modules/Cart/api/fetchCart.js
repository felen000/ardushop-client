import api from "../../../http";

export default async function(id) {
	try {
		let res = await api.get(`/cart/${id}`);
		return res.data;
	} catch (error) {
		console.log(error);
		return { message: error.message };
	}
}