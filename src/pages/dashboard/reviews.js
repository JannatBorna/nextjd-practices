import React from 'react';
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import {Card, Col, Row } from 'antd';
import AddReviews from './addReviews';
import Image from 'next/image';
import { CalendarOutlined, CommentOutlined } from '@ant-design/icons';

const ReviewsPage = ({ allReviews }) => {
    
return (
    <div>
    <Row>
       <Col span={18} style={{borderRight: "1px solid black"}}>
        <Row>
          {
           allReviews?.map((reviews) =>(
              <Col 
              xs={18} sm={18} md={9} lg={6} 
              key={reviews?.id}

              >

              <Card 
              className={styles.card}
              hoverable
                  cover={
                  <Image
                    src={reviews?.image_url}
                    width={500}
                    height={200}
                    responsive
                    alt="image"
                  />
                  }
              >

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
                    <CalendarOutlined /> {reviews?.name}
                </span>
                <span>
                    Rating: <CommentOutlined /> {reviews?.rating} co
                </span>
                </p>

                <div
                  style={{
                    height:"5px",
                    margin: "20px 0",
                    background: "#000",
                    width: "100%"
                  }}
                ></div>

                 <p style={{fontSize: "15px"}}>
                  {reviews?.description}
                  </p>
              </Card>

    </Col>
    ))}
  </Row>
      </Col>
      <Col span={6}>
            <div>
               <AddReviews />
           </div>
      </Col>
    </Row>
          
          
          
        </div>
    );
};

export default ReviewsPage;

ReviewsPage.getLayout = function getLayout(page){
    return(
        <DashboardLayout>
          {page}
        </DashboardLayout>
    )
}