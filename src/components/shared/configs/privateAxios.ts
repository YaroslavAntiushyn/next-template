// import { authConfig } from "@/modules/Auth";
import instanse from 'axios';
import { getServerSession } from 'next-auth';
import { getSession, signOut } from 'next-auth/react';

export const privateAxios = instanse.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: 'application/json',
    crossDomain: true,
    // 'X-API-KEY': APIKEY,
    'API-KEY': process.env.NEXT_PUBLIC_API_KEY,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json'
  }
});

privateAxios.interceptors.request.use(
  async (config) => {
    const session =
      typeof window === 'undefined'
        ? await getServerSession(authConfig)
        : await getSession();
    if (!session) {
      return config;
    }
    //@ts-ignore
    config.headers['Authorization'] = `Bearer ${session?.user.token}`;
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);
