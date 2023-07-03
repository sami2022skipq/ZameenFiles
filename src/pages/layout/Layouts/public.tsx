import type { FC } from 'react';

import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

/**
 * Renders "Public Layout" composition
 */
const PublicLayout: FC = () => {
  const isUserLogin = useSelector((state: any) => state?.global?.isUserLogin);

  if (isUserLogin) {
    return <Navigate to="/app/dashboard" />;
  } else
    return (
      <Layout className="layout-page">
        <Outlet />
      </Layout>
    );
};

export default PublicLayout;
