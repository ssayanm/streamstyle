import React from "react";
import styled from "styled-components";
import { BsPlayFill } from "react-icons/bs";
import Image from "next/image";
import { Row, Col } from "antd";
import ReactPlayer from "react-player/lazy";

const Publishers = () => {
  return (
    <Wrapper>
      <Row
        gutter={[32, 32]}
        justify="center"
        align="middle"
        className="section"
      >
        <Col sm={24} md={12}>
          <h1 className="title">Improve Your Monetization Efficiency</h1>
          <p>
            Transform content consumption and create new opportunities to
            monetize your library. Create fully branded shows, sell
            sponsorships, insert pre-roll and drive product or merch sales via
            our One-click payment platform
          </p>
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
            <h1 className="title">Allow Consumers To Shop What They Love</h1>
          </div>

          <p>
            Create new catalogs of products tied to existing videos or shows
            thus creating a new way for consumers to engage with your content,
            talent, share and shop! Automatically connect and sync to any
            e-commerce platform or internal ERP systems, keeping your products
            up to date and always in sync.
          </p>
        </Col>
        <Col sm={24} md={12}>
          <Image
            alt="revo"
            src="/images/Catalog_sync.jpg"
            width={1649}
            height={929}
            objectFit="cover"
          />
        </Col>

        <Col sm={24} md={12} className="onlydesktop">
          <Image
            alt="revo"
            src="/images/Weekly_Schedule.jpg"
            width={900}
            height={390}
            objectFit="cover"
          />
        </Col>
        <Col sm={24} md={12}>
          <div className="iconbar">
            <BsPlayFill className="icon" />
            <h1 className="title">Create A Weekly Show Schedule</h1>
          </div>

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
            height={390}
            objectFit="cover"
          />
        </Col>
      </Row>

      <Row
        className="section-a"
        gutter={[48, 32]}
        justify="center"
        align="middle"
      >
        <Col sm={24} md={12}>
          <div className="iconbar">
            <BsPlayFill className="icon" />
            <h1 className="title">Live & VOD</h1>
          </div>

          <p>
            Create live and VOD shoppable shows that you can re-distribute
            within your ecosystem, use for promotional efforts,  and/or
            syndicate across other platforms and marketplaces
          </p>
        </Col>
        <Col sm={24} md={12}>
          {" "}
          <Image
            alt="revo"
            src="/images/Live _ VOD.gif"
            width={852}
            height={479}
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
        {" "}
        <Col sm={24} md={12} className="onlydesktop">
          <Image
            alt="revo"
            src="/images/Checkout.gif"
            width={852}
            height={479}
            objectFit="cover"
          />
        </Col>
        <Col sm={24} md={12}>
          <div className="iconbar">
            <BsPlayFill className="icon" />
            <h1 className="title">Frictionless Checkout</h1>
          </div>
          <p>
            One-click in-stream checkout connected to 180+ payment providers and
            automated split payments for creators and talent
          </p>
        </Col>
        <Col sm={24} md={12} className="onlymobile">
          <Image
            alt="revo"
            src="/images/Checkout.gif"
            width={852}
            height={479}
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
            <div className="iconbar">
              <BsPlayFill className="icon" />
              <h1 className="title">Virtual AI Try-On</h1>
            </div>
            <p>
              Allow consumers to try-on products virtually reducing returns and
              increasing customer satisfaction
            </p>
          </Col>
          <Col sm={24} md={8}>
            <div className="fimage">
              <Image
                alt="revo"
                src="/images/Virtual Try On.gif"
                width={852}
                height={479}
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
          <Image
            alt="revo"
            src="/images/Real-Time Analytics.gif"
            width={852}
            height={479}
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

export default Publishers;
