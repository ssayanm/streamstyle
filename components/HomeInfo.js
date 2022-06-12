import React from "react";
import styled from "styled-components";
import { BsPlayFill } from "react-icons/bs";
import { Row, Col } from "antd";
import ReactPlayer from "react-player/lazy";

const HomeInfo = ({ sales }) => {
  return (
    <Wrapper>
      <Row
        gutter={[48, 48]}
        justify="center"
        align="middle"
        className="section"
      >
        <Col sm={24} md={12} data-aos="zoom-in" className="onlydesktop">
          <ReactPlayer
            url={sales.data[15].attributes.image.data.attributes.url}
            // url={"/videos/setstudio.mp4"}
            playing={false}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            // image="/images/herovideo.jpg"
          />
        </Col>
        <Col sm={24} md={12} data-aos="fade-up">
          <div className="iconbar">
            <BsPlayFill className="icon" />
            <h1 className="title">{sales.data[15].attributes.heading}</h1>
          </div>

          <p>{sales.data[15].attributes.subHeading}</p>
        </Col>
        <Col sm={24} md={12} data-aos="zoom-in" className="onlymobile">
          <ReactPlayer
            url={sales.data[15].attributes.image.data.attributes.url}
            // url={"/videos/setstudio.mp4"}
            playing={false}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            // image="/images/herovideo.jpg"
          />
        </Col>
      </Row>

      <Row
        className="section-a"
        gutter={[48, 32]}
        justify="center"
        align="middle"
      >
        <Col sm={24} md={12} data-aos="fade-up">
          <div className="iconbar">
            <BsPlayFill className="icon" />
            <h1 className="title">{sales.data[10].attributes.heading}</h1>
          </div>

          <p>{sales.data[10].attributes.subHeading}</p>
        </Col>
        <Col sm={24} md={12} className="" data-aos="zoom-in">
          <ReactPlayer
            url={sales.data[10].attributes.image.data.attributes.url}
            // url={"/videos/Live Chat & Moderation.mp4"}
            playing={false}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            // image="/images/herovideo.jpg"
            // quality={100}
          />
        </Col>
      </Row>

      <Row
        className="section-b"
        gutter={[48, 32]}
        justify="center"
        align="middle"
      >
        <Col sm={24} md={12} className="onlydesktop" data-aos="zoom-in">
          <ReactPlayer
            url={sales.data[2].attributes.image.data.attributes.url}
            // url={"/videos/Frictionless Checkout.mp4"}
            playing={false}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            // image="/images/herovideo.jpg"
            // quality={100}
          />
        </Col>
        <Col sm={24} md={12} data-aos="fade-up">
          <div className="iconbar">
            <BsPlayFill className="icon" />
            <h1 className="title"> {sales.data[2].attributes.heading}</h1>
          </div>

          <p>{sales.data[2].attributes.subHeading}</p>
        </Col>
        <Col sm={24} md={12} className="onlymobile" data-aos="zoom-in">
          <ReactPlayer
            url={sales.data[2].attributes.image.data.attributes.url}
            // url={"/videos/Frictionless Checkout.mp4"}
            playing={false}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            // image="/images/herovideo.jpg"
            // quality={100}
          />
        </Col>
      </Row>

      <div className="section-center">
        <Row
          className="section-d"
          justify="center"
          align="middle"
          gutter={[32, 32]}
        >
          <Col sm={24} md={14} data-aos="fade-up">
            <div className="iconbar">
              <BsPlayFill className="icon" />
              <h1 className="title">{sales.data[3].attributes.heading}</h1>
            </div>
            <p className="para">{sales.data[3].attributes.subHeading}</p>
          </Col>
          <Col sm={24} md={10} className="" data-aos="zoom-in">
            <ReactPlayer
              url={sales.data[3].attributes.image.data.attributes.url}
              // url={"/videos/Virtual Try On.mp4"}
              playing={false}
              muted={true}
              controls={true}
              width="100%"
              height="100%"
              // image="/images/herovideo.jpg"
              // quality={100}
            />
          </Col>
        </Row>
      </div>

      <Row
        className="section-b"
        gutter={[48, 32]}
        justify="center"
        align="middle"
      >
        <Col sm={24} md={12} className="onlydesktop" data-aos="zoom-in">
          <ReactPlayer
            url={sales.data[1].attributes.image.data.attributes.url}
            // url={"/videos/Real-Time Analytics.mp4"}
            playing={false}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            // image="/images/herovideo.jpg"
            // quality={100}
          />
        </Col>
        <Col sm={24} md={12} data-aos="fade-up">
          <div className="iconbar">
            <BsPlayFill className="icon" />
            <h1 className="title">{sales.data[1].attributes.heading}</h1>
          </div>

          <p>{sales.data[1].attributes.subHeading}</p>
        </Col>
        <Col sm={24} md={8} className="onlymobile">
          <ReactPlayer
            url={sales.data[1].attributes.image.data.attributes.url}
            // url={"/videos/Virtual Try On.mp4"}
            playing={false}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            // image="/images/herovideo.jpg"
            // quality={100}
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0 1rem;

  .title {
    text-align: center;
    font-size: 2rem;
  }

  .section {
    padding: 2rem 1rem;
  }

  .section-a {
    background: var(--clr-black);
    color: var(--clr-white);
    padding: 2rem 1rem;

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
    padding: 2rem 1rem;
    p {
      color: var(--clr-black);
    }
  }

  .section-c {
    background: var(--clr-black);
    color: var(--clr-white);
    padding: 2rem 1rem;

    p {
      color: var(--clr-white);
    }

    .title {
      color: var(--clr-white);
    }
  }
  .section-d {
    margin: 2rem 0;
    background: var(--clr-primary-1);
    height: max-content;
    padding: 2rem 1rem;
    border-radius: 2rem;
    color: var(--clr-white);

    .title,
    p {
      color: var(--clr-white);
    }
  }

  p {
    /* max-width: 45em; */
    /* font-family: "MontSemiBold", sans-serif; */
    margin-top: 0rem;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 0rem;
  }

  .iconbar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .icon {
      width: 2rem;
      height: 2rem;
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 992px) {
    .section,
    .section-a,
    .section-b,
    .section-c {
      padding: 6rem;
    }

    .section .ant-col {
      padding: 1rem 0;
    }

    .section-d {
      /* margin: 0rem 0 5rem 0; */
      background: var(--clr-primary-1);

      padding: 6rem 4rem;
      border-radius: 2rem;
    }

    p {
      text-align: left;
      margin-bottom: 0rem;
      margin-top: 0rem;
    }

    .title {
      text-align: left;
      font-size: 3rem;
    }

    .iconbar {
      justify-content: flex-start;
      align-items: baseline;
      flex-direction: row;
    }
  }
`;

export default HomeInfo;
