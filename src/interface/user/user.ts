import type { Role } from './login';
import type { Device } from '@/interface/layout/index.interface';

export type Locale = 'zh_CN' | 'en_US';

export interface UserState {
  username: string;

  /** menu list for init tagsView */
  menuList: any[];

  /** login status */
  logged: boolean;

  role: Role;

  /** user's device */
  device: Device;

  /** menu collapsed status */
  collapsed: boolean;

  /** notification count */
  noticeCount: number;

  /** user's language */
  locale: Locale;

  /** Is first time to view the site ? */
  newUser: boolean;
  userDetails: any;
  history: string;
  isOnlineUser: boolean;
  isCheckInternet: boolean;
}

export interface IUser {
  notes: string;
  status: number;
  created_at: string;
  updated_at: string;
  created_by: number;
  updated_by: number;
  deleted_at: null | string;
  id: number;
  username: string;
  email: string;
  type: number;
  egnyte_access_token: string;
  logged_at: string;
  profile: any;
  physician: null;
  roles: [];
}
