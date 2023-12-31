import { Grid, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint();

  return (
    <Menu mode={md ? 'horizontal' : 'inline'}>
      <Menu.Item key="mail">
        <Link to="/">Home</Link>
      </Menu.Item>
      {/* <SubMenu key="sub1" title={<span>Blogs</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu> */}
      <Menu.Item key="contactus">
        <Link to="/contactus">Contact Us</Link>
      </Menu.Item>

      <Menu.Item key="Agents">
        <Link to="/agents">Agents</Link>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
