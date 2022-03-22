import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Slider from "./Slider";
import { social } from "../utils/constants";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h3>One Platform For Video Engagement & Live Commerce</h3>
        <p>
          Use the most powerful live and VOD shopping platform with a
          frictionless buying experience.
        </p>

        <Link href="/contact">
          <a className="btn hero-btn"> Get Started</a>
        </Link>
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
      <Slider />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* min-height: 50vh; */
  display: grid;
  place-items: center;
  /* background-image: linear-gradient(0deg, #1b8686 0, #330867); */
  background: var(--clr-primary-1);
  h3 {
    font-size: 2.3rem;
  }
  p {
    line-height: 1.5;
    max-width: 45em;
    /* margin-bottom: 2rem; */
    color: var(--clr-grey-3);
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    h3 {
      margin-bottom: 1.5rem;
    }
    p {
      font-size: 1.25rem;
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
