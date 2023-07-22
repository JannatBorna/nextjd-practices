import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import Link from 'next/link';
import { MobileOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';
import styles  from '@/styles/Home.module.css';
const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }) => {
    
  return (
    <Layout>
      <Header
        className={styles.layout}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div className="brand-logo"> 
        <Link href="/">
          <Image
            src={logo}
            alt='logo'
            width={200}
            style={{marginTop: "-70px"}}
            />
        </Link>
        </div>
        <Menu
         style={{backgroundColor: "#1f1f1f"}}
        //   theme="dark"
          mode="vertical"
          className={styles.manu_item}
        >
            <Link href="/allBlogs">
                <items>
                   <ProfileOutlined  />
                   All Blogs 
                </items>
            </Link>    

            <Link href="/allBlogs">
                <items
                style={{
                    margin: "0px 30px"
                }}
                >
                 <UserOutlined /> 
                 About Us
                </items>
            </Link>    

            <Link href="/allBlogs">
                <items>
                 <MobileOutlined />
                 Contact Us
                </items>
            </Link>    
        </Menu>
      </Header>
      <Content
        style={{
          padding: '0 24px',
          minHeight: '100vh'
        }}
      >
        { children }

      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default RootLayout;