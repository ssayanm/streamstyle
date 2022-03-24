import styled from "styled-components";
import Link from "next/link";
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
          <div className="onlymobile">
            <Image
              alt="revo"
              src="/images/herovideo.jpg"
              width={826}
              height={530}
            />
          </div>
          <div className="btn-section">
            <Link href="/">
              <a className="btn-alt btn-shopify"> Add to your shopify store</a>
            </Link>
            <Link href="/">
              <a className="btn btn-start"> Get Started</a>
            </Link>
          </div>

          <p className="smallfont">Available now on all platforms</p>
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

        <div className="onlydesktop">
          <Image
            alt="revo"
            src="/images/herovideo.jpg"
            width={826}
            height={530}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-1);
  padding: 2rem 0;
  .container {
    display: grid;
    place-items: center;
  }

  h3 {
    font-size: 2.7rem;
    text-align: center;
  }
  p {
    margin-top: 2rem;
    font-size: 1.75rem;
    text-align: center;
  }
  .smallfont {
    font-size: 1.25rem;
  }
  .btn-shopify {
    margin-top: 1rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .btn-start {
    text-align: center;
    width: 12rem;
    margin: 0 auto;
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
      text-align: left;
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
      text-align: left;
    }
    .smallfont {
      font-size: 1.5rem;
    }
    .btn-shopify {
      margin-top: 0rem;
      text-align: center;
      margin-bottom: 0rem;
    }

    .btn-start {
      text-align: center;
      width: auto;
      margin: 0 auto;
    }

    .btn-section {
      display: flex;
      width: 31rem;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 2rem;
    }
  }
`;

export default HomeHero;
