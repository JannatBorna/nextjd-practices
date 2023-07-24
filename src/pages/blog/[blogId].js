import { CalendarOutlined, CommentOutlined, EditOutlined, EllipsisOutlined, ProfileOutlined, SettingOutlined } from "@ant-design/icons";
import { Col, Row, Spin } from "antd";
import Image from "next/image";
import styles  from '@/styles/Home.module.css';
import RootLayout from "@/components/Layouts/RootLayout";
import { useGetBlogQuery } from "@/redux/api/apiSlice";


const BlogDetailPage = ({blogs}) => {
    // const { blogId } = blogs.params
    // const { data: blogs, isFetching, isSuccess } = useGetBlogQuery(blogId)


//   if (isFetching) {
    // <Spin size="large" />
//   } 
//   else if (isSuccess) {

    return (
      <div>
        <Row>
            <Col xs={24} sm={24} md={12} lg={12} >
                  <div className={styles.card} style={{margin: "20px"}}>
            <Image
           src={blogs?.image_url}
           width={500}
           height={300}
           responsive
           alt='news-image'
           />
                  </div>
            </Col>
                
            <Col xs={24} sm={24} md={12} lg={12} >
                <div style={{margin: "20px"}}>                    
                   <h1>{blogs?.title}</h1>
                <div
                  style={{
                    height:"5px",
                    margin: "20px 0",
                    background: "#000",
                    width: "100%"
                  }}
                ></div>

                <p
                style={{
                  display: "flex",
                  justifyContent:"space-around",
                  width: "100%",
                  color:"gray",
                  margin:"10px 0px"
                }}
                >
                <span>
                    <CalendarOutlined /> {blogs?.release_date}
                </span>
                <span>
                    <CommentOutlined /> {blogs?.comment_count} comment
                </span>
                <span>
                    <ProfileOutlined /> {blogs?.category}
                </span>
                </p>

                <p style={{fontSize: "15px"}}>
                    {blogs?.description}
                </p>

                  <p
                    style={{
                        fontSize:"15px",
                        fontWeight: "300",
                    }}>

                    <span> Author: {blogs?.author}</span>
                  </p>
                </div>
            </Col>

        </Row>
    </div>
    );
};
//   }
export default BlogDetailPage;

BlogDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


export const getServerSideProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`);
    const data = await res.json();
    // console.log(data)

    return{
        props: {
           blogs: data, // nextjs data fetching
        }
    }
}