import styled from "styled-components";
import Link from "next/link";
import Price from "./Price";

const PriCing = () => {
  return (
    <Wrapper>
      <div className="section-center container">
        <h1 className="title text-center ">Princing & Plans</h1>

        <div className="boxes">
          <div className="box left">
            <h5>Revo for</h5>
            <h3>DTC</h3>
            <p>
              Any DTC brand on e-commerce platforms. Download the app and go
              live
            </p>
            <ul>
              <li>5% of gross sales generated on the platform. </li>
              <li>No monthly fee</li>
              <li> No code environment</li>
              <li>No obligation</li>
            </ul>
            <center className="btnn">
              <Link href="/">
                <a className="btn-alt">Talk to Sales</a>
              </Link>
            </center>
          </div>
          <div className="box content">
            <h5>Revo for</h5>
            <h3>Brands White Label</h3>
            <p>For brands that want to customize the consumer experience.</p>
            <ul>
              <li>5% of gross sales generated on the platform</li>
              <li> Volume discounts </li>
              <li>No code environment</li>
            </ul>

            <center className="btnn">
              <Link href="/">
                <a className="btn-alt">Talk to Sales</a>
              </Link>
            </center>
          </div>
          <div className="box right">
            <h5>Revo for</h5>
            <h3>Enterprise SaaS</h3>
            <p>
              For large companies who want to fully customize and even extend
              the Revo platform within their ecosystem
            </p>

            <center className="btnn">
              <Link href="/">
                <a className="btn-alt">Talk to Sales</a>
              </Link>
            </center>
          </div>
        </div>
      </div>
      <Price />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* background: var(--clr-primary-1); */
  /* margin-top: -9rem; */
  padding: 2em;
  /* padding: 2rem 0; */
  .container {
    display: grid;
    place-items: center;
  }

  .title {
    text-align: center;
  }
  .boxes {
    display: grid;
    text-align: center;
  }

  .box {
    box-shadow: var(--dark-shadow);
    padding: 3rem;
    border-radius: 1rem;
    /* margin: 0 auto; */
    margin-bottom: 2rem;
    background-color: var(--clr-white);

    h5 {
      font-size: 1.25rem;
    }
    h3 {
      font-size: 2rem;
    }

    p {
      /* font-size: 1.25rem; */
      color: var(--clr-light);
    }

    ul {
      margin: 0 auto;
      width: 15rem;
      margin-top: 2rem;
      margin-bottom: 5rem;
    }
    li {
      text-align: left;
    }
  }

  @media (min-width: 992px) {
    padding: 5rem 0;
    .boxes {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 3rem;
      grid-template-areas: "left content right";
      margin: 5rem 0;
      width: 70vw;
    }

    .box {
      box-shadow: var(--dark-shadow);
      padding: 3rem;
      /* border-radius: 1rem;
      margin: 0 auto; */
      background-color: var(--clr-white);
      position: relative;

      h5 {
        font-size: 1.75rem;
      }
      h3 {
        font-size: 3rem;
      }

      p {
        /* font-size: 1.25rem; */
        color: var(--clr-light);
      }

      ul {
        margin: 0 auto;
        width: 15rem;
        margin-top: 2rem;
        margin-bottom: 5rem;
      }
      li {
        text-align: left;
      }
      .btnn {
        position: absolute;
        right: 0;
        bottom: 3rem;
        left: 0;
      }
    }

    .title {
      text-align: left;
    }
  }
`;

export default PriCing;
