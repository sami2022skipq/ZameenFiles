import { IDashboardRoutes, IUserManagementsRoutes } from '@/routes/routin';

export const MainSidebarMenuList: any = [
  {
    code: '/app/dashboard',
    label: 'Dashboard',
    icon: 'dashboard',
    path: `/${IDashboardRoutes.DASHBOARD}`,
    key: '0',
  },
  {
    code: 'UserManager',
    label: 'User Listing',
    icon: 'users',
    path: `/${IUserManagementsRoutes.MANAGE}`,
    key: '1',
  },
  {
    code: 'UserSettings',
    label: 'User Settings',
    icon: 'users',
    path: `/${IUserManagementsRoutes.USER_SETTINGS}`,
    key: '2',
  },
  // {
  //   code: 'documentation',
  //   label: 'Documentation',
  //   icon: 'documentation',
  //   path: '/documentation',
  //   key: '2',
  // },

  // {
  //   code: 'component',
  //   label: 'Component',
  //   icon: 'permission',
  //   path: '/component',
  //   key: '3',
  //   children: [
  //     {
  //       code: 'componentSearch',
  //       label: 'Search',
  //       path: '/component/search',
  //       key: '6',
  //     },
  //     {
  //       code: 'componentAside',
  //       label: 'Aside',
  //       path: '/component/aside',
  //       key: '7',
  //     },
  //   ],
  // },
];
