import RootLayout from '@/components/Layouts/RootLayout';
import { Card, Col, Image, Row } from 'antd';
import React from 'react';

const AllBlogsPage = ({allBlogs}) => {
    const {Meta} = Card;
    return (
        <>
            <Row>
                {allBlogs?.map((blogs) =>(
                        <Col
                         key={blogs.id}>
                        <Card
                         hoverable
                         cover={
                            <Image 
                            src={blogs?.image_url}
                            alt='blog_image'
                            width={500}
                            height={200}
                            responsive
                            />
                         }
                        >
                        <Meta title={blogs?.title}/>
                        </Card>                                                  
                        </Col>
                    ))
                }
            </Row>
        </>
    );
};

export default AllBlogsPage;

AllBlogsPage.getLayout = function getLayout (page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}