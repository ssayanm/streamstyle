import axios from "axios";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Row, Col } from "antd";

export const getStaticProps = async () => {
  try {
    const res = await axios.get(
      `${process.env.url}/api/termsandcondition/?populate=*`
    );
    const terms = res.data;

    if (!terms)
      return (
        <div>
          <Loading />
        </div>
      );
    return { props: { terms } };
  } catch (error) {
    return { error };
  }
};

const Terms = ({ terms }) => {
  const { heading, subHeading, content } = terms.data.attributes;

  return (
    <Wrapper>
      <Row gutter={16} justify="center">
        <Col>
          <div className="content">
            <h1 className="title">{heading}</h1>
            <p>{subHeading}</p>

            <ReactMarkdown children={content} />
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem;

  .title {
    margin-bottom: 0;
  }
  .bold {
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    margin-top: 1rem;
  }
  li {
    font-size: 1rem;
  }

  ul,
  ol {
    padding-left: 2rem;
    font-family: "Mont";
  }

  pre,
  code {
    font-family: "Mont";
    /* word-break: break-all; */
    display: contents;
  }

  .para {
    margin-top: 2rem;
    strong {
      font-size: 1.2rem;
      margin-bottom: 5rem;
    }
  }

  @media (min-width: 992px) {
    padding: 4rem 4rem 4rem 4rem;

    .content {
      width: 60rem;
    }
  }
`;

export default Terms;
