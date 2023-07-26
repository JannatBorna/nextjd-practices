import React from 'react';
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import {Card, Col, Row } from 'antd';
import AddReviews from './addReviews';

const ReviewsPage = ({feedbacks}) => {
    
return (
    <div>
    <Row>
       <Col span={18} style={{borderRight: "1px solid black"}}>
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