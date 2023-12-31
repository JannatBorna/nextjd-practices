import { ArrowDownOutlined, CalendarOutlined, CommentOutlined, EditOutlined, EllipsisOutlined, ProfileOutlined, SettingOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import Image from "next/image";
import { useState } from "react";
import styles  from '@/styles/Home.module.css';
import Link from "next/link";


const HomeAllBlogs = ({allBlogs}) => {
  const [limit, setLimit] = useState(6);
  console.log(setLimit);

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
    #LATEST BLOGS
</h1>
        <Row>
          {
          allBlogs?.slice(0, limit ? limit : allBlogs.length).map((blogs) =>(
              <Col 
              xs={24} sm={24} md={12} lg={8} 
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
                    <CommentOutlined /> {blogs?.comment_count} comment
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
                  <Link href={`/blog/${blogs?._id}`}>
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

export default HomeAllBlogs;