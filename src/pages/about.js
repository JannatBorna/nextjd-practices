import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <h2>About us page</h2>
        </div>
    );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page){
    return(
        <RootLayout > 
          {page}
        </RootLayout>
    )
}