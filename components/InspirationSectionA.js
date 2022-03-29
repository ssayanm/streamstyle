import { Row, Col, Card } from "antd";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { featuredChannels } from "../utils/constants";
import FeaturedChannels from "./FeaturedChannels";

const InspirationSectionA = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Wrapper>
      <Row gutter={16} justify="space-between" style={{ padding: "0 1rem" }}>
        <Col>
          <h5 className="featitle">Featured Channels</h5>
        </Col>
        <Col>
          <button onClick={() => setToggle(!toggle)} className="fbtn">
            View More
          </button>
        </Col>
      </Row>
      <Row gutter={8}>
        {toggle
          ? featuredChannels.map((channel) => (
              <Col md={6} xs={12} key={channel.id}>
                <FeaturedChannels channel={channel} />
              </Col>
            ))
          : featuredChannels.slice(0, 4).map((channel) => (
              <Col md={6} xs={12} key={channel.id}>
                <FeaturedChannels channel={channel} />
              </Col>
            ))}
      </Row>
      <Row gutter={16} justify="space-between" style={{ padding: "0 1rem" }}>
        <Col>
          <h5 className="featitle">Featured Channels</h5>
        </Col>
        <Col>
          <button onClick={() => setToggle(!toggle)} className="fbtn">
            View More
          </button>
        </Col>
      </Row>
      <Row gutter={8}>
        {toggle
          ? featuredChannels.map((channel) => (
              <Col md={6} xs={12} key={channel.id}>
                <FeaturedChannels channel={channel} />
              </Col>
            ))
          : featuredChannels.slice(0, 4).map((channel) => (
              <Col md={6} xs={12} key={channel.id}>
                <FeaturedChannels channel={channel} />
              </Col>
            ))}
      </Row>
      <Row gutter={16} justify="space-between" style={{ padding: "0 1rem" }}>
        <Col>
          <h5 className="featitle">Featured Channels</h5>
        </Col>
        <Col>
          <button onClick={() => setToggle(!toggle)} className="fbtn">
            View More
          </button>
        </Col>
      </Row>
      <Row gutter={8}>
        {toggle
          ? featuredChannels.map((channel) => (
              <Col md={6} xs={12} key={channel.id}>
                <FeaturedChannels channel={channel} />
              </Col>
            ))
          : featuredChannels.slice(0, 4).map((channel) => (
              <Col md={6} xs={12} key={channel.id}>
                <FeaturedChannels channel={channel} />
              </Col>
            ))}
      </Row>
    </Wrapper>
  );
};

export default InspirationSectionA;

const Wrapper = styled.section`
  padding: 2rem 0rem;
  font-family: "Mont";

  .fbtn {
    background: none;
    color: var(--clr-black);
    border: none;
    font-family: "MontSemiBold";
    cursor: pointer;
  }

  .channels {
    border: none;
  }

  .featitle {
    background: var(--clr-black);
    color: var(--clr-white);
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-family: "Mont";
  }
  @media (min-width: 992px) {
    padding: 4rem;

    .title {
      font-size: 2rem;
    }
  }
`;
