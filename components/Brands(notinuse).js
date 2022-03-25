import styled from "styled-components";
import Link from "next/link";
import { social } from "../utils/constants";
import Image from "next/image";

const Brands = () => {
  return (
    <Wrapper>
      <div className="section-center container">
        <article className="content">
          <h1 className="title">
            Sell to your customers directly with shoppable videos
          </h1>
          <p>
            Connect with thousands of consumers with single or multi-screen
            premium video quality and simulcast your stream to multiple
            locations at the same time
          </p>
        </article>

        <div className="onlydesktop">
          <Image
            alt="revo"
            src="/images/herovideo.jpg"
            width={826}
            height={530}
          />
        </div>
        <article className="content">
          <h1 className="title">Easy to Use</h1>
          <p>
            One-click. Go Live - in as little as 5 minutes your brand can be
            live
          </p>
        </article>

        <div className="greenbox">
          <h1 className="title">Easy to Use</h1>
        </div>

        <div className="onlydesktop">
          <Image
            alt="revo"
            src="/images/Catalog_sync.jpg"
            width={900}
            height={506}
          />
        </div>
        <article className="content">
          <h1 className="title">Catalog Sync</h1>
          <p>
            Automatically connect and sync to any e-commerce platform keeping
            your products up to date and available for your shows
          </p>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* background: var(--clr-primary-1); */
  /* margin-top: -9rem; */
  /* padding-top: 1rem; */
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

  .greenbox {
    background: var(--clr-primary-1);
    border: solid 1px #000;
    width: 665px;

    height: 435px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 992px) {
    /* padding-top: 5rem; */
    .container {
      /* height: calc(100vh - 5rem); */
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }

    .title {
      text-align: left;
    }

    p {
      font-size: 2rem;
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

export default Brands;
