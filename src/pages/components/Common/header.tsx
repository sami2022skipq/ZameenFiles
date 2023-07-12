import './style.less';

import { UserOutlined } from '@ant-design/icons';
import { Anchor, Button, Drawer, Dropdown, Menu } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import logoImg from '@/assets/logo/logo.png';

const { Link } = Anchor;

function AppHeader() {
  const userDetails = useSelector(state => state?.user?.userDetails);

  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleMenuClick = (e: any) => {
    if (e.key === '1') {
      for (let i = 0; i < 3; i++) {
        navigate('/app/user/listing/manage');
      }
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <a href="/app/user/listing/manage"></a>
      </Menu.Item>
      <Menu.Item key="2">Personal Info</Menu.Item>
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <img src={logoImg} style={{ height: '50px' }} />
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset={65}>
            <Link href="#hero" title="Home" />
            <Link href="#feature" title="Features" />
            <Link href="#works" title="How it works" />
            <Link href="#faq" title="FAQ" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer placement="right" closable={false} onClose={onClose} open={visible}>
            <Anchor targetOffset={65}>
              <Link href="#hero" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#hero" title="Features" />
              <Link href="#works" title="How it works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
        <div className="userIcon">
          <Dropdown
            menu={{
              items: [
                {
                  key: '1',
                  icon: <UserOutlined />,
                  label: <a href="/app/user/listing/manage">Account</a>,
                },

                {
                  key: '2',
                  icon: <UserOutlined />,
                  label: <a href="/app/user/settings">User Profile</a>,
                },

                {
                  key: '3',
                  icon: <UserOutlined />,
                  label: <span>Logout</span>,
                },
              ],
            }}
            placement="bottomRight"
          >
            <span className="ant-dropdown-link" style={{ cursor: 'pointer' }}>
              <UserOutlined /> {userDetails ? userDetails?.name : ''}
            </span>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
