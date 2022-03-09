/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { validateToken, parseToken } from '@util/jwt.util';

export type RetSuccessData<T> = {
  status: AxiosResponse['status'];
  msg: string;
  data: T;
};

export type RetErrorData = {
  status: AxiosResponse['status'];
  msg: string;
};

const requireApiList = [
  { method: 'post', url: '' },
  { method: 'get', url: '' },
];

export const baseUrl = process.env.NODE_ENV === 'production' ? 'https://api.util-api.com/' : 'http://localhost:3000/';

const $axios = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

$axios.interceptors.request.use(async (config: AxiosRequestConfig) => {
  config.baseURL = baseUrl;
  const { url, method } = config;
  if (
    requireApiList.findIndex(
      (api) => (url as string).indexOf(api.url) > -1 && api.method === method,
    ) > -1
  ) {
    if (validateToken()) {
      const token = localStorage.getItem('token') as string;
      const { exp } = parseToken(token);
      if (exp * 1000 - Date.now() > 0) {
        if (config.headers) config.headers.token = token;
        return config;
      }
      localStorage.removeItem('token');
      return Promise.reject(new Error('You need to Login'));
    }
    localStorage.removeItem('token');

    return Promise.reject(new Error('You need to Login'));
  }
  return config;
});

$axios.interceptors.response.use(
  (res) => Promise.resolve(res),
  (err) => {
    const { message } = err;
    console.log(message);
    return err.response;
  },
);

export default $axios;

export const fetcher = async (config: AxiosRequestConfig) => {
  const { data } = await $axios(config);
  return data;
};
