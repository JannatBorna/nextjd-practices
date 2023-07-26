import React from 'react';
import AddFeedbacks from './addFeedback';
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import {Card, Col, Row } from 'antd';

const FeedbackPage = ({feedbacks}) => {
    
    const {Meta} = Card;
return (
    <div>
    <Row>
       <Col span={12} style={{borderRight: "1px solid black"}}>
       <Row>
         {
         feedbacks?.map((feedback) =>(
             <Col 
             xs={24} sm={24} md={12} lg={8} 
             key={feedback?.id}
             >
             <Card 
             className={styles.card}
             hoverable
                 cover={
                 <Image
                   src={feedback?.img}
                   width={500}
                   height={200}
                   responsive
                   alt="image"
                 />
                 }
             >
               <Meta title={feedback?.title}/>
               {/* <div 
                 style={{
                   height:"5px",
                   margin: "20px 0",
                   background: "#000",
                   width: "100%"
                 }}
               ></div>*/}
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
                   <CalendarOutlined /> {blogs?.name}
               </span>
               <span>
                   Rating <CommentOutlined /> {blogs?.rating} 
               </span>
               </p>
               
                <p style={{fontSize: "15px"}}>
                 {feedback?.description}
                 </p>
             </Card>
           </Col>
         ))}
     </Row>

      </Col>
      <Col span={12}>
            <div>
               <AddFeedbacks />
           </div>
      </Col>
    </Row>
          
          
          
        </div>
    );
};

export default FeedbackPage;

FeedbackPage.getLayout = function getLayout(page){
    return(
        <DashboardLayout>
          {page}
        </DashboardLayout>
    )
}