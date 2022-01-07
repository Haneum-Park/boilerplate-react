import axios from 'axios';

export const baseURL = process.env.NODE_ENV === 'production' || process.env.mode === 'production' ? 'https://api.util-api.com' : 'http://localhost:3000/';

const $axios = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

$axios.interceptors.request.use(async (config) => {
  config.baseURL = baseURL;
  config.withCredentials = true;
  // const { url } = config;
  // if ((url.indexOf('calendars') === -1 && url.indexOf('qr') === -1 && url.indexOf('posts') === -1) || url.indexOf('calendars/detail') > -1) {
  //   let accessToken = getCookie('access');
  //   const refreshToken = getCookie('refresh');
  //   if (accessToken) {
  //     if (new Date(parseJwt(accessToken).exp * 1000) >= new Date()) {
  //       config.headers.Authorization = `Bearer ${accessToken}`;
  //     }
  //     if (new Date(parseJwt(accessToken).exp * 1000) < new Date()) {
  //       if (refreshToken) {
  //         if (new Date(parseJwt(refreshToken).exp * 1000) >= new Date()) {
  //           const res = await axios.get(`${baseURL}auth/refresh`, {
  //             withCredentials: true,
  //             headers: {
  //               Authorization: `Bearer ${accessToken}`,
  //             },
  //           });
  //           if (res.data.statusCode === 200) {
  //             accessToken = res.data.data.access_token;
  //             addCookie('access', accessToken);
  //           }
  //         } else {
  //           return Promise.reject(new Error('You need to Login'));
  //         }
  //       } else {
  //         return Promise.reject(new Error('You need to Login'));
  //       }
  //     }
  //   } else {
  //     return Promise.reject(new Error('You need to Login'));
  //   }
  // }
  return config;
});

$axios.interceptors.response.use(
  (res) => Promise.resolve(res),
  (err) => err.response,
);

export default $axios;