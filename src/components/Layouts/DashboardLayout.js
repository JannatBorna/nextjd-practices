import React, { useState } from 'react';
import {
  BankOutlined,
  DesktopOutlined,
  FormOutlined,
  GoldOutlined,
  LogoutOutlined,
 
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const DashboardLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
        style={{
padding: '10px'
  }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" 
          items={[
            { label: <Link href="/"><BankOutlined /> <span style={{ marginLeft: '5px'}}>Home</span></Link>},
            { label: <Link href="/dashboardBlog"><DesktopOutlined/> <span style={{ marginLeft: '5px'}}>Blog</span></Link>},
            { label: <Link href="/feedbacks"><FormOutlined  /> <span style={{ marginLeft: '5px'}}>Feedbacks</span></Link>},
            { label: <Link href="/createBlog"><GoldOutlined /> <span style={{ marginLeft: '5px'}}>Upload Blogs</span></Link>},
            { label: "Logout", icon: <LogoutOutlined />, danger: true},
          ]}
            
         ></Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
          }}
        />
        <Content style={{margin: '0 16px',}}>
         <Breadcrumb 
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 560,
              background: "#fff"
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};


export default DashboardLayout;