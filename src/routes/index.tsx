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
import ForgetPassword from '@/pages/login/forgetpass';
import ResetPassword from '@/pages/login/resetpassword';

import WrapperRouteComponent from './config';
import { IPropertyRoutes } from './routin';

const NotFound = lazy(() => import(/* webpackChunkName: "404'"*/ '@/pages/404'));

const UserListing = lazy(() => import('@/pages/UserListing/index'));
const UserSettings = lazy(() => import('@/pages/UserListing/settings'));
const CreateAd = lazy(() => import('@/pages/UserListing/create'));

const Home = lazy(() => import(`@/pages/Home/index`));
const ClientDetails = lazy(() => import(`@/pages/Clientdetails/index`));
const PropertDetail = lazy(() => import(`@/pages/Properties/index`));
const SinglePropertyDetail = lazy(() => import(`@/pages/Properties/view`));
const routeList: RouteObject[] = [
  {
    path: '',
    element: <WrapperRouteComponent element={<SiteLayout />} titleId="" />,
    children: [
      {
        path: '',
        element: <WrapperRouteComponent element={<Home />} titleId="Home" />,
      },
      {
        path: '/client/details',
        element: <WrapperRouteComponent element={<ClientDetails />} titleId="Client Details" />,
      },
      {
        path: `${IPropertyRoutes.DETAIL}`,
        element: <WrapperRouteComponent element={<PropertDetail />} titleId="Property Details" />,
      },
      {
        path: `${IPropertyRoutes.SINGLE_PROPERTY}`,
        element: <WrapperRouteComponent element={<SinglePropertyDetail />} titleId="Detail" />,
      },
    ],
  },
  {
    path: 'auth',
    element: <WrapperRouteComponent element={<PublicLayout />} titleId="" />,
    children: [
      {
        path: 'login',
        element: <WrapperRouteComponent element={<LoginPage />} titleId="Login" />,
      },
      {
        path: 'forget/password',
        element: <WrapperRouteComponent element={<ForgetPassword />} titleId="Forget Password" />,
      },

      {
        path: 'passwordReset',
        element: <WrapperRouteComponent element={<ResetPassword />} titleId="Reset Password" />,
      },

      {
        path: 'login/abc',
        element: <WrapperRouteComponent element={<div>This is div</div>} titleId="title.login" />,
      },
    ],
  },
  {
    path: 'app',
    element: <WrapperRouteComponent element={<LayoutPage />} titleId="" />,
    children: [
      {
        path: 'dashboard',
        element: <WrapperRouteComponent element={<Dashboard />} titleId="Dashboard" />,
      },

      {
        path: `user/listing/manage`,
        element: <WrapperRouteComponent element={<UserListing />} titleId="Listing" />,
      },
      {
        path: `user/settings`,
        element: <WrapperRouteComponent element={<UserSettings />} titleId="Listing" />,
      },

      {
        path: `user/listing/create`,
        element: <WrapperRouteComponent element={<CreateAd />} titleId="Listing" />,
      },
      {
        path: `user/listing/update/:id`,
        element: <WrapperRouteComponent element={<CreateAd />} titleId="Listing" />,
      },

      {
        path: '*',
        element: <WrapperRouteComponent element={<NotFound />} titleId="Not Found" />,
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);

  return element;
};

export default RenderRouter;
