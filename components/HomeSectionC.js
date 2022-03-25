import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { BsPlayCircleFill } from "react-icons/bs";
import Image from "next/image";

const HomeSectionC = () => {
  return (
    <Wrapper>
      <div className="section-center1 container">
        <div className="onlydesktop">
          <Image
            alt="revo"
            src="/images/bgsec.png"
            width={1112}
            height={793}
            //   objectFit="cover"
          />
        </div>
        <article className="content">
          <h3 className="title">
            The Future Of <br />
            Shopping Is LIVE
          </h3>
          <p>
            Elevate your brand’s online experience with the Revo Video platform
          </p>
          <h5>All in one platform</h5>
          <p>
            Simple to use yet powerful show set up and full recording studio
            with automated features that keep audiences engaged and buying
          </p>
          <h5 className="content">One-To-Many</h5>
          <p className="content">
            Invite experts, co-hosts, and even fans to participate in your live
            stream while thousands of consumers watch and interact{" "}
          </p>
          <h5>Shop-in-Video</h5>
          <p>
            Our integrated payment platform, customers can buy instantly,
            without leaving the experience{" "}
          </p>
        </article>
        <div className="onlymobile">
          <Image
            alt="revo"
            src="/images/bgsec.png"
            width={1112}
            height={793}
            //   objectFit="cover"
          />
        </div>
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
    padding: 5rem 2rem;
    text-align: center;
  }

  h5 {
    font-size: 1.75rem;
  }
  p {
    /* max-width: 45em; */
    font-family: "MontSemiBold", sans-serif;

    font-size: 1.2rem;
  }
  .icon {
    width: 64px;
    height: 64px;
  }

  @media (min-width: 992px) {
    .container {
      /* height: calc(90vh - 3rem); */
      padding: 5rem 0rem;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      text-align: left;
    }

    h4 {
      font-size: 2.5rem;
      font-family: "MontLight", sans-serif;
      margin-bottom: 1.5rem;
      letter-spacing: normal;
      line-height: 1.1;
    }
    h5 {
      font-size: 2rem;
    }
    p {
      /* font-size: 1.2rem; */
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
      padding-right: 7rem;
    }

    .left-space {
      padding-left: 2rem;
    }
  }
`;

export default HomeSectionC;
