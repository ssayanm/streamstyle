import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { BsPlayCircleFill } from "react-icons/bs";
import Image from "next/image";
import { Row, Col } from "antd";

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
            />
          </div>
        </Col>
        <Col sm={24} md={16} xl={12}>
          <article className="content">
            <h3 className="title">
              The Future Of <br />
              Shopping Is LIVE
            </h3>
            <p>
              Elevate your brand’s online experience with the Revo Video
              platform
            </p>
            <h5>All in one platform</h5>
            <p>
              Simple to use yet powerful show set up and full recording studio
              with automated features that keep audiences engaged and buying
            </p>
            <h5 className="content">One-To-Many</h5>
            <p className="content">
              Invite experts, co-hosts, and even fans to participate in your
              live stream while thousands of consumers watch and interact{" "}
            </p>
            <h5>Shop-in-Video</h5>
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

  h5 {
    font-size: 1.75rem;
    font-family: "MontSemiBold", sans-serif;
  }
  p {
    /* max-width: 45em; */
    font-family: "MontSemiBold", sans-serif;

    font-size: 1.2rem;
  }
  .icon {
    width: 64px;
    height: 64px;
  }

  @media (min-width: 992px) {
    padding: 9rem 2rem;

    h4 {
      font-size: 2.5rem;
      font-family: "MontLight", sans-serif;
      margin-bottom: 1.5rem;
    }
    h5 {
      font-size: 2rem;
    }
    p {
      /* font-size: 1.2rem; */
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }

    .content {
      padding-left: 5rem;
      padding-right: 7rem;
    }

    .left-space {
      padding-left: 2rem;
    }
  }
`;

export default HomeSectionC;
