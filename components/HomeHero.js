import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Slider from "./Slider";
import { social } from "../utils/constants";
import Image from "next/image";

const HomeHero = () => {
  return (
    <Wrapper>
      <div className="section-center container">
        <article className="content">
          <h3>One Platform For Video Engagement & Live Commerce</h3>
          <p>
            Use the most powerful live and VOD shopping platform with a
            frictionless buying experience.
          </p>
          <div className="btn-section">
            <Link href="/">
              <a className="btn-alt hero-btn"> Add to your shopify store</a>
            </Link>
            <Link href="/">
              <a className="btn hero-btn"> Get Started</a>
            </Link>
          </div>

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
  background: var(--clr-primary-1);
  .container {
    display: grid;
    place-items: center;
  }

  h3 {
    font-size: 2.3rem;
  }
  p {
    line-height: 1.5;

    margin-top: 2rem;
    font-size: 1rem;
  }

  .hero-btn {
    margin-top: 1rem;
    text-align: center;
    /* margin-bottom: 1rem; */
  }

  .hero-btn-alt {
    text-align: center;
    /* width: 60%; */
    /* margin: 0 auto; */
  }

  .btn-section {
    display: flex;
    /* width: 32rem; */
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
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

    .hero-btn-alt {
      margin-right: 2rem;
    }

    .btn-section {
      display: flex;
      width: 30rem;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export default HomeHero;
