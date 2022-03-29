import styled from "styled-components";
import Link from "next/link";
import Price from "./Price";
import Image from "next/image";

const InspirationHero = () => {
  return (
    <Wrapper>
      <div className="section-center container">
        <div className="content">
          <h1 className="title">See what our customers are raving about!</h1>
        </div>

        <Image
          alt="revo"
          src="/images/dummy.png"
          width={1529}
          height={661}
          // placeholder="blur"
        />
      </div>
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

    .container {
      place-items: unset;
    }

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

    .content {
      width: 60rem;
    }
  }
`;

export default InspirationHero;
