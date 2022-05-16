import React from "react";
import styled from "styled-components";
import { BsPlayFill } from "react-icons/bs";
import Image from "next/image";
import { Row, Col } from "antd";
import ReactPlayer from "react-player/lazy";

const Creators = () => {
  return (
    <Wrapper>
      <Row
        gutter={[32, 48]}
        justify="center"
        align="middle"
        className="section"
      >
        <Col sm={24} md={12}>
          <h1 className="title">Unleash The Power Of Live Commerce</h1>
          <p>Unleash The Power Of Live Commerce</p>
        </Col>
        <Col sm={24} md={12} className="widthfull">
          <div className="player-wrapper">
            <ReactPlayer
              url={"/videos/homevideo.mp4"}
              playing={true}
              muted={true}
              controls={true}
              width="100%"
              height="100%"
              image="/images/herovideo.jpg"
              className="react-player"
            />
          </div>
        </Col>
        <Col sm={24} md={12}>
          <div className="iconbar">
            <BsPlayFill className="icon" />
            <h1 className="title">Comprehensive Studio Platform</h1>
          </div>
          <p>
            Features an all-in-one control panel to set up shows, polls, banners
            and has both host, moderator and creator functionality. Seamlessly
            sell products via comprehensive live-streams
          </p>
        </Col>
        <Col sm={24} md={12}>
          <Image
            alt="revo"
            src="/images/Studio.jpg"
            width={900}
            height={563}
            objectFit="cover"
            quality={100}
          />
        </Col>
      </Row>

      <Row
        className="section-a"
        gutter={[48, 32]}
        justify="center"
        align="middle"
      >
        <Col sm={24} md={12} className="onlydesktop">
          <ReactPlayer
            url={"/videos/Live Chat & Moderation.mp4"}
            playing={true}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            image="/images/herovideo.jpg"
            className="react-player1"
            quality={100}
          />
        </Col>
        <Col sm={24} md={12}>
          <div className="iconbar">
            <BsPlayFill className="icon" />
            <h1 className="title">Live Chat Moderation</h1>
          </div>

          <p>Connect with your customers in real-time using live-chat</p>
        </Col>
        <Col sm={24} md={12} className="onlymobile">
          <ReactPlayer
            url={"/videos/Live Chat & Moderation.mp4"}
            playing={true}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            image="/images/herovideo.jpg"
            className="react-player1"
            quality={100}
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
          <div className="iconbar">
            <BsPlayFill className="icon" />
            <h1 className="title">Get Paid</h1>
          </div>

          <p>
            For every sale you are paid directly to your bank account through
            our payment platform. Never wait for checks again, go live and get
            paid!
          </p>
        </Col>
        <Col sm={24} md={12}>
          <Image
            alt="revo"
            src="/images/paymentprocess.png"
            width={1441}
            height={960}
            objectFit="cover"
            quality={100}
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
          <Col sm={24} md={10} className="onlydesktop">
            <div className="fimage1">
              <ReactPlayer
                url={"/videos/Virtual Try On.mp4"}
                playing={true}
                muted={true}
                controls={true}
                width="100%"
                height="100%"
                image="/images/herovideo.jpg"
                className="react-player1"
                quality={100}
              />
            </div>
          </Col>
          <Col sm={24} md={14}>
            <div className="iconbar">
              <BsPlayFill className="icon" />
              <h1 className="title">Virtual AI Try-On</h1>
            </div>
            <p className="para">
              Allow consumers to try-on products virtually reducing, returns and
              increasing customer satisfaction
            </p>
          </Col>
          <Col sm={24} md={8} className="onlymobile">
            <ReactPlayer
              url={"/videos/Virtual Try On.mp4"}
              playing={true}
              muted={true}
              controls={true}
              width="100%"
              height="100%"
              image="/images/herovideo.jpg"
              className="react-player1"
              quality={100}
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
        <Col sm={24} md={12}>
          <div className="iconbar">
            <BsPlayFill className="icon" />
            <h1 className="title">Real-Time Analytics</h1>
          </div>
          <p>
            On-demand analytics dashboard on sales, engagement and more from
            your live dashboard. Analytics can be used during live events to
            help promote products, create excitement and drive sales. Extract
            actionable customer insights with first-party user data
          </p>
        </Col>
        <Col sm={24} md={12}>
          <ReactPlayer
            url={"/videos/Real-Time Analytics.mp4"}
            playing={true}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            image="/images/herovideo.jpg"
            className="react-player1"
            quality={100}
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
    margin-top: 0rem;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 0rem;
  }

  .title {
    font-size: 2rem;
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

      font-size: 2rem;
    }
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
    /* padding: 9rem 2rem; */

    .section,
    .section-a,
    .section-b,
    .section-c {
      padding: 6rem;
    }

    .section-d {
      margin: 5rem 0 5rem 0;
      background: var(--clr-primary-1);

      padding: 6rem 4rem;
      border-radius: 2rem;
    }

    .fimage {
      transform: translateY(-17rem);
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

    .greenbox {
      width: 35rem;
      height: 25rem;
    }

    .iconbar {
      justify-content: flex-start;
      align-items: baseline;
      flex-direction: row;
    }
  }
`;

export default Creators;
