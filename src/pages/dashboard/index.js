import Head from 'next/head';
import { useGetBlogsQuery } from '@/redux/api/apiSlice';
import DashboardLayout from '@/components/Layouts/DashboardLayout';


const DashboardHomePage = ({blogs}) => {

// redux
// const {data, isLoading, isError, error} = useGetBlogsQuery()
// console.log(data)
// console.log(isLoading)
// console.log(isError)
// console.log(error)

  return (
    <>
      <Head>
        <title>Dashboard Blogs Portal</title>
        <meta
          name="description"
          content="This is blog portal made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 style={{fontSize:"30px", textAlign: "center", marginTop: '60px'}}>Welcome to Dashboard Home page</h1>
    </>
  );
};

export default DashboardHomePage;

DashboardHomePage.getLayout = function getLayout(page){
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}


// data fetching
export const getServerSideProps = async () => {
  // const res = await fetch("http://localhost:5000/blogs") // nextjs and redux
  const res = await fetch("http://localhost:3000/api/blogs"); // mongobd
  const data = await res.json();
  console.log(data);
  return {
    props:{

      // allBlogs: data, // nextjs data fetching and redux data fetching
      dashboardBlog: data.data, // mongodb data fetching
    },
  };
};