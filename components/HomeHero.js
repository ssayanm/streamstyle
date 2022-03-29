import styled from "styled-components";
import Link from "next/link";
import { social } from "../utils/constants";
import Image from "next/image";

const HomeHero = () => {
  return (
    <Wrapper>
      <div className="section-center container">
        <article className="content">
          <h1 className="title">
            One Platform For Video Engagement & Live Commerce
          </h1>
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
              // placeholder="blur"
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
  margin-top: -9rem;
  padding-top: 10rem;
  /* padding: 2rem 0; */
  .container {
    display: grid;
    place-items: center;
  }

  p {
    margin-top: 2rem;
    font-size: 1.75rem;
    text-align: center;
    margin-bottom: 2rem;
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
    flex-direction: column;
    justify-content: center;
  }

  .title {
    text-align: center;
  }
  @media (min-width: 992px) {
    padding-top: 5rem;
    .container {
      height: 100vh;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }

    .title {
      text-align: left;
    }

    p {
      font-size: 1.75rem;
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
