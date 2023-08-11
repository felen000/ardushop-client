import api from '../../../http';
import setUser from '../../../utilities/setUser';

export default async function (email, password) {
  // return await AuthService.login(email, password)
  try {
    let res = await api.post('/auth/login', {
      email,
      password,
    });

    setUser(res.data.user, res.data.accessToken);
    return { message: 'ok' };
  } catch (error) {
    let res = error.response;
    if (res.status == 400) {
      return { message: res.data.message };
    }
  }
}
