import React from "react";
import styled from "styled-components";
import { BsPlayCircleFill } from "react-icons/bs";
import Image from "next/image";
import { Row, Col } from "antd";

const Marketers = () => {
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
            One Platform For Video Engagement & Live Commerce
          </h1>
          <p>Start a live sales channel to monetize your hosts’ parties</p>
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
          <h1 className="title">Create & Host Live Events</h1>
          <p>
            Features an all-in-one control panel to easily set up and host
            events, send invitations, integrate polls and banners to help spark
            conversations, and acquire new party hosts!
          </p>
        </Col>
        <Col sm={24} md={12}>
          <div className="greenbox">
            <h1 className="title">Use clip rom Tocara Video</h1>
          </div>
        </Col>
      </Row>

      <Row
        className="section-a"
        gutter={[48, 32]}
        justify="center"
        align="middle"
      >
        <Col sm={24} md={12} className="onlydesktop">
          <div className="greenbox">
            <h1 className="title">Need video of live chat in motion</h1>
          </div>
        </Col>
        <Col sm={24} md={12}>
          <div className="icons">
            <BsPlayCircleFill className="icon" />
          </div>
          <h1 className="title">Live Chat Moderation</h1>
          <p>
            Chat live with your customers, answer questions, and interact in
            real-time driving activation and sales
          </p>
        </Col>
        <Col sm={24} md={12} className="onlymobile">
          <div className="greenbox">
            <h1 className="title">Need video of live chat in motion</h1>
          </div>
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
          <h1 className="title">Frictionless Checkout</h1>
          <p>
            Our frictionless payment process makes it easy for guests to
            purchase without ever leaving your part. No more calling and
            emailing to collect orders!
          </p>
        </Col>
        <Col sm={24} md={12} className="">
          <div className="greenbox">
            <h1 className="title">
              Use existing show that features checkout - pull from Revo Video{" "}
            </h1>
          </div>
        </Col>
      </Row>
      <div className="section-center">
        <Row
          className="section-d"
          // gutter={[32, 32]}
          justify="center"
          // align="middle"
        >
          <Col sm={24} md={8} className="onlydesktop">
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
          <Col sm={24} md={16}>
            <h1 className="title">Virtual AI Try-On </h1>
            <p>
              Allow consumers to try-on products virtually reducing returns and
              increasing customer satisfaction
            </p>
          </Col>
          <Col sm={24} md={8} className="onlymobile">
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
    /* width: max-content; */
    margin: 0 auto;
    padding: 2rem 1rem 0rem 1rem;
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;

    .title {
      text-align: center;
      color: var(--clr-black);
    }
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

export default Marketers;
