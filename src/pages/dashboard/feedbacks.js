import React from 'react';
import AddFeedbacks from './addFeedback';
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import { Col, Row } from 'antd';

const FeedbackPage = () => {
return (
    <div>
    <Row>
       <Col span={12} style={{borderRight: "1px solid black"}}>
            <div>
                <h1>Feedbacks page</h1>
            </div>
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