import { Col, Row, Carousel } from "antd";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import banner1 from "../../assets/banner-image/banner.jpg";
import banner2 from "../../assets/banner-image/banner-2.jpg";
import banner3 from "../../assets/banner-image/banner-3.jpg";

const contentStyle = {
  height: "425px",
  color: "#000",
}

const Banner = () => (
  <Carousel effect="fade" autoplay style={{ margin: "20px 0px" }}>
    {/* slider-1 */}
    <div>
      <Row>
        <Col
          lg={{
            span: 8,
          }}
        >
          <h1 style={{ fontSize: "50px" }}>
            LET&apos;S BUILD
            <br />
            YOUR CAREER
          </h1>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "#000",
              width: "95%",
            }}
          ></div>

          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              color: "gray",
              margin: "10px 0px",
            }}
          >
            <span>
              <CalendarOutlined /> FEBRUARY 28, 2023
            </span>
            <span>
              <CommentOutlined /> NO COMMENTS
            </span>
            <span>
              <ProfileOutlined /> HOBBY
            </span>
          </p>

          <p style={{ fontSize: "20px" }}>
            Beauteous before up across felt sheepishly and more mournfully the
            wow so more flustered and one up pushed salamander collective
            blinked that iguanodon bid much some since hey far goodness jaguar
            whil...
          </p>
          <p
            style={{
              fontSize: "20px",
              margin: "20px 0px",
              backgroundColor: "black",
              color: "white",
              width: "168px",
              padding: "2px 5px ",
              fontWeight: "300",
              letterSpacing: "3px",
            }}
          >
            Keep Reading <ArrowRightOutlined />
          </p>
        </Col>

        <Col
          lg={{
            span: 16,
          }}
          style={contentStyle}
        >
          <Image src={banner1} fill alt="drawing_image" />
        </Col>
      </Row>
    </div>
    {/* slider-2 */}
    <div>
      <Row>
        <Col
          lg={{
            span: 8,
          }}
        >
          <h1 style={{ fontSize: "50px" }}>
            SCREENSHOT
            <br />
            ANDROID PHONE 
          </h1>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "#000",
              width: "95%",
            }}
          ></div>

          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              color: "gray",
              margin: "10px 0px",
            }}
          >
            <span>
              <CalendarOutlined /> MARCH 30, 2023
            </span>
            <span>
              <CommentOutlined /> 5 COMMENTS
            </span>
            <span>
              <ProfileOutlined /> NATURE
            </span>
          </p>

          <p style={{ fontSize: "20px" }}>
            When I make pull requests for user interface changes, I include screenshots so everyone else involved in the product can see what I see.  It’s especially helpful for designers to quickly compare their mockups with the final result...
          </p>
          <p
            style={{
              fontSize: "20px",
              margin: "20px 0px",
              backgroundColor: "black",
              color: "white",
              width: "168px",
              padding: "2px 5px ",
              fontWeight: "300",
              letterSpacing: "3px",
            }}
          >
            Keep Reading <ArrowRightOutlined />
          </p>
        </Col>

        <Col
          lg={{
            span: 16,
          }}
          style={contentStyle}
        >
          <Image
            src={banner2}
            fill
            alt="eagle_image"
            style={{ grayScale: "-1" }}
          />
        </Col>
      </Row>
    </div>

       {/* slider-3 */}
   <div>
     <Row>
       <Col
         lg={{
           span: 8,
         }}
       >
         <h1 style={{ fontSize: "50px" }}>
           EAGLE, YOU ARE
           <br />
           NOT ALONE
         </h1>
         <div
           className="line"
           style={{
             height: "5px",
             margin: "20px 0",
             background: "#000",
             width: "95%",
           }}
         ></div>
         <p
           style={{
             display: "flex",
             justifyContent: "space-between",
             width: "90%",
             color: "gray",
             margin: "10px 0px",
           }}
         >
           <span>
             <CalendarOutlined /> MARCH 30, 2023
           </span>
           <span>
             <CommentOutlined /> 5 COMMENTS
           </span>
           <span>
             <ProfileOutlined /> NATURE
           </span>
         </p>
         <p style={{ fontSize: "20px" }}>
           A spread opened patient and compulsively one placed
           python owing snapped yikes equitable when much the 
           dolor sit, amet consectetur adipisicing elit. Elige
         </p>
         <p
           style={{
             fontSize: "20px",
             margin: "20px 0px",
             backgroundColor: "black",
             color: "white",
             width: "168px",
             padding: "2px 5px ",
             fontWeight: "300",
             letterSpacing: "3px",
           }}
         >
           Keep Reading <ArrowRightOutlined />
         </p>
       </Col>
       <Col
         lg={{
           span: 16,
         }}
         style={contentStyle}
       >
         <Image
           src={banner3}
           fill
           alt="eagle_image"
           style={{ grayScale: "-1" }}
         />
       </Col>
     </Row>
   </div>
  </Carousel>
);
export default Banner;
