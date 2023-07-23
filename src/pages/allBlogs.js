import RootLayout from '@/components/Layouts/RootLayout';
import { ArrowDownOutlined, CalendarOutlined, CommentOutlined, ProfileOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import Image from "next/image";
import styles  from '@/styles/Home.module.css';
import Link from "next/link";


const AllBlogsPage = ({allBlogs}) => {
    const {Meta} = Card;
    return (
      <>
      <h1
        style={{
            textAlign: "center",
            fontSize: "50px",
            margin:"30px 0px",
        }}
        >
    #ALL BLOGS
</h1>
        <Row>
          {
          allBlogs.map((blogs) =>(
              <Col 
              xs={24} sm={24} md={12} lg={6} 
              key={blogs?.id}

              >

              <Card 
              className={styles.card}
              hoverable
                  cover={
                  <Image
                    src={blogs?.image_url}
                    width={500}
                    height={200}
                    responsive
                    alt="image"
                  />
                  }
              >
                <Meta title={blogs?.title}/>
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
                    <CommentOutlined /> {blogs?.comment_count} co
                </span>
                <span>
                    <ProfileOutlined /> {blogs?.category}
                </span>
                </p>

                 <p style={{fontSize: "15px"}}>
                  {blogs?.description.length > 100
                  ? blogs?.description.slice(0,70) + "..."
                  : blogs?.description}
                  </p>
                  <Link href={`/blog/${blogs?.id}`}>
                            <p
                        style={{
                            fontSize:"15px",
                            marginTop:"20px",
                            backgroundColor:"black",
                            color:"white",
                            width: "100%",
                            padding: "2px 5px",
                            fontWeight: "300",
                            letterSpacing: "3px",
                            textAlign: "center",
                        }}
                        >
                            Keep Reading <ArrowDownOutlined />
                        </p>
                        </Link>
              </Card>

    </Col>
    ))}
  </Row>
        </>
    );
};

export default AllBlogsPage;

AllBlogsPage.getLayout = function getLayout (page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}

// data fetching
export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const data = await res.json();
  console.log(data);
  return {
    props:{

      allBlogs: data, // nextjs data fetching
    },
  };
};