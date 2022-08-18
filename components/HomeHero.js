import { Row, Col } from "antd";
import styled from "styled-components";
// import ReactPlayer from "react-player/lazy";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const HomeHero = ({ home }) => {
  const { heading, subHeading, heroVideo } = home.data.attributes;

  return (
    <Wrapper>
      <div className="section-center">
        <Row
          gutter={[48, 32]}
          justify="center"
          align="middle"
          className="herorow"
        >
          <Col sm={24} md={24} lg={12} data-aos="fade-up">
            <article className="content">
              <h1 className="title">{heading}</h1>
              <p>{subHeading}</p>
              <div className="onlymobile">
                <div className="player-wrapper">
                  <ReactPlayer
                    url={
                      heroVideo.data.attributes.url
                        ? heroVideo.data.attributes.url
                        : "/videos/Streamstyle_final.m4v"
                    }
                    playing={true}
                    muted={true}
                    controls={true}
                    width="100%"
                    height="100%"
                    // image="/images/herovideo.jpg"
                    className="react-player"
                  />
                </div>
              </div>
            </article>
          </Col>
          <Col sm={24} md={24} lg={12} data-aos="zoom-in">
            <div className="onlydesktop">
              <div className="player-wrapper">
                <ReactPlayer
                  url={
                    heroVideo.data.attributes.url
                      ? heroVideo.data.attributes.url
                      : "/videos/homevideo.mp4"
                  }
                  // url={"/videos/homevideo.mp4"}
                  playing={true}
                  muted={true}
                  controls={true}
                  width="100%"
                  height="100%"
                  // image="/images/herovideo.jpg"
                  className="react-player"
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-1);
  padding: 4rem 2rem;
  p {
    margin-top: 2rem;
    font-size: 1.75rem;
    text-align: center;
    margin-bottom: 2rem;
    color: var(--clr-white);
  }
  .smallfont {
    font-size: 1.25rem;
  }

  .title {
    text-align: center;
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    padding: 4rem 2rem;

    .title {
      text-align: left;
    }

    p {
      font-size: 1.75rem;
      text-align: left;
    }
    .smallfont {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1367px) {
    padding: 5rem 2rem;
  }
`;

export default HomeHero;
