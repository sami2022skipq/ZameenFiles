import './style.less';

import { Button, Col, Drawer, Menu, Row } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

const { SubMenu } = Menu;

function Navbar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav className="menuBar">
      <Row>
        <Col md={4}>
          <div className="logo">
            <a href="">logo</a>
          </div>
        </Col>
        <Col md={14}>
          <div className="leftMenu">
            <LeftMenu />
          </div>
        </Col>

        <Col md={6}>
          <div className="rightMenu">
            <RightMenu />
          </div>
        </Col>
      </Row>

      <div className="menuCon">
        <Button className="barsMenu" type="primary" onClick={showDrawer}>
          <span className="barsBtn"></span>
        </Button>
        <Drawer
          title={
            <Button type="primary" onClick={onClose}>
              Close Drawer
            </Button>
          }
          placement="right"
          closable={false}
          onClose={onClose}
          open={visible}
        >
          <LeftMenu />
          <RightMenu />
        </Drawer>
      </div>
    </nav>
  );
}

export default Navbar;
