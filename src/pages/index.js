import RootLayout from '@/components/Layouts/RootLayout';
import HomeAllBlogs from '@/components/UI/HomeAllBlogs';
// import Banner from '@/components/UI/Banner';
import Head from 'next/head';
import { useGetBlogsQuery } from '@/redux/api/apiSlice';
import { Space, Spin } from 'antd';
import dynamic from 'next/dynamic';


const HomePage = ({allBlogs}) => {
const DynamicBanner = dynamic(() => import('@/components/UI/Banner'),{
  loading: () => <Space size="middle"
                  style={{
                  marginLeft: "50em",
                  marginTop: "15%",
                }}>
                  <Spin size="large" />
                </Space>,
                
                
  ssr: false,
})

// redux
const {data, isLoading, isError, error} = useGetBlogsQuery()
console.log(data)
console.log(isLoading)
console.log(isError)
console.log(error)

  return (
    <>
      <Head>
        <title>Blogs Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <DynamicBanner />
        {/* <HomeAllBlogs allBlogs={allBlogs}/> */}  {/* nextjs */}
        <HomeAllBlogs allBlogs={data}/> {/* redux */}
    </>
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
export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const data = await res.json();
  console.log(data);
  return {
    props:{

      allBlogs: data, // nextjs data fetching
    },
  };
};