import axios from 'axios';

import { DecriptionData } from './encription';

const localIP = 'http://3.89.21.237:5000/api/';

let NodeBaseURL = ``;
const host = window.location.hostname;

if (host && host === 'http://44.198.156.49:5000/api/') {
  // set online server endpoints

  NodeBaseURL = `https://http://44.198.156.49:5000/api//api`;
} else if (host && host === 'http://44.198.156.49:5000/api/') {
  // Staging server endpoints
  NodeBaseURL = `http://44.198.156.49:5000/api/`;
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
  http.defaults.headers.common['Auth-Token'] = `${token}`;
  http.defaults.headers['Access-Control-Allow-Origin'] = '*';
};

console.log(access_token?.payload?.result, 'sss');

if (access_token) {
  updateToken(access_token?.payload);
}

export { NodeBaseURL };
export default http;
