import RootLayout from '@/components/Layouts/RootLayout';
import HomeAllBlogs from '@/components/UI/HomeAllBlogs';
// import Banner from '@/components/UI/Banner';
import Head from 'next/head';
// import { useGetBlogsQuery } from '@/redux/api/apiSlice';
// import { Space, Spin } from 'antd';
// import dynamic from 'next/dynamic';
// import ReviewsPage from './allReviews';


const FeedbackHomePage = ({allReviews}) => {


  return (
    <>
      <Head>
        <title>Feedbacks Portal</title>
        <meta
          name="description"
          content="This is blog portal made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {/* <ReviewsPage allReviews={allReviews}/> */}
    </>
  );
};

export default FeedbackHomePage;

FeedbackHomePage.getLayout = function getLayout(page){
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}


// data fetching
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/reviews") // nextjs and redux
  const data = await res.json();
  console.log(data);
  return {
    props:{
      allReviews: data, // mongodb data fetching
    //   reviews:data
    },
  };
};
