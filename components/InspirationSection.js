import styled from "styled-components";
import Image from "next/image";
import { Row, Col } from "antd";
import Link from "next/link";
import { featuredChannels } from "../utils/constants";

const InspirationSection = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="content">
          <h3 className="title">Featured Channels</h3>
        </div>
        <Row gutter={[32, 24]} justify="center" align="middle">
          {featuredChannels.map((channel) => (
            <Col sm={24} md={12} lg={8} key={channel.id} data-aos="zoom-in-up">
              <div className="box">
                <a className="btn1" href={`${channel.link}`} target="_blank">
                  <Image
                    alt={channel.title}
                    src={channel.image}
                    width={600}
                    height={359}
                    objectFit="contain"
                    quality={100}
                  />
                </a>

                <div className="textBox">
                  <h4>{channel.title}</h4>
                  <h5>{channel.subTitle}</h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <center className="space">
          <Link href="/">
            <a className="btn"> View All Channels</a>
          </Link>
        </center>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem 1rem;
  font-family: "Mont";
  background-image: url("/images/circle.png"), url("/images/circle.png");
  background-position: 0% 0%, -8% 100%;
  background-repeat: no-repeat, no-repeat;

  .title {
    text-align: center;
    font-size: 2rem;
    font-family: "Mont";
  }

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0.5rem 0;

    :hover {
      transition: var(--transition);
      opacity: 0.751;
    }
  }

  .textBox {
    display: inline-block;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    h4,
    h5 {
      margin-bottom: 0.2rem;
      font-family: "MontSemiBold";
    }
  }

  @media (min-width: 992px) {
    padding: 4rem 2rem;
    background-position: 120% 5%, -5% 95%;

    .title {
      text-align: left;
      font-size: 2.5rem;
    }

    h4 {
      font-size: 1.5rem;
    }
    h5 {
      font-size: 1.3rem;
    }
    .content {
      width: 60rem;
    }

    .box {
      /* margin: 2rem 0 4rem 0; */
      justify-content: flex-start;
    }
  }
`;

export default InspirationSection;
