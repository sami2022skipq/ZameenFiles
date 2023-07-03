import type { LoginParams, LoginResult, LogoutParams, LogoutResult } from '../interface/user/login';

import http from '@/utils/http';

import { request } from './request';

/** 登录接口 */
export const apiLogin = (data: LoginParams) => request<LoginResult>('post', '/user/login', data);

/** 登出接口 */
export const apiLogout = (data: LogoutParams) => request<LogoutResult>('post', '/user/logout', data);

export const userLogin = (payload: any) => http.post('users/signin', payload);
export const getAllUsers = (payload: { page: string; pageSize: string }) =>
  http.get(`authorizer/manage?page=${payload?.page}&limit=${payload?.pageSize}`);

export const getuserById = (userid: number) => http.get(`authorizer/view/${userid}`);
export const createUser = (payload: any) => http.post(`authorizer/create`, payload);
export const updateUser = ({ id, ...payload }: any) => http.patch(`authorizer/update/${id}`, payload);
export const deleteUser = (userid: number) => http.delete(`authorizer/delete/${userid}`);
