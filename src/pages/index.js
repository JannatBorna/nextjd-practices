import RootLayout from '@/components/Layouts/RootLayout';
import HomeAllBlogs from '@/components/UI/HomeAllBlogs';
import Banner from '@/components/UI/Banner';
import AllBlogsPage from './allBlogs';
import Head from 'next/head';
import { useGetBlogsQuery } from '@/redux/api/apiSlice';


const HomePage = ({allBlogs}) => {

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
       <Banner />
        {/* <HomeAllBlogs allBlogs={allBlogs}/> */}
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