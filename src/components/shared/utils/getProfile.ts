import { axios } from '../configs/axios';

export const getProfile = async (token: string) => {
  try {
    const res = await axios.get('customers/users/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.data;
  } catch (e) {
    console.log('getProfile Error', e);
    return null;
  }
};
