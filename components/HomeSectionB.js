import Image from "next/image";
import styled from "styled-components";
import { Row, Col } from "antd";

const HomeSectionB = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <Row gutter={16}>
          <Col>
            {" "}
            <h3>
              The features
              <br /> you need
            </h3>
          </Col>
        </Row>
        <Row gutter={[48, 32]}>
          <Col sm={24} md={16}>
            <Row gutter={[32, 32]}>
              <Col sm={24} md={12}>
                <Image
                  alt="revo"
                  src="/images/cart.png"
                  width={49}
                  height={49}
                  objectFit="cover"
                  quality={100}
                  data-aos="zoom-in"
                />
                <p className="heading">
                  Direct e-Commerce
                  <br /> Integration
                </p>
                <p className="desc">
                  Our live shopping solution provides instant product sync,
                  seamless integration you’re your e-Commerce platform, and
                  instant checkout.{" "}
                </p>
              </Col>
              <Col sm={24} md={12}>
                {" "}
                <Image
                  alt="revo"
                  src="/images/eng.png"
                  width={49}
                  height={49}
                  objectFit="cover"
                  quality={100}
                  data-aos="zoom-in"
                />
                <p className="heading">
                  High <br />
                  Engagement
                </p>
                <p className="desc">
                  An immersive Live video experience that drives engagement,
                  discovery and community{" "}
                </p>
              </Col>
            </Row>
            <Row gutter={[32, 32]}>
              <Col sm={24} md={12} className="space">
                {" "}
                <Image
                  alt="revo"
                  src="/images/dollar.png"
                  width={49}
                  height={49}
                  objectFit="cover"
                  quality={100}
                  data-aos="zoom-in"
                />
                <p className="heading">
                  Frictionless <br />
                  Payment
                </p>
                <p className="desc">
                  Increase sales and conversion complete transactions in
                  one-click without ever leaving the show.{" "}
                </p>
              </Col>
              <Col sm={24} md={12} className="space">
                <Image
                  alt="revo"
                  src="/images/analytics.png"
                  width={83}
                  height={41}
                  objectFit="cover"
                  quality={100}
                  data-aos="zoom-in"
                />
                <p className="heading">
                  Real-Time
                  <br /> Analytics
                </p>
                <p className="desc">
                  Real-time analytics to maximize sales throughout the show.
                  Built in KPIs and fully branded ownership of enhanced
                  analytics and data.{" "}
                </p>
              </Col>
            </Row>
          </Col>
          <Col sm={24} md={8} className="imagecon">
            <Image
              alt="revo"
              src="/images/features.png"
              width={1200}
              height={750}
              objectFit="cover"
              quality={100}
            />
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 6rem 2rem;
  background: var(--clr-black);

  .imagecon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    font-size: 2.7rem;
  }

  .heading {
    font-size: 1.75rem;
    margin: 1rem 0;
  }

  .desc {
    font-size: 1.2rem;
  }

  h3,
  h4 {
    color: var(--clr-white);
  }
  .container {
    padding: 0 2rem;
    text-align: center;
  }

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    /* line-height: 1.3; */
    color: var(--clr-white);
  }

  @media (min-width: 992px) {
    padding: 9rem 2rem;

    .header {
      padding-left: 4rem;
    }

    .services-center {
      gap: 2.5rem;
    }

    h3 {
      font-size: 4.3rem;
    }

    .heading {
      font-size: 2rem;
    }

    .desc {
      font-size: 1.25rem;
    }
  }
`;
export default HomeSectionB;
