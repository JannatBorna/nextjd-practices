import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <h1>Contact us page</h1>
        </div>
    );
};

export default ContactPage;

ContactPage.getLayout = function getLayout(page){
    return(
        <RootLayout > 
          {page}
        </RootLayout>
    )
}