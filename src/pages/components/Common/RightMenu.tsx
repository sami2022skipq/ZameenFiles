import { LogoutOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Grid, Menu } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

const { useBreakpoint } = Grid;

const RightMenu = () => {
  const { md } = useBreakpoint();
  const userDetails = useSelector(state => state?.user?.userDetails);

  return (
    <>
      {!md ? (
        <Menu mode={md ? 'horizontal' : 'inline'}>
          <Menu.Item key="mail">
            <a href="">Accounts</a>
          </Menu.Item>
          <Menu.Item key="app">
            <a href="">Profile</a>
          </Menu.Item>
        </Menu>
      ) : (
        <div className="userIcon">
          <Dropdown
            menu={{
              items: [
                {
                  key: '4',

                  label: <span>{userDetails?.name ? <b>{userDetails?.name}</b> : ''}</span>,
                },
                {
                  key: '1',
                  icon: <UserOutlined />,
                  label: <a href="/app/user/listing/manage">Account</a>,
                },

                {
                  key: '2',
                  icon: <ProfileOutlined />,
                  label: <a href="/app/user/settings">User Profile</a>,
                },

                {
                  key: '3',
                  icon: <LogoutOutlined />,
                  label: <span>Logout</span>,
                },
              ],
            }}
            placement="bottomRight"
          >
            <span className="ant-dropdown-link" style={{ cursor: 'pointer' }}>
              <UserOutlined />
            </span>
          </Dropdown>
        </div>
      )}
    </>
  );
};

export default RightMenu;
