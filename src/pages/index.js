import RootLayout from '@/components/Layouts/RootLayout';
import Banner from '@/components/UI/Banner';
import React from 'react';

const HomePage = () => {
  return (
    <div>
       <Banner />

    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page){
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}
