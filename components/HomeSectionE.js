import Link from "next/link";

import styled from "styled-components";

const HomeSectionE = () => {
  return (
    <Wrapper className="section">
      <div className="text-center">
        <h3 className="title">Revo Video is word of mouth on steroids”</h3>
      </div>
      <p className="space">Get started today.</p>
      <center>
        <Link href="/">
          <a className="btn"> Talk to Sales</a>
        </Link>
      </center>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* background-image: url("/images/circle.png"); */

  padding: 5rem 2rem;

  p {
    text-align: center;

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

    p {
      font-size: 2.3rem;
    }
  }
`;

export default HomeSectionE;
