import type { FC } from 'react';
import type { RouteObject } from 'react-router';

import { lazy } from 'react';
import { Navigate } from 'react-router';
import { useRoutes } from 'react-router-dom';

import Dashboard from '@/pages/dashboard';
import LayoutPage from '@/pages/layout';
import PublicLayout from '@/pages/layout/Layouts/public';
import SiteLayout from '@/pages/layout/Layouts/Site';
import LoginPage from '@/pages/login';

import WrapperRouteComponent from './config';
import { IDashboardRoutes, IPropertyRoutes, IUserManagementsRoutes } from './routin';

const NotFound = lazy(() => import(/* webpackChunkName: "404'"*/ '@/pages/404'));
const Documentation = lazy(() => import(/* webpackChunkName: "404'"*/ '@/pages/doucumentation'));
const Guide = lazy(() => import(/* webpackChunkName: "guide'"*/ '@/pages/guide'));
const RoutePermission = lazy(() => import(/* webpackChunkName: "route-permission"*/ '@/pages/permission/route'));
const FormPage = lazy(() => import(/* webpackChunkName: "form'"*/ '@/pages/components/form'));
const TablePage = lazy(() => import(/* webpackChunkName: "table'"*/ '@/pages/components/table'));
const SearchPage = lazy(() => import(/* webpackChunkName: "search'"*/ '@/pages/components/search'));
const TabsPage = lazy(() => import(/* webpackChunkName: "tabs'"*/ '@/pages/components/tabs'));
const AsidePage = lazy(() => import(/* webpackChunkName: "aside'"*/ '@/pages/components/aside'));
const RadioCardsPage = lazy(() => import(/* webpackChunkName: "radio-cards'"*/ '@/pages/components/radio-cards'));
const BusinessBasicPage = lazy(() => import(/* webpackChunkName: "basic-page" */ '@/pages/business/basic'));
const BusinessWithSearchPage = lazy(() => import(/* webpackChunkName: "with-search" */ '@/pages/business/with-search'));
const BusinessWithAsidePage = lazy(() => import(/* webpackChunkName: "with-aside" */ '@/pages/business/with-aside'));

const BusinessWithRadioCardsPage = lazy(
  () => import(/* webpackChunkName: "with-aside" */ '@/pages/business/with-radio-cards'),
);
const UserManagement = lazy(() => import('@/pages/Usermanagement/index'));
const CreateUser = lazy(() => import('@/pages/Usermanagement/create'));
const BusinessWithTabsPage = lazy(() => import(/* webpackChunkName: "with-tabs" */ '@/pages/business/with-tabs'));
const Home = lazy(() => import(`@/pages/Home/index`));
const ClientDetails = lazy(() => import(`@/pages/Clientdetails/index`));
const PropertDetail = lazy(() => import(`@/pages/Properties/index`));
const routeList: RouteObject[] = [
  {
    path: '',
    element: <WrapperRouteComponent element={<SiteLayout />} titleId="" />,
    children: [
      {
        path: '',
        element: <WrapperRouteComponent element={<Home />} titleId="title.login" />,
      },
      {
        path: '/client/details',
        element: <WrapperRouteComponent element={<ClientDetails />} titleId="title.login" />,
      },
      {
        path: `${IPropertyRoutes.DETAIL}`,
        element: <WrapperRouteComponent element={<PropertDetail />} titleId="title.login" />,
      },
      {
        path: '/home',
        element: <WrapperRouteComponent element={<LoginPage />} titleId="title.login" />,
      },
    ],
  },
  {
    path: 'auth',
    element: <WrapperRouteComponent element={<PublicLayout />} titleId="" />,
    children: [
      {
        path: 'login',
        element: <WrapperRouteComponent element={<LoginPage />} titleId="title.login" />,
      },
      {
        path: 'login/abc',
        element: <WrapperRouteComponent element={<div>This is div</div>} titleId="title.login" />,
      },
    ],
  },
  {
    path: '/app',
    element: <WrapperRouteComponent element={<LayoutPage />} titleId="" />,
    children: [
      {
        path: '',
        element: <Navigate to={IDashboardRoutes.DASHBOARD} />,
      },
      {
        path: `${IDashboardRoutes.DASHBOARD}`,
        element: <WrapperRouteComponent element={<Dashboard />} titleId="title.dashboard" />,
      },

      {
        path: `${IUserManagementsRoutes.MANAGE}`,
        element: <WrapperRouteComponent element={<UserManagement />} titleId="UserManagement" />,
      },

      {
        path: `${IUserManagementsRoutes.CREATE}`,
        element: <WrapperRouteComponent element={<CreateUser />} titleId="User Create" />,
      },
      {
        path: `${IUserManagementsRoutes.UPDATE}/:id`,
        element: <WrapperRouteComponent element={<CreateUser />} titleId="User Update" />,
      },
      {
        path: 'documentation',
        element: <WrapperRouteComponent element={<Documentation />} titleId="title.documentation" />,
      },
      {
        path: 'guide',
        element: <WrapperRouteComponent element={<Guide />} titleId="title.guide" />,
      },
      {
        path: 'permission/route',
        element: <WrapperRouteComponent element={<RoutePermission />} titleId="title.permission.route" auth />,
      },
      {
        path: 'component/form',
        element: <WrapperRouteComponent element={<FormPage />} titleId="title.account" />,
      },
      {
        path: 'component/table',
        element: <WrapperRouteComponent element={<TablePage />} titleId="title.account" />,
      },
      {
        path: 'component/search',
        element: <WrapperRouteComponent element={<SearchPage />} titleId="title.account" />,
      },
      {
        path: 'component/tabs',
        element: <WrapperRouteComponent element={<TabsPage />} titleId="title.account" />,
      },
      {
        path: 'component/aside',
        element: <WrapperRouteComponent element={<AsidePage />} titleId="title.account" />,
      },
      {
        path: 'component/radio-cards',
        element: <WrapperRouteComponent element={<RadioCardsPage />} titleId="title.account" />,
      },
      {
        path: 'business/basic',
        element: <WrapperRouteComponent element={<BusinessBasicPage />} titleId="title.account" />,
      },
      {
        path: 'business/with-search',
        element: <WrapperRouteComponent element={<BusinessWithSearchPage />} titleId="title.account" />,
      },
      {
        path: 'business/with-aside',
        element: <WrapperRouteComponent element={<BusinessWithAsidePage />} titleId="title.account" />,
      },
      {
        path: 'business/with-radio-cards',
        element: <WrapperRouteComponent element={<BusinessWithRadioCardsPage />} titleId="title.account" />,
      },
      {
        path: 'business/with-tabs',
        element: <WrapperRouteComponent element={<BusinessWithTabsPage />} titleId="title.account" />,
      },
      {
        path: '*',
        element: <WrapperRouteComponent element={<NotFound />} titleId="title.notFount" />,
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);

  return element;
};

export default RenderRouter;
