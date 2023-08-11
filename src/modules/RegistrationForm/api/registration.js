import api from '../../../http';
import setUser from '../../../utilities/setUser';
export default async function (username, email, password, isSeller) {
  // return await AuthService.registration(username, email, password, isSeller)
  try {
    let res = await api.post('/auth/registration', {
      username,
      email,
      password,
      isSeller,
    });

    setUser(res.data.user, res.data.accessToken);
    return { message: 'ok' };
  } catch (error) {
    let res = error.response;
    let message = res.data.errors[0]?.msg ?? res.data.message;
    if (res.status == 400) {
      return { message };
    }
  }
}
