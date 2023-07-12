import type { LoginParams, LoginResult, LogoutParams, LogoutResult } from '../interface/user/login';

import http from '@/utils/http';

import { request } from './request';

export const apiLogin = (data: LoginParams) => request<LoginResult>('post', '/user/login', data);

export const apiLogout = (data: LogoutParams) => request<LogoutResult>('post', '/user/logout', data);

export const userLogin = (payload: any) => http.post('auth/login', payload);
export const userSignUp = (payload: any) => http.post(`auth/createUser`, payload);
export const getAllUsers = (payload: { page: string; pageSize: string }) =>
  http.get(`authorizer/manage?page=${payload?.page}&limit=${payload?.pageSize}`);
export const requestResetPassword = (email: any) => http.post(`auth/requestResetPassword`, email);
export const resetPassword = (payload: any) => http.post(`auth/resetpassword`, payload);
export const getuserById = (userid: number) => http.get(`authorizer/view/${userid}`);
export const getUserData = () => http.get(`auth/getuser`);
export const createUser = (payload: any) => http.post(`auth/createUser`, payload);
export const updateUser = ({ id, ...payload }: any) => http.patch(`authorizer/update/${id}`, payload);
export const deleteUser = (userid: number) => http.delete(`authorizer/delete/${userid}`);
