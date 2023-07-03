import type { IUser } from '@/interface/user/user';
import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';

import { NOTIFICATIONTYPE } from '@/interface/notifications';
import { DecriptionData, EncriptData } from '@/utils/encription';
import { ILoginActions } from '@/utils/golobaldata';

interface State {
  theme: 'light' | 'dark';
  loading: boolean;
  user: IUser;
}

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const userTheme = localStorage.getItem('theme') as State['theme'];

const initialState: any = {
  theme: userTheme || systemTheme,
  loading: false,
  user: null,
  error: '',

  isUserLogin: localStorage.getItem('auth') ? true : false,
  auth: null,
  userDetails: null,
  history: '',
  isOnlineUser: false,
  isCheckInternet: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setGlobalState(state, action: PayloadAction<Partial<State>>) {
      Object.assign(state, action.payload);

      if (action.payload.theme) {
        const body = document.body;

        if (action.payload.theme === 'dark') {
          if (!body.hasAttribute('theme-mode')) {
            body.setAttribute('theme-mode', 'dark');
          }
        } else {
          if (body.hasAttribute('theme-mode')) {
            body.removeAttribute('theme-mode');
          }
        }
      }
    },
    notificationCallback: (state, action) => {
      const { type, info } = action?.payload;

      console.log(action, 'type', info, 'info');

      switch (type) {
        case NOTIFICATIONTYPE.SUCCESS:
          message.success(info);
          break;
        case NOTIFICATIONTYPE.ERROR:
          message.error(info);
          break;
        case NOTIFICATIONTYPE.INFO:
          message.info(info);
          break;
        case NOTIFICATIONTYPE.WARNING:
          message.warning(info);
          break;
        default:
          message.success(info);
          break;
      }
    },
    handleLogin: (state: any, action) => {
      console.log(action, 'Action');

      switch (action.payload?.type) {
        case ILoginActions.LOGIN:
          localStorage?.removeItem('_expiredTime');
          localStorage.setItem('auth', EncriptData(action.payload) as any);
          state.isUserLogin = true;
          state.isOnlineUser = true;
          state.auth = action.payload;

          const checkIsAuthSaved = localStorage.getItem('auth');
          const decriptedData = checkIsAuthSaved ? DecriptionData(checkIsAuthSaved) : null;

          console.log(decriptedData, 'decriptedData');
          const user: IUser = decriptedData?.payload?.result;

          state.userDetails = user;

          break;
        case ILoginActions.LOGOUT:
          localStorage.removeItem('auth');

          localStorage.removeItem('tabKey');
          localStorage?.removeItem('_expiredTime');
          state.isUserLogin = false;
          state.isOnlineUser = false;
          state.auth = null;
          state.userDetails = null;
      }
    },
  },
});

export const { setGlobalState, notificationCallback, handleLogin } = globalSlice.actions;

export default globalSlice.reducer;
