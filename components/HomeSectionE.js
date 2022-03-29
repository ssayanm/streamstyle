import Link from "next/link";

import styled from "styled-components";
import { Row, Col } from "antd";

const HomeSectionE = () => {
  return (
    <Wrapper>
      <Row gutter={16} justify="center" align="middle">
        <Col>
          <h3 className="title">Revo Video is word of mouth on steroids”</h3>
          <p>Get started today.</p>
          <center>
            <Link href="/">
              <a className="btn"> Talk to Sales</a>
            </Link>
          </center>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-image: url("/images/Revo_BG_3.png");
  background-position: center center;
  margin: 0 auto;
  padding: 6rem 2rem;

  .title {
    text-align: center;
  }
  p {
    text-align: center;
    font-family: "MontSemiBold", sans-serif;
    font-size: 1.75rem;
  }

  @media (min-width: 992px) {
    padding: 9rem 2rem;
    p {
      font-size: 2.3rem;
    }
  }
`;

export default HomeSectionE;
