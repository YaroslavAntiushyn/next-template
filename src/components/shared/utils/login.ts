import axios from 'axios';

interface LoginData {
  email: string;
  password: string;
}
export const login = async (loginData: LoginData) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/customers/users/login`,
      loginData
    );
    return res.data.accessToken;
  } catch (e: any) {
    throw new Error(e?.response?.data?.message);
  }
};
