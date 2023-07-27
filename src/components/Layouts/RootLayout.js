import { Layout, Menu } from 'antd';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import Link from 'next/link';
import { DashboardOutlined, DeploymentUnitOutlined,  DownOutlined,  FacebookFilled, GoogleSquareFilled,  LinkedinFilled, LoginOutlined, MobileOutlined, PoweroffOutlined,  RobotOutlined,   TwitterSquareFilled, UserOutlined, } from '@ant-design/icons';
import styles  from '@/styles/Home.module.css';
import { useSession, signOut } from "next-auth/react"
import { useAuthState } from 'react-firebase-hooks/auth';
const { Header, Content, Footer } = Layout;



const RootLayout = ({ children }) => {

   const { data: session } = useSession(); // github
     // firebase hooks
  // const [user ] = useAuthState(auth);

  const items = [
  {
    label: <a href="/createBlog">Uploaded Blog</a>,
    key: '0',
  },
  {
    label: <a href="/review">Review</a>,
    key: '1',
  },
];

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
        <Menu style={{backgroundColor: "#1f1f1f"}}  mode="vertical" className={styles.manu_item} >
            <Link href="/allBlogs" className={styles.manu}>
                <items style={{ margin: "0px 30px", padding: "5px"  }}>
                   <DeploymentUnitOutlined  style={{margin: "5px"}}/>
                   Blogs 
                </items>
            </Link>    

            <Link href="feedbacks/allReviews"  className={styles.manu}> 
              <items style={{padding: "10px"}}>
                <RobotOutlined style={{margin: "5px"}}/>
                Feedbacks
              </items>
            </Link>  

            <Link href="/dashboard" className={styles.manu}> 
              <items style={{ margin: "0px 30px", padding: "10px" }}>              
                <DashboardOutlined style={{margin: "5px"}}/>
                Dashboard
              </items>
           </Link>   
           
         {
            session?.user?.email? (
               <items style={{ margin: "0px 30px" }}>
                <button 
                onClick={() => signOut()}
                style={{
                  margin: "5px",
                  background:"#1f1f1f", 
                  border:"none", 
                  color: "red",
                  fontSize: "20px",
                  cursor: "pointer"
                  }}>
                  <PoweroffOutlined  style={{margin: "5px"}}/>
                  Logout
                  </button>
               </items>

        ) :
            <Link href="/login"  className={styles.manu}>
              <items style={{padding: "10px"}}>
                <LoginOutlined style={{margin: "5px"}}/>
                Login
              </items>
            </Link>  
        }

            {/* <Dropdown 
                  menu={{
                    items,
                  }}
                  trigger={['click']}
                >
              <a onClick={(e) => e.preventDefault()}>
              <Space>
              <UserOutlined /> 
              </Space>
              </a>
               </Dropdown>*/}


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