import RootLayout from '@/components/Layouts/RootLayout';
import { CalendarOutlined, CommentOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import Image from 'next/image';
import React from 'react';
import  styles  from '@/styles/Home.module.css';

const ReviewsPage = ({allReviews}) => {
    return (
              <>
      <h1
        style={{
            textAlign: "center",
            fontSize: "50px",
            margin:"30px 0px",
        }}
        >
    #FEEDBACKS
</h1>
        <Row>
          {
          allReviews?.map((reviews) =>(
              <Col 
              xs={24} sm={24} md={12} lg={6} 
              key={reviews?.id}

              >

              <Card 
              className={styles.card}
              hoverable
                  cover={
                  <Image
                    src={reviews?.image_url}
                    width={200}
                    height={200}
                    responsive
                    alt="image"
                    style={{width: '50%', 
                    height: '50%', 
                    borderRadius: '500px',
                    marginLeft: '80px'
                  }}
                  />
                  }
              >
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
                    Name: {reviews?.name}
                </span>
                <span>
                    Rating: {reviews?.rating} 
                </span>
                </p>

                 <p style={{fontSize: "15px"}}>
                Message:  {reviews?.description}
                  </p>
              </Card>

    </Col>
    ))}
  </Row>
        </>
    );
};

export default ReviewsPage;

ReviewsPage.getLayout = function getLayout(page){
    return(
        <RootLayout> 
          {page}
        </RootLayout>
    )
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/reviews");
  const data = await res.json();
console.log(data);
return {
  props:{
    
   allReviews: data, // mongodb data fetching
  },
};
}