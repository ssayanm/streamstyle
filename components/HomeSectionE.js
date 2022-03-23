import Link from "next/link";

import styled from "styled-components";

const HomeSectionE = () => {
  return (
    <Wrapper className="section">
      <div className="title">
        <h3>Revo Video is word of mouth on steroids”</h3>
      </div>
      <p>Get started today.</p>
      <center className="space">
        <Link href="/contact">
          <a className="btn"> Talk to Sales</a>
        </Link>
      </center>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* background-image: url("/images/circle.png"); */

  padding: 7rem 2rem;

  h3 {
    font-size: 2.3rem;
    color: var(--clr-black);
  }
  p {
    text-align: center;
    margin-bottom: 0rem;

    font-size: 1rem;
  }

  .icon {
    width: 113px;
    height: 113px;
    margin: 0 auto;
    display: flex;
    margin-bottom: 2rem;
  }
  @media (min-width: 992px) {
    .container {
      /* height: calc(90vh - 3rem); */
      padding: 1rem 0;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }

    h3 {
      margin-bottom: 1.5rem;
      font-size: 67px;
    }
    h4 {
      font-size: 39.5px;
      font-family: "MontLight", sans-serif;
      margin-bottom: 1.5rem;
      letter-spacing: normal;
      line-height: 1.1;
    }
    p {
      font-size: 35px;
      font-family: "MontSemiBold", sans-serif;
    }
  }
`;

export default HomeSectionE;
