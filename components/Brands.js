import styled from "styled-components";
import { BsPlayFill } from "react-icons/bs";
import Image from "next/image";
import { Row, Col } from "antd";
import ReactPlayer from "react-player/lazy";
import { useAppContext } from "../context/app_context";
import useSWR from "swr";
import Loading from "./Loading";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Brands = () => {
  // const { data, error } = useSWR(
  //   `${process.env.url}/api/how-it-works`,
  //   fetcher
  // );

  // if (error) return <div>Failed to load</div>;
  // if (!data)
  //   return (
  //     <div>
  //       <Loading />
  //     </div>
  //   );
  // const { heading, subHeading } = brands.data.attributes;
  // const { howItWorks } = useAppContext();

  // const temp = data.data[7].filter((item) => {
  //   return item.id === 9;
  // });

  // console.log(data.data[7].attributes.heading);

  return (
    <Wrapper>
      <Row
        gutter={[48, 48]}
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
        <Col sm={24} md={12} className="widthfull">
          <div className="player-wrapper1">
            <ReactPlayer
              url={"/videos/homevideo.mp4"}
              playing={true}
              muted={true}
              controls={true}
              width="100%"
              height="100%"
              image="/images/herovideo.jpg"
              quality={100}
            />
          </div>
        </Col>
        <Col sm={24} md={12}>
          <div className="iconbar">
            <BsPlayFill className="icon" />
            <h1 className="title">Easy to Use</h1>
          </div>

          <p>
            One-click. Go Live - in as little as 5 minutes
            <br /> your brand can be live
          </p>
        </Col>
        <Col sm={24} md={12}>
          <Image
            alt="revo"
            src="/images/Studio1.png"
            width={1440}
            height={900}
            objectFit="cover"
            quality={100}
          />
        </Col>

        <Col sm={24} md={12} className="onlydesktop">
          <ReactPlayer
            url={"/videos/catalog_sync.mp4"}
            playing={true}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            image="/images/herovideo.jpg"
            quality={100}
          />
        </Col>
        <Col sm={24} md={12}>
          <div className="iconbar">
            <BsPlayFill className="icon" />
            <h1 className="title">Catalog Sync</h1>
          </div>

          <p>
            Automatically connect and sync to any e-commerce platform keeping
            your products up to date and available for your shows
          </p>
        </Col>
        <Col sm={24} md={12} className="onlymobile">
          <ReactPlayer
            url={"/videos/catalog_sync.mp4"}
            playing={true}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            image="/images/herovideo.jpg"
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
        <Col sm={24} md={12}>
          <div className="iconbar">
            <BsPlayFill className="icon" />
            <h1 className="title">Live & VOD</h1>
          </div>

          <p>
            Create new live shows and monetize existing VOD content in a new and
            engaging way
          </p>
        </Col>
        <Col sm={24} md={12}>
          <ReactPlayer
            url={"/videos/Live _ VOD.mp4"}
            playing={true}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            image="/images/herovideo.jpg"
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
        <Col sm={24} md={12} className="onlydesktop">
          <Image
            alt="revo"
            src="/images/Weekly_Schedule.jpg"
            width={900}
            height={390}
            objectFit="cover"
            quality={100}
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
            quality={100}
          />
        </Col>
      </Row>
      <div className="section-center">
        <Row
          className="section-d"
          gutter={[32, 32]}
          justify="center"
          align="middle"
        >
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
          <Col sm={24} md={10}>
            <ReactPlayer
              url={"/videos/Virtual Try On.mp4"}
              playing={true}
              muted={true}
              controls={true}
              width="100%"
              height="100%"
              image="/images/herovideo.jpg"
              quality={100}
            />
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
          <ReactPlayer
            url={"/videos/Frictionless Checkout.mp4"}
            playing={true}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            image="/images/herovideo.jpg"
            quality={100}
          />
        </Col>
        <Col sm={24} md={12}>
          <div className="iconbar">
            <BsPlayFill className="icon" />
            <h1 className="title">Frictionless Checkout</h1>
          </div>

          <p>
            One-click in-stream checkout connected to 180+ payment providers
          </p>
        </Col>
        <Col sm={24} md={12} className="onlymobile">
          <ReactPlayer
            url={"/videos/Frictionless Checkout.mp4"}
            playing={true}
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            image="/images/herovideo.jpg"
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
            <h1 className="title">Real-Time Analytics</h1>
          </div>

          <h1 className="title"></h1>
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
            quality={100}
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* padding: 6rem 2rem; */

  .para {
    /* width: 30rem; */
  }

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
    margin-top: 0rem;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 0rem;
  }

  .title {
    font-size: 2rem;
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

    .section .ant-col {
      padding: 1rem 0;
    }

    .section-d {
      margin: 5rem 0 5rem 0;
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

export default Brands;
