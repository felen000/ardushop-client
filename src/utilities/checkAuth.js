import axios from 'axios';
import setUser from './setUser';
import store from '../store';

export default async function () {
  try {
    let res = await axios.get(`${import.meta.env.VITE_API_URL}/auth/refresh`, {
      withCredentials: true,
    });

    setUser(res.data.user, res.data.accessToken);
    return true;
  } catch (error) {
    store.commit('setAuth', false);
    console.log(error);
    return false;
  }
}
