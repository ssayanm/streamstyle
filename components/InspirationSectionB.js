import { Row, Col, Card } from "antd";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import styled from "styled-components";
import { channels } from "../utils/constants";

const InspirationSectionB = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Wrapper>
      <div className="text-center">
        <h1 className="title">Discover all channels</h1>
      </div>

      <Row gutter={4}>
        {toggle
          ? channels.map((channel) => (
              <Col md={6} xs={12} key={channel.id}>
                <Card className="greenbox">
                  <FaPlay className="icon" />
                  <h5 className="gtitle">{channel.title}</h5>
                </Card>
              </Col>
            ))
          : channels.slice(0, 8).map((channel) => (
              <Col md={6} xs={12} key={channel.id}>
                <Card className="greenbox">
                  <FaPlay className="icon" />
                  <h5 className="gtitle">{channel.title}</h5>
                </Card>
              </Col>
            ))}
      </Row>
      <Row gutter={16} justify="center">
        <Col>
          <button onClick={() => setToggle(!toggle)} className="btn">
            View More
          </button>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem 1rem;
  background: var(--clr-black);
  color: var(--clr-white);

  .ant-row {
    margin-bottom: 2rem;
  }

  .title {
    color: var(--clr-white);
  }
  .gtitle {
    margin-top: 7rem;
    color: var(--clr-white);
  }

  .btn {
    color: var(--clr-primary-1);
  }

  .greenbox {
    background: var(--clr-primary-1);
    margin: 1rem;
    border-radius: 1rem;
  }

  .icon {
    float: right;
    color: var(--clr-white);
  }

  @media (min-width: 992px) {
    padding: 4rem;

    .gtitle {
      margin-top: 10rem;
      /* color: var(--clr-white); */
    }

    .title {
      font-size: 2rem;
    }
  }
`;

export default InspirationSectionB;
