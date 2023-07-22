import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const HomePage = () => {
  return (
    <div>
       <h1>Home page</h1>

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
