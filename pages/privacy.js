import axios from "axios";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Row, Col } from "antd";

export const getStaticProps = async () => {
  try {
    const res = await axios.get(
      `${process.env.url}/api/privacypolicy/?populate=*`
    );
    const privacy = res.data;

    if (!privacy)
      return (
        <div>
          <Loading />
        </div>
      );
    return { props: { privacy } };
  } catch (error) {
    return { error };
  }
};

const privacy = ({ privacy }) => {
  const { heading, subHeading, content } = privacy.data.attributes;
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
  font-family: "Mont";

  .title {
    margin-bottom: 0;
  }
  .boldu {
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    margin-top: 1rem;
  }
  li {
    font-size: 1rem;
    padding-bottom: 1rem;
  }

  .notype li {
    list-style-type: none;
  }

  ul li {
    list-style-type: square;
  }

  ul,
  ol {
    margin-top: 1rem;
    padding-left: 2rem;
    font-family: "Mont";
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

export default privacy;
