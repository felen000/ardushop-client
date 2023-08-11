import api from '../../../http';

export default async function (image, productData) {
  let formData = new FormData();
  productData.price = Number(productData.price);
  formData.append('productData', JSON.stringify(productData));
  formData.append('image', image);
  try {
    let res = await api.post('/product/seller/create', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    let message = res.data;
    return message;
  } catch (error) {
    console.log(error);
    return { message: error.response.data.message ?? error.message, error: true };
  }
}
