import client from './client';
import Axios from 'axios';

const auth = Axios.create({
  baseURL: 'http://172.30.1.15:4000/', // 계속 바뀌니 주의
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Max-Age': 3600,
    'Access-Control-Allow-Headers':
      'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization',
  },
});
export const login = ({accountId, password}) =>
  auth.post('/api/auth/login', {accountId, password});

export const register = ({
  accountId,
  password,
  username,
  address,
  phoneNumber,
}) =>
  auth.post('/api/auth/register', {
    accountId,
    password,
    username,
    address,
    phoneNumber,
  });
