import type { FC } from 'react';

import './index.less';

import { Affix, Layout } from 'antd';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import Navbar from '@/pages/components/Common/header';

const { Header, Content, Footer } = Layout;

const SiteLayout: FC = () => {
  const location = useLocation();
  const hideFooter = location.pathname === '/';

  return (
    <>
      <Layout className="mainLayout">
        <Affix>
          <Navbar />
        </Affix>
        <Content>
          <Outlet />
        </Content>
        {!hideFooter && <Footer>Footer</Footer>}
      </Layout>
    </>
  );
};

export default SiteLayout;
