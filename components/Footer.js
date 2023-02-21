import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { Row, Col } from "antd";

import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Row
        gutter={[48, 48]}
        justify="center"
        align="middle"
        className="section"
      >
        <Col sm={24} md={8} data-aos="zoom-in">
          <Link href="/">
            <a>
              <Image
                alt="StreamStyle"
                src="/images/sslogo.png"
                width={300}
                height={68}
                quality={100}
                objectFit="contain"
              />
            </a>
          </Link>
        </Col>
        <Col sm={24} md={8} data-aos="zoom-in" className="lin">
          <Link href="/privacy">Privacy Policy</Link>
        </Col>
        <Col sm={24} md={8} data-aos="zoom-in">
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/revo-video/"
              target="_blank"
            >
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </Col>
      </Row>

      <hr />
      <p>Copyright &copy; {new Date().getFullYear()} Streamstyle Inc.</p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: var(--clr-black);

  padding: 2rem 2rem 2rem 2rem;
  color: var(--clr-white);
  .lin a {
    color: #fff;
  }
  .foot {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 0.85rem;
    align-items: center;
  }
  hr {
    color: var(--clr-white);
    border: 1px solid #fff;
    margin: 2rem 0;
  }

  p {
    color: var(--clr-white);
    text-align: center;
  }

  .section {
    padding: 2rem 1rem;
  }

  @media (min-width: 992px) {
    .foot {
      padding: 4rem;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      /* justify-items: center; */
      align-items: center;
    }
    .section {
      padding: 6rem;
    }
  }
`;
export default Footer;
