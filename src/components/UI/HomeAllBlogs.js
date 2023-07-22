import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import Image from "next/image";


const HomeAllBlogs = ({allBlogs}) => {
    const {Meta} = Card;
    return (
        <div>
            <Row>
         {allBlogs.map((blog) =>(
      <Col span={6} key={blog.id}>
         <Card
    style={{
      width: 300,
    }}
    cover={
      <Image
        alt="example"
        src={blog?.image_url}
        width={500}
        height={200}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta title={blog.title}/>
  </Card>
);
    </Col>
    ))}
  </Row>
        </div>
    );
};

export default HomeAllBlogs;