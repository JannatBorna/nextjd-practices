import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const FeedbacksPage = () => {
    return (
        <div>
            <h1>Feedbacks</h1>
        </div>
    );
};

export default FeedbacksPage;

FeedbacksPage.getLayout = function getLayout(page){
    return(
        <RootLayout> 
          {page}
        </RootLayout>
    )
}