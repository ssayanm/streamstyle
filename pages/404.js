import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Meta from "../components/Meta";
import styled from "styled-components";
import { Row, Col } from "antd";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <Wrapper>
      <Meta title="404 - Not Found" />
      <Row gutter={16} justify="center">
        <Col>
          <h2>Oops....</h2>
          <p>Page cannot be found</p>
          <Link href="/">
            <a className="btn">Go Back</a>
          </Link>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem;
  font-family: "Mont";

  p {
    font-size: 1rem;
    margin-top: 1rem;
  }

  @media (min-width: 992px) {
    padding: 4rem 4rem 4rem 4rem;
  }
`;

export default NotFound;
