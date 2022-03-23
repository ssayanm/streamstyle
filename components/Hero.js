import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Slider from "./Slider";
import { social } from "../utils/constants";
import Image from "next/image";

const Hero = () => {
  return (
    <Wrapper>
      <div className="section-center container">
        <article className="content">
          <h3>One Platform For Video Engagement & Live Commerce</h3>
          <h4>
            Use the most powerful live and VOD shopping platform with a
            frictionless buying experience.
          </h4>

          <Link href="/contact">
            <a className="btn hero-btn"> Get Started</a>
          </Link>
          <p>Available now on all platforms</p>
          <ul className="social-icons">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url} target="_blank">
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </article>
        <Link href="/">
          <a>
            <Image
              alt="revo"
              src="/images/herovideo.jpg"
              width={826}
              height={530}
              className="logo"
            />
          </a>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* min-height: 50vh; */
  background: var(--clr-primary-1);
  /* background-image: linear-gradient(0deg, #1b8686 0, #330867); */
  .container {
    display: grid;
    place-items: center self-start center;
    padding-top: 7rem;
  }

  h3 {
    font-size: 2.3rem;
  }
  p {
    line-height: 1.5;
    /* max-width: 45em; */

    margin-top: 2rem;
    /* color: var(--clr-grey-3); */
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    .container {
      height: calc(100vh - 5rem);
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
      font-size: 28.5px;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .content {
      /* display: block; */
      /* position: relative; */
    }
  }
`;

export default Hero;
