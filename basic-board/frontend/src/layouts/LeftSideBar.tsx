import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

type Props = {};
export const LeftSideBar = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  const MENU_ITEMS = [{ key: '1', icon: <HomeOutlined />, title: 'Home' }];

  const siderStyle: React.CSSProperties = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarColor: 'unset',
  };

  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed} style={siderStyle}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={MENU_ITEMS} />
    </Layout.Sider>
  );
};
