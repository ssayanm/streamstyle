import Link from "next/link";

import styled from "styled-components";

const HomeSectionE = () => {
  return (
    <Wrapper className="section">
      <div className="title">
        <h3>Revo Video is word of mouth on steroids”</h3>
      </div>
      <p className="space">Get started today.</p>
      <center>
        <Link href="/contact">
          <a className="btn"> Talk to Sales</a>
        </Link>
      </center>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* background-image: url("/images/circle.png"); */

  padding: 5rem 2rem;

  h3 {
    font-size: 2.5rem;
    color: var(--clr-black);
  }
  p {
    text-align: center;
    /* margin-bottom: 0rem; */
    /* margin-top: 2rem; */
    font-family: "MontSemiBold", sans-serif;
    font-size: 1.75rem;
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
      font-size: 4.3rem;
    }

    p {
      font-size: 35px;
    }
  }
`;

export default HomeSectionE;
