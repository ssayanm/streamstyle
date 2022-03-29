import { Row, Col } from "antd";
import styled from "styled-components";
import Link from "next/link";
import { social } from "../utils/constants";
import Image from "next/image";

const HomeHeroN = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <Row
          gutter={[16, 16]}
          justify="center"
          align="middle"
          className="herorow"
        >
          <Col sm={4} md={6} lg={8} xl={14}>
            <article className="content">
              <h1 className="title">
                One Platform For Video Engagement & Live Commerce
              </h1>
              <p>
                Use the most powerful live and VOD shopping platform with a
                frictionless buying experience.
              </p>
              <div className="onlymobile">
                <Image
                  alt="revo"
                  src="/images/herovideo.jpg"
                  width={526}
                  height={530}
                  objectFit="cover"
                  // placeholder="blur"
                />
              </div>
              <div className="btn-section">
                <Link href="/">
                  <a className="btn-alt btn-shopify">
                    {" "}
                    Add to your shopify store
                  </a>
                </Link>
                <Link href="/">
                  <a className="btn btn-start"> Get Started</a>
                </Link>
              </div>

              <p className="smallfont">Available now on all platforms</p>
              <ul className="social-icons">
                {social.map((socialIcon) => {
                  const { id, url, icon } = socialIcon;
                  return (
                    <li key={id}>
                      <a href={url} target="_blank">
                        {icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </article>
          </Col>
          <Col span={10}>
            <div className="onlydesktop">
              <Image
                alt="revo"
                src="/images/herovideo.jpg"
                width={826}
                height={530}
                objectFit="cover"
              />
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-1);

  margin-top: -9rem;

  /* padding: 2rem 0; */

  .herorow {
    padding-top: 10rem;
  }

  p {
    margin-top: 2rem;
    font-size: 1.75rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  .smallfont {
    font-size: 1.25rem;
  }
  .btn-shopify {
    margin-top: 1rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .btn-start {
    text-align: center;
    width: 12rem;
    margin: 0 auto;
  }

  .btn-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    text-align: center;
  }
  @media (min-width: 992px) {
    padding-top: 7rem;
    /* height: calc(100vh - 5rem); */
    height: 100vh;
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
    .btn-shopify {
      margin-top: 0rem;
      text-align: center;
      margin-bottom: 0rem;
    }

    .btn-start {
      text-align: center;
      width: auto;
      margin: 0 auto;
    }

    .btn-section {
      display: flex;
      width: 31rem;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 2rem;
    }
  }
`;

export default HomeHeroN;
