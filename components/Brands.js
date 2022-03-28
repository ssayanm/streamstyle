import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { BsPlayCircleFill } from "react-icons/bs";
import Image from "next/image";

const Brands = () => {
  return (
    <Wrapper>
      <div className="section container">
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
      <div className="section-a container">
        <article className="content">
          <BsPlayCircleFill className="icon" />
          <h1 className="title">Live & VOD</h1>
          <p>
            Create new live shows and monetize existing VOD content in a new and
            engaging way
          </p>
        </article>
        <div>
          <Image
            alt="revo"
            src="/images/Live_and_vod.png"
            width={900}
            height={602}
            //   objectFit="cover"
          />
        </div>
      </div>
      <div className="section-b container">
        <div className="onlydesktop">
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
        <div className="onlymobile">
          <Image
            alt="revo"
            src="/images/Weekly_Schedule.jpg"
            width={900}
            height={478}
            //   objectFit="cover"
          />
        </div>
      </div>
      <div className="section-c container">
        <div className="onlydesktop">
          <Image
            alt="revo"
            src="/images/Frictionles_checkout.jpg"
            width={900}
            height={520}
            //   objectFit="cover"
          />
        </div>
        <article className="content">
          <BsPlayCircleFill className="icon" />
          <h1 className="title">Live & VOD</h1>
          <p>
            Create new live shows and monetize existing VOD content in a new and
            engaging way
          </p>
        </article>
        <div className="onlymobile">
          <Image
            alt="revo"
            src="/images/Frictionles_checkout.jpg"
            width={900}
            height={520}
            //   objectFit="cover"
          />
        </div>
      </div>
      <div className="section-d">
        <div className="greenbar">
          <article className="content">
            <h1 className="title">Virtual AI Try-On </h1>
            <p>
              Allow consumers to try-on products virtually reducing returns and
              increasing customer satisfaction
            </p>
          </article>
          <div className="fimage">
            <Image
              alt="revo"
              src="/images/Virtual_try_on.png"
              width={400}
              height={753}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* padding: 2rem; */
  .container {
    /* padding: 3rem 2rem; */
  }

  .section {
    padding: 2rem;
  }

  .section-a {
    background: var(--clr-black);
    color: var(--clr-white);
    padding: 2rem;

    p {
      color: var(--clr-white);
    }
    .title {
      color: var(--clr-white);
    }
  }

  .section-b {
    background: var(--clr-white);
    color: var(--clr-black);
    padding: 2rem;
    p {
      color: var(--clr-black);
    }
  }

  .section-c {
    background: var(--clr-black);
    color: var(--clr-white);
    padding: 2rem;

    p {
      color: var(--clr-white);
    }

    .title {
      color: var(--clr-white);
    }
  }

  .section-d {
    padding: 2rem;
    margin-bottom: 15rem;
  }

  .content {
    text-align: center;
  }

  p {
    /* max-width: 45em; */
    /* font-family: "MontSemiBold", sans-serif; */
    margin-top: 2rem;
    text-align: center;
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
  .icon {
    width: 64px;
    height: 64px;
    text-align: center;
    margin-bottom: 2rem;
  }

  .greenbox {
    background: var(--clr-primary-1);
    border: solid 1px #000;
    width: max-content;
    margin: 0 auto;
    padding: 2rem 1rem 0rem 1rem;
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }

  .greenbar {
    background: var(--clr-primary-1);
    /* box-shadow: 0 0 39.1px 3.9px rgba(0, 0, 0, 0.1); */
    padding: 1.5rem 1rem 0 1rem;
    /* grid-template-columns: 2fr 1fr; */
    display: grid;
    border-radius: 2.5rem;
    height: 45rem;
  }

  .fimage {
    transform: translateY(1rem);
  }

  @media (min-width: 992px) {
    .container {
      /* height: calc(90vh - 3rem); */
      display: grid;
      place-items: center;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }

    .section,
    .section-a,
    .section-b,
    .section-c {
      padding: 4rem 6rem;
    }

    .section-d {
      padding: 8rem 4rem;
      height: 50rem;
    }

    .greenbar {
      background: var(--clr-primary-1);
      /* box-shadow: 0 0 39.1px 3.9px rgba(0, 0, 0, 0.1); */
      padding: 4rem;
      grid-template-columns: 2fr 1fr;
      display: grid;
      border-radius: 2.5rem;
      height: 30rem;
    }

    .fimage {
      /* background-image: url("/images/Virtual_try_on.png"); */

      transform: translateY(-12rem);
    }

    p {
      text-align: left;
      margin-bottom: 0rem;
    }
    .greenbox {
      width: 45rem;

      height: 28rem;
    }
    .content {
      text-align: left;
    }
  }
`;

export default Brands;
