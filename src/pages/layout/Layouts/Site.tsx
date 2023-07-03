import type { FC } from 'react';

import './index.less';

import { Affix, Layout } from 'antd';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import AppHeader from '@/pages/components/Common/header';

const { Header, Content, Footer } = Layout;

const SiteLayout: FC = () => {
  return (
    <>
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </>
  );
};

export default SiteLayout;
