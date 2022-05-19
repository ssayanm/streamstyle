import Link from "next/link";
import { BsPlayCircle } from "react-icons/bs";
import styled from "styled-components";
import { Row, Col } from "antd";

const HomeSectionD = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <Row gutter={16} justify="center" align="middle">
          <Col data-aos="fade-up">
            <BsPlayCircle className="icon" />
            <h1 className="title">
              Integrate seamlessly into
              <br />
              your cart and payments
            </h1>
          </Col>
          <Row className="space" data-aos="fade-up">
            <Col sm={24} md={12} xl={8}>
              <p className="header">One-click install</p>
              <p className="info">
                Revo seamlessly integrates into your e-commerce platform syncing
                products, orders and payments automatically{" "}
              </p>
            </Col>
            <Col sm={24} md={12} xl={8}>
              <p className="header">Shopping cart integrations</p>
              <p className="info">
                Manage products and orders from any shop system with more than
                48 major shop platforms integrated.
              </p>
            </Col>
            <Col sm={24} md={12} xl={8}>
              <p className="header">Embedded payments</p>
              <p className="info">
                We offer fully integrated in-stream, one-click checkout. Choose
                from over 180 different supported payment providers or start
                with us as your preferred partner.
              </p>
            </Col>
          </Row>
        </Row>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* min-height: 50vh; */
  background: var(--clr-primary-1);
  background-image: url("/images/circle.png");
  background-position: -16% 120%;
  background-repeat: no-repeat;
  /* background-image: url("/images/circle.png"); */
  /* background-repeat: no-repeat; */
  padding: 6rem 2rem;
  margin: 0 auto;
  text-align: center;

  p {
    font-size: 1.75rem;
  }

  .icon {
    width: 64px;
    height: 64px;
    margin: 0 auto;
    display: flex;
    margin-bottom: 2rem;
  }

  .header {
    font-size: 1.75rem;
    font-family: "MontSemiBold", sans-serif;
  }

  .info {
    font-size: 1.2rem;
  }

  @media (min-width: 992px) {
    padding: 9rem 2rem;
    .ant-col {
      padding: 0 2rem;
    }

    .icon {
      width: 113px;
      height: 113px;
    }

    h3 {
      margin-bottom: 1.5rem;
      font-size: 4.3rem;
    }
    h4 {
      font-size: 39.5px;
      font-family: "MontLight", sans-serif;
      margin-bottom: 1.5rem;
      letter-spacing: normal;
      line-height: 1.1;
    }
    .header {
      font-size: 30px;
    }

    .info {
      font-size: 25px;
    }
  }
`;

export default HomeSectionD;
