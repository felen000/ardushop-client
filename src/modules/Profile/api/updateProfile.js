import api from '../../../http'
export default async function (id, file, data) {
	let formData = new FormData()
	formData.append('id', id)
	formData.append('userData', JSON.stringify(data))
	formData.append('avatar', file)

	try {

		let res = await api.put(`/user/edit`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
		let { message } = res.data
		console.log(message)
		return {message, error: false}

	} catch (error) {
		console.log(error)
		return {message: error.response.data.message ?? error.message, error: true}

	}
}