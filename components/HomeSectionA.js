import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { BsPlayCircleFill } from "react-icons/bs";
import Image from "next/image";

const HomeSectionA = () => {
  return (
    <Wrapper>
      <div className="section-center1 container">
        <article className="content">
          <BsPlayCircleFill className="icon" />
          <p>
            Best in class shopping experience and storytelling platform that
            helps you to engage longer and more frequently with your consumers.
            Monetize live, pre-recorded and edited video and broadcast across
            your social channels.
          </p>
        </article>
        <Link href="/">
          <a>
            <Image
              alt="revo"
              src="/images/bgsec.png"
              width={1112}
              height={793}
              //   objectFit="cover"
            />
          </a>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* min-height: 50vh; */
  /* background: var(--clr-primary-1); */
  /* background-image: url("/images/circle.png"); */
  /* background-repeat: no-repeat; */

  .container {
    display: grid;
    place-items: center;
    /* padding-top: 7rem; */
  }

  h3 {
    font-size: 2.3rem;
  }
  p {
    line-height: 1.3;
    /* max-width: 45em; */
    font-family: "MontSemiBold", sans-serif;
    margin-top: 2rem;
    /* color: var(--clr-grey-3); */
    font-size: 1rem;
  }
  .icon {
    width: 64px;
    height: 64px;
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
      font-size: 72.5px;
    }
    h4 {
      font-size: 39.5px;
      font-family: "MontLight", sans-serif;
      margin-bottom: 1.5rem;
      letter-spacing: normal;
      line-height: 1.1;
    }
    p {
      font-size: 40px;
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
    }
  }
`;

export default HomeSectionA;
