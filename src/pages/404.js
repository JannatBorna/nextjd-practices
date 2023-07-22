import Image from 'next/image';
import error from '@/assets/images/404_error.png'
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'antd';
import styles from "@/styles/error.module.css";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

const NotFoundPage = () => {

    const router = useRouter();

    setTimeout(() => {
        router.push("/")
    }, 4000)

    return (
        <div style={{textAlign: "center"}}>
            <Head>
                <title>nextjs-practices-404 not found</title>
                <meta name="description" content="This is nextJS practices work" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Image 
            src={error}
            alt='error_image'
            style={{display:'flex', margin: '50px auto'}}
            width={500}
            />
            <Link href="/">
               <Button className={styles.btn}><ArrowLeftOutlined /> Back To Home</Button>
            </Link>
        </div>
    );
};

export default NotFoundPage;