import React from "react";
import styled from "styled-components";
import { BsPlayCircleFill } from "react-icons/bs";
import Image from "next/image";
import { Row, Col } from "antd";

const Brands = () => {
  return (
    <Wrapper>
      <Row
        gutter={[32, 32]}
        justify="center"
        align="middle"
        className="section"
      >
        <Col sm={24} md={12}>
          <h1 className="title">
            Sell to your customers directly with shoppable videos
          </h1>
          <p>
            Connect with thousands of consumers with single or multi-screen
            premium video quality and simulcast your stream to multiple
            locations at the same time
          </p>
        </Col>
        <Col sm={24} md={12}>
          <Image
            alt="revo"
            src="/images/herovideo.jpg"
            width={826}
            height={530}
            objectFit="cover"
          />
        </Col>
        <Col sm={24} md={12}>
          <h1 className="title">Easy to Use</h1>
          <p>
            One-click. Go Live - in as little as 5 minutes your brand can be
            live
          </p>
        </Col>
        <Col sm={24} md={12}>
          <div className="greenbox">
            <h1 className="title">Easy to Use</h1>
          </div>
        </Col>

        <Col sm={24} md={12}>
          <Image
            alt="revo"
            src="/images/Catalog_sync.jpg"
            width={900}
            height={506}
            objectFit="cover"
          />
        </Col>
        <Col sm={24} md={12}>
          <h1 className="title">Catalog Sync</h1>
          <p>
            Automatically connect and sync to any e-commerce platform keeping
            your products up to date and available for your shows
          </p>
        </Col>
      </Row>

      <Row
        className="section-a"
        gutter={[48, 32]}
        justify="center"
        align="middle"
      >
        <Col sm={24} md={12}>
          <div className="icons">
            <BsPlayCircleFill className="icon" />
          </div>
          <h1 className="title">Live & VOD</h1>
          <p>
            Create new live shows and monetize existing VOD content in a new and
            engaging way
          </p>
        </Col>
        <Col sm={24} md={12}>
          {" "}
          <Image
            alt="revo"
            src="/images/Live_and_vod.png"
            width={900}
            height={602}
            objectFit="cover"
          />
        </Col>
      </Row>

      <Row
        className="section-b"
        gutter={[48, 32]}
        justify="center"
        align="middle"
      >
        <Col sm={24} md={12} className="onlydesktop">
          <Image
            alt="revo"
            src="/images/Weekly_Schedule.jpg"
            width={900}
            height={478}
            objectFit="cover"
          />
        </Col>
        <Col sm={24} md={12}>
          <div className="icons">
            {" "}
            <BsPlayCircleFill className="icon" />
          </div>
          <h1 className="title">Create A Weekly Show Schedule</h1>
          <p>
            Leverage existing talent to create new weekly branded shows. 
            Develop a slate of programming tied to live shopping events that
            drive consumers back to your properties and enhance engagement and
            activation.
          </p>
        </Col>
        <Col sm={24} md={12} className="onlymobile">
          <Image
            alt="revo"
            src="/images/Weekly_Schedule.jpg"
            width={900}
            height={478}
            objectFit="cover"
          />
        </Col>
      </Row>
      <div className="section-center">
        <Row
          className="section-d"
          // gutter={[32, 32]}
          justify="center"
          // align="middle"
        >
          <Col sm={24} md={16}>
            <h1 className="title">Virtual AI Try-On </h1>
            <p>
              Allow consumers to try-on products virtually reducing returns and
              increasing customer satisfaction
            </p>
          </Col>
          <Col sm={24} md={8}>
            <div className="fimage">
              <Image
                alt="revo"
                src="/images/Virtual_try_on.png"
                width={400}
                height={753}
                objectFit="cover"
              />
            </div>
          </Col>
        </Row>
      </div>

      <Row
        className="section-c"
        gutter={[48, 32]}
        justify="center"
        align="middle"
      >
        <Col sm={24} md={12} className="onlydesktop">
          <Image
            alt="revo"
            src="/images/Frictionles_checkout.jpg"
            width={900}
            height={520}
            objectFit="cover"
          />
        </Col>
        <Col sm={24} md={12}>
          <div className="icons">
            <BsPlayCircleFill className="icon" />
          </div>

          <h1 className="title">Frictionless Checkout</h1>
          <p>
            One-click in-stream checkout connected to 180+ payment providers
          </p>
        </Col>
        <Col sm={24} md={12} className="onlymobile">
          <Image
            alt="revo"
            src="/images/Frictionles_checkout.jpg"
            width={900}
            height={520}
            objectFit="cover"
          />
        </Col>
      </Row>

      <Row
        className="section-b"
        gutter={[48, 32]}
        justify="center"
        align="middle"
      >
        <Col sm={24} md={12}>
          <div className="icons">
            {" "}
            <BsPlayCircleFill className="icon" />
          </div>
          <h1 className="title">Real-Time Analytics</h1>
          <p>
            On-demand analytics dashboard on sales, engagement and more from
            your live dashboard. Analytics can be used during live events to
            help promote products, create excitement and drive sales. Extract
            actionable customer insights with first-party user data
          </p>
        </Col>
        <Col sm={24} md={12}>
          <Image
            alt="revo"
            src="/images/Real_time_analytics.png"
            width={1874}
            height={1080}
            objectFit="cover"
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* padding: 6rem 2rem; */

  .section-d {
    margin: 2rem 0;
    background: var(--clr-primary-1);
    height: max-content;
    padding: 2rem 0.5rem;
    border-radius: 2rem;
  }
  .title {
    text-align: center;
  }

  .section {
    padding: 2rem 0.5rem;
  }

  .section-a {
    background: var(--clr-black);
    color: var(--clr-white);
    padding: 2rem 0.5rem;

    p {
      color: var(--clr-white);
    }
    .title {
      color: var(--clr-white);
    }
  }

  .section-b {
    background: var(--clr-white);
    color: var(--clr-black);
    padding: 2rem 0.5rem;
    p {
      color: var(--clr-black);
    }
  }

  .section-c {
    background: var(--clr-black);
    color: var(--clr-white);
    padding: 2rem 0.5rem;

    p {
      color: var(--clr-white);
    }

    .title {
      color: var(--clr-white);
    }
  }

  p {
    /* max-width: 45em; */
    /* font-family: "MontSemiBold", sans-serif; */
    margin-top: 2rem;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .title {
    font-size: 2rem;
  }

  .icons {
    text-align: center;
  }
  .icon {
    width: 64px;
    height: 64px;
    margin-bottom: 2rem;
  }

  .fimage {
    transform: translateY(1rem);
  }

  .greenbox {
    background: var(--clr-primary-1);
    border: solid 1px #000;
    width: max-content;
    margin: 0 auto;
    padding: 2rem 1rem 0rem 1rem;
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }

  @media (min-width: 992px) {
    /* padding: 9rem 2rem; */

    .section,
    .section-a,
    .section-b,
    .section-c {
      padding: 4rem 6rem;
    }

    .section-d {
      margin: 12rem 0 15rem 0;
      background: var(--clr-primary-1);
      height: 23rem;
      padding: 6rem 4rem;
      border-radius: 2rem;
    }

    .fimage {
      transform: translateY(-17rem);
    }

    p {
      text-align: left;
      margin-bottom: 0rem;
    }

    .title {
      text-align: left;
      font-size: 3rem;
    }
    .icons {
      text-align: left;
    }
    .greenbox {
      width: 35rem;
      height: 25rem;
    }
  }
`;

export default Brands;
