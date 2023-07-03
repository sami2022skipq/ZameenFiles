import axios from 'axios';

import { DecriptionData } from './encription';

const localIP = 'http://52.14.222.13334:3003/';

let NodeBaseURL = ``;
const host = window.location.hostname;

if (host && host === 'http://52.14.222.13334:3003/') {
  // set online server endpoints

  NodeBaseURL = `https://http://52.14.222.13334:3003//api`;
} else if (host && host === 'http://52.14.222.13334:3003/') {
  // Staging server endpoints
  NodeBaseURL = `https://http://52.14.222.13334:3003/`;
} else {
  // local development
  NodeBaseURL = localIP;
  // NodeBaseURL = `https://test-lis.precipiodx.com/api`;
}

const http = axios.create({
  baseURL: NodeBaseURL,
});

export const encriptionData = localStorage.getItem('auth');
const access_token = encriptionData ? DecriptionData(encriptionData) : '';

export const updateToken = (token: string) => {
  http.defaults.headers.common.Authorization = `Bearer ${token}`;
  http.defaults.headers['Access-Control-Allow-Origin'] = '*';
};

console.log(access_token?.payload?.result, 'sss');

if (access_token) {
  updateToken(access_token?.payload?.result?.accessToken);
}

export { NodeBaseURL };
export default http;
