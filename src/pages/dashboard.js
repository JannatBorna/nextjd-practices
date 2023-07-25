import DashboardLayout from '@/components/Layouts/DashboardLayout';
import React from 'react';

const DashboardPage = () => {
    return (
        <div>
            <h1 style={{fontSize:"30px", textAlign: "center"}}>Welcome to Dashboard Home page</h1>
        </div>
    );
};

export default DashboardPage;

DashboardPage.getLayout = function getLayout(page){
    return(
        <DashboardLayout>
          {page}
        </DashboardLayout>
    )
}