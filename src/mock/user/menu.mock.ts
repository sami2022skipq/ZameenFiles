import type { MenuList } from '@/interface/layout/menu.interface';

import { intercepter, mock } from '../config';

const mockMenuList: MenuList | any = [
  {
    code: '/app/dashboard',
    label: {
      zh_CN: '首页',
      en_US: 'Dashboard',
    },
    icon: 'dashboard',
    path: '/dashboard',
  },
  {
    code: 'UserListing',
    label: {
      zh_CN: '文档',
      en_US: 'User Listing',
    },
    icon: 'users',
    path: '/user/listing',
  },
  {
    code: 'documentation',
    label: {
      zh_CN: '文档',
      en_US: 'Documentation',
    },
    icon: 'documentation',
    path: '/documentation',
  },

  {
    code: 'component',
    label: {
      zh_CN: '组件',
      en_US: 'Component',
    },
    icon: 'permission',
    path: '/component',
    children: [
      {
        code: 'componentForm',
        label: {
          zh_CN: '表单',
          en_US: 'Form',
        },
        path: '/component/form',
      },
      {
        code: 'componentTable',
        label: {
          zh_CN: '表格',
          en_US: 'Table',
        },
        path: '/component/table',
      },
      {
        code: 'componentSearch',
        label: {
          zh_CN: '查询',
          en_US: 'Search',
        },
        path: '/component/search',
      },
      {
        code: 'componentAside',
        label: {
          zh_CN: '侧边栏',
          en_US: 'Aside',
        },
        path: '/component/aside',
      },
      {
        code: 'componentTabs',
        label: {
          zh_CN: '选项卡',
          en_US: 'Tabs',
        },
        path: '/component/tabs',
      },
      {
        code: 'componentRadioCards',
        label: {
          zh_CN: '单选卡片',
          en_US: 'Radio Cards',
        },
        path: '/component/radio-cards',
      },
    ],
  },
];

mock.mock('/user/menu', 'get', intercepter(mockMenuList));
