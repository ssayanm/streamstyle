import { Row, Col, Card } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { channels } from "../utils/constants";
import GreenBox from "./GreenBox";

const InspirationSectionB = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Row gutter={16} style={{ padding: "0 4rem" }}>
        {channels.map((channel) => (
          <Col md={6} xs={12} key={channel.id} style={{ marginBottom: "2rem" }}>
            <Card className="title">
              <h1>{channel.title}</h1>
            </Card>
          </Col>
        ))}
      </Row>
      <Wrapper>
        <div className="container">
          <div className="text-center">
            <h1 className="title">Discover all channels</h1>
          </div>
          <div className="section-center featured">
            {toggle ? (
              <div className="channels">
                {channels.map((channel) => {
                  return <GreenBox channel={channel} key={channel.id} />;
                })}
              </div>
            ) : (
              <div className="channels">
                {channels.slice(0, 4).map((channel) => {
                  return <GreenBox channel={channel} key={channel.id} />;
                })}
              </div>
            )}
          </div>
          <center>
            <button onClick={() => setToggle(!toggle)} className="btn">
              View More
            </button>
          </center>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  /* min-height: 50vh; */
  background: var(--clr-black);
  color: var(--clr-white);

  .title {
    color: var(--clr-white);
  }
  /* background-image: url("/images/circle.png"); */
  /* background-repeat: no-repeat; */

  .btn {
    color: var(--clr-primary-1);
  }
  .container {
    padding: 5rem 2rem;
    text-align: center;
  }

  h3 {
    font-size: 2.3rem;
    color: var(--clr-black);
  }
  p {
    font-size: 1.75rem;
  }

  .icon {
    width: 64px;
    height: 64px;
    margin: 0 auto;
    display: flex;
    margin-bottom: 2rem;
  }

  .header {
    font-size: 1.75rem;
    font-family: "MontSemiBold", sans-serif;
  }

  .info {
    font-size: 1.2rem;
  }

  .featured {
    padding: 2rem;
    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr; */
    gap: 1rem;
  }

  .channels {
    display: grid;
  }
  @media (min-width: 992px) {
    .container {
      text-align: left;
    }

    .icon {
      width: 113px;
      height: 113px;
    }

    h3 {
      margin-bottom: 1.5rem;
      font-size: 4.3rem;
    }
    h4 {
      font-size: 39.5px;
      font-family: "MontLight", sans-serif;
      margin-bottom: 1.5rem;
      letter-spacing: normal;
      line-height: 1.1;
    }
    .header {
      font-size: 30px;
    }

    .info {
      font-size: 25px;
    }

    .content {
      padding-left: 5rem;
    }
    .featured {
      /* display: grid; */
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
      text-align: center;
      padding: 3rem 2rem;
    }

    .channels {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 2rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default InspirationSectionB;
