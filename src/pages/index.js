import RootLayout from '@/components/Layouts/RootLayout';
import HomeAllBlogs from '@/components/UI/HomeAllBlogs';
import Banner from '@/components/UI/Banner';
import React from 'react';

const HomePage = ({allBlogs}) => {
  return (
    <div>
       <Banner />
       <HomeAllBlogs allBlogs={allBlogs}/>
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


// data fetching
// export const getServerSideProps = async () => {
  export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const data = await res.json();
  console.log(data);
  return {
    props:{

      allBlogs: data,
    },
  };
};