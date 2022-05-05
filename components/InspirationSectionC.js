import { Row, Col } from "antd";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { featuredChannels } from "../utils/constants";

const InspirationSectionC = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Wrapper>
      <Row gutter={[32, 24]} justify="center">
        <Col md={10} sm={20}>
          <Row justify="space-between" align="middle">
            <Col>
              <h5 className="featitle">Featured Channels</h5>
            </Col>
            <Col>
              <button onClick={() => setToggle(!toggle)} className="fbtn">
                View More
              </button>
            </Col>
          </Row>
          <Row className="space">
            {featuredChannels.map((channel) => (
              <Col span={8} className="gutter-box " key={channel.id}>
                <Image
                  alt="Revo"
                  src={channel.image}
                  width={200}
                  height={200}
                  className="logo"
                  objectFit="cover"
                  quality={100}
                />
              </Col>
            ))}
          </Row>

          <Row justify="space-between" align="middle">
            <Col>
              <h5 className="featitle">Featured Channelsa</h5>
            </Col>
            <Col>
              <button onClick={() => setToggle(!toggle)} className="fbtn">
                View More
              </button>
            </Col>
          </Row>
          <Row className="space">
            {featuredChannels.map((channel) => (
              <Col span={8} className="gutter-box" key={channel.id}>
                <Image
                  alt="Revo"
                  src={channel.image}
                  width={200}
                  height={200}
                  className="logo"
                  objectFit="cover"
                  quality={100}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={10} sm={20}>
          <Row justify="space-between" align="middle">
            <Col>
              <h5 className="featitle">Featured Channels</h5>
            </Col>
            <Col>
              <button onClick={() => setToggle(!toggle)} className="fbtn">
                View More
              </button>
            </Col>
          </Row>
          <Row className="space">
            {featuredChannels.map((channel) => (
              <Col span={8} className="gutter-box" key={channel.id}>
                <Image
                  alt="Revo"
                  src={channel.image}
                  width={200}
                  height={200}
                  className="logo"
                  objectFit="cover"
                  quality={100}
                />
              </Col>
            ))}
          </Row>
          <Row justify="space-between" align="middle">
            <Col>
              <h5 className="featitle">Featured Channels</h5>
            </Col>
            <Col>
              <button onClick={() => setToggle(!toggle)} className="fbtn">
                View More
              </button>
            </Col>
          </Row>

          <Row className="space">
            {featuredChannels.map((channel) => (
              <Col span={8} className="gutter-box" key={channel.id}>
                <Image
                  alt="Revo"
                  src={channel.image}
                  width={200}
                  height={200}
                  className="logo"
                  objectFit="cover"
                  quality={100}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default InspirationSectionC;

const Wrapper = styled.section`
  padding: 2rem;

  .gutter-box {
    padding: 0.75rem 0.5rem;
    text-align: center;
  }

  .space {
    margin-bottom: 1rem;
    padding: 1rem 0;
  }

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
