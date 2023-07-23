import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const BlogsPage = () => {
    return (
        <div>
            <h1>This is Blog page</h1>
        </div>
    );
};

export default BlogsPage;

BlogsPage.getLayout = function getLayout (page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}