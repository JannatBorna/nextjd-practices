import React, { useState } from 'react';
import {
  BankOutlined,
  DesktopOutlined,
  FormOutlined,
  GoldOutlined,
  LogoutOutlined,
 
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react"


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

  const { data: session } = useSession(); // github

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
            { label: <Link href="/dashboard/dashboardBlog"><DesktopOutlined/> <span style={{ marginLeft: '5px'}}>Blog</span></Link>},
            { label: <Link href="/dashboard/reviews"><FormOutlined  /> <span style={{ marginLeft: '5px'}}>Feedbacks</span></Link>},
            { label: <Link href="/dashboard/createBlog"><GoldOutlined /> <span style={{ marginLeft: '5px'}}>Upload Blogs</span></Link>},
            { label: "Logout", icon: <LogoutOutlined />, danger: true},
            // { label: <Link href="/dashboard/createBlog"><LogoutOutlined /><span style={{ marginLeft: '5px'}}>Logout</span></Link>},

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