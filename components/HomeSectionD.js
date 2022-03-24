import Link from "next/link";
import { BsPlayCircle } from "react-icons/bs";
import styled from "styled-components";

const HomeSectionD = () => {
  return (
    <Wrapper>
      <div className="container">
        <BsPlayCircle className="icon" />
        <div className="title">
          <h3>
            Integrate seamlessly into
            <br />
            your cart and payments
          </h3>
        </div>
        <div className="section-center featured">
          <div>
            <p className="header">One-click install</p>
            <p className="info">
              Revo seamlessly integrates into your e-commerce platform syncing
              products, orders and payments automatically{" "}
            </p>
          </div>
          <div>
            <p className="header">Shopping cart integrations</p>
            <p className="info">
              Manage products and orders from any shop system with more than 48
              major shop platforms integrated.
            </p>
          </div>
          <div>
            <p className="header">Embedded payments</p>
            <p className="info">
              We offer fully integrated in-stream, one-click checkout. Choose
              from over 180 different supported payment providers or start with
              us as your preferred partner.
            </p>
          </div>
        </div>
        <center>
          <Link href="/contact">
            <a className="btn"> Learn More</a>
          </Link>
        </center>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* min-height: 50vh; */
  background: var(--clr-primary-1);
  /* background-image: url("/images/circle.png"); */
  /* background-repeat: no-repeat; */

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
  }
`;

export default HomeSectionD;
