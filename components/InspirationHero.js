import styled from "styled-components";
import Image from "next/image";
import { Row, Col } from "antd";

const InspirationHero = () => {
  return (
    <Wrapper>
      <Row gutter={16} justify="center">
        <Col>
          <div className="content">
            <h1 className="title">See what our customers are raving about!</h1>
          </div>
          <div className="onlydesktop">
            <Image
              alt="revo"
              src="/images/insiprnhero.jpg"
              width={1920}
              height={661}
              objectFit="cover"
            />
          </div>
          <div className="onlymobile">
            <Image
              alt="revo"
              src="/images/insiprnhero.jpg"
              width={916}
              height={620}
              objectFit="cover"
            />
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem;

  .title {
    text-align: center;
  }

  @media (min-width: 992px) {
    padding: 4rem 4rem 0 4rem;

    .title {
      text-align: left;
    }

    .content {
      width: 60rem;
    }
  }
`;

export default InspirationHero;
