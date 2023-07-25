import React from 'react';
import { Breadcrumb, Col, Layout, Menu, Row, theme } from 'antd';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import Link from 'next/link';
import { DeploymentUnitOutlined, FacebookFilled, GoogleSquareFilled, HomeOutlined, LinkedinFilled, LoginOutlined, MobileOutlined, PoweroffOutlined, ProfileOutlined, SecurityScanOutlined, TeamOutlined, TwitterSquareFilled, UserOutlined, UsergroupAddOutlined } from '@ant-design/icons';
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
                   <DeploymentUnitOutlined  style={{margin: "5px"}}/>
                   All Blogs 
                </items>
            </Link>    

            <Link href="/about">
                <items
                style={{
                    margin: "0px 30px"
                }}
                >
                 <UserOutlined style={{margin: "5px"}}/> 
                 About Us
                </items>
            </Link>    

            <Link href="/contact">
                <items>
                 <MobileOutlined style={{margin: "5px"}}/>
                 Contact Us
                </items>
            </Link>    


            <Link href="">
                <items
                   style={{
                   margin: "0px 30px"
                  }}>
                   <LoginOutlined style={{margin: "5px"}}/>
                  Login
                </items>
            </Link>  

              <Link href="">
                <items
                  style={{
                  margin: "0px 30px",
                   color: "red"
                  }}>
                   <PoweroffOutlined style={{margin: "5px"}}/>
                  Logout
                </items>
            </Link>  

            <Link href="">
                <items>
                    <TeamOutlined style={{margin: "5px"}}/>
                  Profile
                </items>
            </Link>  
              

            {/* <Link href="/dashboard"> 
               <items
                  style={{
                 margin: "0px 30px"
                 }}>              
                <DashboardOutlined style={{margin: "5px"}}/>
                Dashboard
               </items>
           </Link>    */}
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
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          BLOGS PORTAL
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://web.facebook.com/groups/programmingherocommunity">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://web.programming-hero.com/home/">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        Blogs Portal ©2023 Created by Programming Hero
      </Footer>
    </Layout>
  );
};
export default RootLayout;