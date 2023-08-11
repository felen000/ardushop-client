import api from '../../../http';

export default async function (image, updatedProduct) {
  let formData = new FormData();
  let id = updatedProduct._id;
  updatedProduct.price = Number(updatedProduct.price);
  updatedProduct.description = updatedProduct.description.replaceAll('\n', '<br>');
  formData.append('id', id);
  formData.append('productData', JSON.stringify(updatedProduct));
  formData.append('image', image);

  try {
		let res = await api.put(`/product/seller/update/${id}`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})

		let message = res.data
		return message
	} catch (error) {
		console.log(error)
		return {message: error.response.data.message ?? error.message, error: true}
	}
}
