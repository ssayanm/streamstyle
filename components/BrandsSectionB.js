import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { BsPlayCircleFill } from "react-icons/bs";
import Image from "next/image";

const BrandsSectionB = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <Image
            alt="revo"
            src="/images/Weekly_Schedule.jpg"
            width={900}
            height={478}
            //   objectFit="cover"
          />
        </div>
        <article className="content">
          <BsPlayCircleFill className="icon" />
          <h1 className="title">Create A Weekly Show Schedule</h1>
          <p>
            Leverage existing talent to create new weekly branded shows. 
            Develop a slate of programming tied to live shopping events that
            drive consumers back to your properties and enhance engagement and
            activation.  
          </p>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* background: var(--clr-black); */
  /* color: var(--clr-white); */
  .container {
    display: grid;
    place-items: center;
    padding: 5rem 2rem;
  }

  .content {
    text-align: center;
  }

  p {
    /* color: var(--clr-white); */
    /* max-width: 45em; */
    font-family: "MontSemiBold", sans-serif;
    margin-top: 2rem;
    text-align: center;
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
  .icon {
    width: 64px;
    height: 64px;
    text-align: center;
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
    h4 {
      font-size: 39.5px;
      font-family: "MontLight", sans-serif;
      margin-bottom: 1.5rem;
      letter-spacing: normal;
      line-height: 1.1;
    }
    p {
      text-align: left;
      margin-bottom: 0rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .bgcircle {
      position: absolute;
      margin-left: 70rem;
      z-index: -1;
      margin-top: -50rem;
    }
    .content {
      padding-left: 5rem;
      text-align: left;
    }
  }
`;

export default BrandsSectionB;
