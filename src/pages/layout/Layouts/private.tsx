import type { MenuChild, MenuList } from '@/interface/layout/menu.interface';
import type { FC } from 'react';

import './index.less';

import { Button, Drawer, Layout, Modal, theme as antTheme } from 'antd';
import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';

import IdleTimer from '@/pages/components/sessiontimeout/ideltimer';
import { handleLogin } from '@/stores/global.store';
import { setUserItem } from '@/stores/user.store';
import { getFirstPathCode } from '@/utils/getFirstPathCode';
import { getGlobalState } from '@/utils/getGloabal';
import { ILoginActions } from '@/utils/golobaldata';

import { useGuide } from '../../guide/useGuide';
import HeaderComponent from '../header';
import MenuComponent from '../menu';
import TagsView from '../tagView';
import { MainSidebarMenuList } from './sidebarroutes';

const { Sider, Content } = Layout;
const WIDTH = 992;

const PrivateLayout: FC = () => {
  const location = useLocation();
  const isUserLogin = useSelector((state: any) => state?.global?.isUserLogin);
  const pathName = location.pathname;
  const [isTimeout, setIsTimeout] = useState(false);
  const [customTimeout] = useState<number>(15);
  const [openKey, setOpenkey] = useState<string>();
  const [selectedKey, setSelectedKey] = useState<string>(location.pathname);

  const { device, collapsed, newUser } = useSelector(state => state.user);
  const token = antTheme.useToken();

  const isMobile = device === 'MOBILE';
  const dispatch = useDispatch();
  const { driverStart } = useGuide();

  // useEffect(() => {
  //   if (localStorage.getItem('_expiredTime') === null && !localStorage.getItem('pathName')) {
  //     setCustomTimeout(0);
  //   } else {
  //     setCustomTimeout(15);
  //   }
  // }, []);

  useEffect(() => {
    const code = getFirstPathCode(location.pathname);

    setOpenkey(code);
    setSelectedKey(location.pathname);
  }, [location.pathname]);

  const toggle = () => {
    dispatch(
      setUserItem({
        collapsed: !collapsed,
      }),
    );
  };

  const initMenuListAll = (menu: MenuList) => {
    const MenuListAll: MenuChild[] = [];

    menu.forEach(m => {
      if (!m?.children?.length) {
        MenuListAll.push(m);
      } else {
        m?.children.forEach(mu => {
          MenuListAll.push(mu);
        });
      }
    });

    return MenuListAll;
  };

  useEffect(() => {
    if (MainSidebarMenuList) {
      dispatch(
        setUserItem({
          menuList: initMenuListAll(MainSidebarMenuList),
        }),
      );
    }
  }, [MainSidebarMenuList]);

  useEffect(() => {
    window.onresize = () => {
      const { device } = getGlobalState();
      const rect = document.body.getBoundingClientRect();
      const needCollapse = rect.width < WIDTH;

      dispatch(
        setUserItem({
          device,
          collapsed: needCollapse,
        }),
      );
    };
  }, [dispatch]);

  useEffect(() => {
    newUser && driverStart();
  }, [newUser]);

  if (!isUserLogin) {
    return <Navigate to="/login" />;
  }

  useEffect(() => {
    if (isUserLogin) {
      const timer = new IdleTimer({
        //expire after 15 minutes by default
        timeout: Number(customTimeout) * 60,
        onTimeout: () => {
          setIsTimeout(true);
        },
        onExpired: () => {
          setIsTimeout(true);
        },
      });

      return () => {
        timer?.cleanUp();
      };
    }
  }, [isUserLogin, setIsTimeout, customTimeout]);

  function handleContinueSession() {
    localStorage?.setItem('pathName', pathName);
    localStorage?.removeItem('_expiredTime');
    dispatch(
      handleLogin({
        type: ILoginActions.LOGOUT,
        payload: null,
      }),
    );
  }

  function handleStartNewSession() {
    localStorage?.removeItem('pathName');
    localStorage?.removeItem('_expiredTime');
    dispatch(
      handleLogin({
        type: ILoginActions.LOGOUT,
        payload: null,
      }),
    );
  }

  console.log(isTimeout, 'ssssss');

  return (
    <Layout className="layout-page">
      <HeaderComponent collapsed={collapsed} toggle={toggle} />
      <Layout>
        {!isMobile ? (
          <Sider
            className="layout-page-sider"
            trigger={null}
            collapsible
            style={{ backgroundColor: token.token.colorBgContainer }}
            collapsedWidth={isMobile ? 0 : 80}
            collapsed={collapsed}
            breakpoint="md"
          >
            <MenuComponent
              menuList={MainSidebarMenuList}
              openKey={openKey}
              onChangeOpenKey={k => setOpenkey(k)}
              selectedKey={selectedKey}
              onChangeSelectedKey={k => setSelectedKey(k)}
            />
          </Sider>
        ) : (
          <Drawer
            width="200"
            placement="left"
            bodyStyle={{ padding: 0, height: '100%' }}
            closable={false}
            onClose={toggle}
            open={!collapsed}
          >
            <MenuComponent
              menuList={MainSidebarMenuList}
              openKey={openKey}
              onChangeOpenKey={k => setOpenkey(k)}
              selectedKey={selectedKey}
              onChangeSelectedKey={k => setSelectedKey(k)}
            />
          </Drawer>
        )}
        <Content className="layout-page-content">
          <TagsView />
          {isTimeout && (
            <Modal
              width={570}
              closable={false}
              open={isTimeout}
              maskClosable={false}
              maskStyle={{ backdropFilter: 'blur(2.5px)' }}
              footer={[
                <Button
                  key="Continue"
                  color="primary"
                  onClick={() => {
                    handleContinueSession();
                  }}
                >
                  Resume Session
                </Button>,
                <Button
                  key="back"
                  onClick={() => {
                    handleStartNewSession();
                  }}
                >
                  Start New Session
                </Button>,
              ]}
            >
              <div className="modal_info_text">
                <p className="para textCenter pv-20">
                  Your session has expired.
                  <br />
                  Please log in again to proceed.
                </p>
              </div>
            </Modal>
          )}
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PrivateLayout;
