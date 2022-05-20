import styled from "styled-components";
import { BsPlayCircleFill } from "react-icons/bs";
import Image from "next/image";
import { Row, Col } from "antd";

const HomeSectionA = ({ home }) => {
  const { HomeSectionAimage } = home.data.attributes;
  return (
    <Wrapper>
      <Row gutter={16} justify="center" align="middle">
        <Col sm={24} md={12} xl={12} data-aos="fade-up">
          <BsPlayCircleFill className="icon" />
          <p>
            Best in class shopping experience and storytelling platform that
            helps you to engage longer and more frequently with your consumers.
            Monetize live, pre-recorded and edited video and broadcast across
            your social channels.
          </p>
        </Col>
        <Col sm={24} md={12} xl={10} data-aos="fade-up">
          {" "}
          <Image
            alt="revo"
            src={HomeSectionAimage.data.attributes.url}
            // src="/images/Revo_image_homepage_Section_1.png"
            width={1200}
            height={750}
            objectFit="cover"
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 6rem 2rem;
  background-image: url("/images/circle.png");
  background-position: 0% 50%;
  background-repeat: no-repeat;
  margin: 0 auto;

  p {
    /* max-width: 45em; */
    font-family: "MontSemiBold", sans-serif;
    margin-top: 2rem;
    text-align: center;
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
  .icon {
    width: 64px;
    height: 64px;
    text-align: center;
  }
  @media (min-width: 992px) {
    background-position: 120% 50%;
    padding: 9rem 2rem;

    p {
      font-size: 2.2rem;
      text-align: left;
      margin-bottom: 0rem;
    }
  }
`;

export default HomeSectionA;
