// import Dashboard from '@/components/Layouts/Dashboard';
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import React from 'react';

const DashboardBlog = () => {
    return (
        <div>
            <h1>Dashboard Blog</h1>
        </div>
    );
};

export default DashboardBlog;

DashboardBlog.getLayout = function getLayout(page){
    return(
        <DashboardLayout>
          {page}
        </DashboardLayout>
    )
}