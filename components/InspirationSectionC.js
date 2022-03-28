import { Row, Col, Card } from "antd";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { featuredChannels } from "../utils/constants";

const InspirationSectionC = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Wrapper>
      <Row gutter={[16, 24]} justify="center">
        <Col span={10}>
          <h5 className="featitle1">Featured Channels</h5>
          <Row>
            {featuredChannels.map((channel) => (
              <Col span={8} className="gutter-box" key={channel.id}>
                <Image
                  alt="Revo"
                  src={channel.image}
                  width={170}
                  height={170}
                  className="logo"
                  objectFit="cover"
                />
              </Col>
            ))}
          </Row>

          <h5 className="featitle1">Featured Channels</h5>
          <Row>
            {featuredChannels.map((channel) => (
              <Col span={8} className="gutter-box" key={channel.id}>
                <Image
                  alt="Revo"
                  src={channel.image}
                  width={170}
                  height={170}
                  className="logo"
                  objectFit="cover"
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={10}>
          <h5 className="featitle1">Featured Channels</h5>
          <Row>
            {featuredChannels.map((channel) => (
              <Col span={8} className="gutter-box" key={channel.id}>
                <Image
                  alt="Revo"
                  src={channel.image}
                  width={170}
                  height={170}
                  className="logo"
                  objectFit="cover"
                />
              </Col>
            ))}
          </Row>
          <h5 className="featitle1">Featured Channels</h5>
          <Row>
            {featuredChannels.map((channel) => (
              <Col span={8} className="gutter-box" key={channel.id}>
                <Image
                  alt="Revo"
                  src={channel.image}
                  width={170}
                  height={170}
                  className="logo"
                  objectFit="cover"
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row gutter={8}>
        {toggle
          ? featuredChannels.map((channel) => (
              <Col md={6} xs={12} key={channel.id}>
                <Card className="channels">
                  <Image
                    alt="Revo"
                    src={channel.image}
                    width={400}
                    height={500}
                    className="logo"
                    objectFit="cover"
                  />
                </Card>
              </Col>
            ))
          : featuredChannels.slice(0, 4).map((channel) => (
              <Col md={6} xs={12} key={channel.id}>
                <Card className="channels">
                  <Image
                    alt="Revo"
                    src={channel.image}
                    width={400}
                    height={500}
                    className="logo"
                    objectFit="cover"
                  />
                </Card>
              </Col>
            ))}
      </Row>
    </Wrapper>
  );
};

export default InspirationSectionC;

const Wrapper = styled.section`
  padding: 2rem 0rem;

  .gutter-box {
    padding: 0.75rem 0rem;
  }

  .fbtn {
    background: none;
    color: var(--clr-black);
    border: none;

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
  }
  @media (min-width: 992px) {
    padding: 4rem;

    .title {
      font-size: 2rem;
    }
  }
`;
