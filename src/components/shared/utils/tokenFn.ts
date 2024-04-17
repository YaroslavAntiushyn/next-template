import { axios } from '../configs/axios';

export const saveToken = (token: string): void => {
  localStorage.setItem('token', token);
  axios.defaults.headers['Authorization-Token'] = token;
};

export const getToken = (): string | null => {
  const token = localStorage.getItem('token');
  const fullToken = token && `Bearer ${token}`;
  return fullToken;
};

export const getProfile = async (token: string) => {
  try {
    const res = await axios.get('/users/profile', {
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

export const removeToken = (): void => localStorage.removeItem('token');
