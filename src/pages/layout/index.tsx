import type { FC } from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import PrivateLayout from './Layouts/private';

const LayoutPage: FC = () => {
  const isUserLogin = useSelector((state: any) => state?.global?.isUserLogin);

  if (!isUserLogin) {
    return <Navigate to="/auth/login" />;
  }

  return <PrivateLayout />;
};

export default LayoutPage;
