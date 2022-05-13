import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Row, Col } from "antd";
import { GoPrimitiveDot } from "react-icons/go";

const HomeSectionC = () => {
  return (
    <Wrapper>
      <Row gutter={16} justify="center" align="middle">
        <Col sm={24} md={16} xl={12}>
          {" "}
          <div className="onlydesktop">
            <Image
              alt="revo"
              src="/images/Revo_image_homepage_Section_3.png"
              width={1200}
              height={750}
              objectFit="cover"
              quality={100}
            />
          </div>
        </Col>
        <Col sm={24} md={16} xl={12}>
          <article className="content" data-aos="fade-left">
            <h3 className="title">
              The Future Of <br />
              Shopping Is LIVE
            </h3>
            <p>
              Elevate your brand’s online experience with the Revo Video
              platform
            </p>

            <div className="greeniconbar">
              <GoPrimitiveDot className="greendot" />
              <h5>All in one platform</h5>
            </div>

            <p>
              Simple to use yet powerful show set up and full recording studio
              with automated features that keep audiences engaged and buying
            </p>
            <div className="greeniconbar leftcontent1">
              <GoPrimitiveDot className="greendot" />

              <h5>One-To-Many</h5>
            </div>

            <p className="leftcontent1">
              Invite experts, co-hosts, and even fans to participate in your
              live stream while thousands of consumers watch and interact{" "}
            </p>
            <div className="greeniconbar">
              <GoPrimitiveDot className="greendot" />

              <h5>Shop-in-Video</h5>
            </div>

            <p>
              Our integrated payment platform, customers can buy instantly,
              without leaving the experience{" "}
            </p>
          </article>
          <div className="onlymobile">
            <Image
              alt="revo"
              src="/images/Revo_image_homepage_Section_3.png"
              width={1200}
              height={750}
              objectFit="cover"
              quality={100}
            />
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 6rem 2rem;

  background-image: url("/images/circle.png");
  background-position: -16% 50%;
  background-repeat: no-repeat;

  .title {
    text-align: center;
  }

  h5 {
    font-size: 1.5rem;
    font-family: "MontSemiBold", sans-serif;
    text-align: center;
  }
  p {
    /* max-width: 45em; */
    font-family: "MontSemiBold", sans-serif;
    text-align: center;
    font-size: 1.2rem;
  }
  .icon {
    width: 64px;
    height: 64px;
  }

  .greeniconbar {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    /* flex-direction: column; */

    .greendot {
      width: 1.5rem;
      height: 1.25rem;
    }
  }

  @media (min-width: 992px) {
    padding: 9rem 2rem;

    .greeniconbar {
      justify-content: flex-start;
      align-items: baseline;
      flex-direction: row;
    }
    .title {
      text-align: left;
    }

    h5 {
      font-size: 1.75rem;
      text-align: left;
    }
    p {
      text-align: left;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }

    .content {
      padding-left: 5rem;
      padding-right: 4rem;
    }

    .leftcontent {
      padding-left: 5rem;
      padding-right: 1rem;
    }

    .left-space {
      padding-left: 2rem;
    }
  }
`;

export default HomeSectionC;
