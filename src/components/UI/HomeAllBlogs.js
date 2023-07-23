import { ArrowDownOutlined, CalendarOutlined, CommentOutlined, EditOutlined, EllipsisOutlined, ProfileOutlined, SettingOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import Image from "next/image";
import { useState } from "react";
import styles  from '@/styles/Home.module.css';


const HomeAllBlogs = ({allBlogs}) => {
  const [limit, setLimit] = useState(4);
  console.log(setLimit);

  const {Meta} = Card;
    return (
      <>
        <Row>
          {
          allBlogs.slice(0, limit ? limit : allBlogs.length).map((blog) =>(
              <Col 
              xs={24} sm={24} md={12} lg={6} 
              key={blog.id}

              >

              <Card 
              className={styles.card}
              hoverable
                  cover={
                  <Image
                    src={blog?.image_url}
                    width={500}
                    height={200}
                    responsive
                    alt="image"
                  />
                  }
              >
                <Meta title={blog.title}/>
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
                    <CalendarOutlined /> {blog?.release_date}
                </span>
                <span>
                    <CommentOutlined /> {blog?.comment_count} comment
                </span>
                <span>
                    <ProfileOutlined /> {blog?.category}
                </span>
                </p>

                 <p style={{fontSize: "15px"}}>
                  {blog?.description.length > 100
                  ? blog?.description.slice(0,70) + "..."
                  : blog?.description}
                  </p>

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
              </Card>

    </Col>
    ))}
  </Row>
        </>
    );
};

export default HomeAllBlogs;