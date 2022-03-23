import Image from "next/image";
import styled from "styled-components";
import { services } from "../utils/constants";

const HomeSectionB = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            The features
            <br /> you need
          </h3>
        </article>
        <div className="services-center">
          <div>
            <Image
              alt="revo"
              src="/images/cart.png"
              width={49}
              height={49}
              objectFit="cover"
            />
            <p className="heading">Direct e-Commerce Integration</p>
            <p className="desc">
              Our live shopping solution provides instant product sync, seamless
              integration you’re your e-Commerce platform, and instant checkout.{" "}
            </p>
            <Image
              alt="revo"
              src="/images/dollar.png"
              width={49}
              height={49}
              objectFit="cover"
            />
            <p className="heading">Frictionless Payment</p>
            <p className="desc">
              Increase sales and conversion complete transactions in one-click
              without ever leaving the show.{" "}
            </p>
          </div>
          <div>
            {" "}
            <Image
              alt="revo"
              src="/images/eng.png"
              width={49}
              height={49}
              objectFit="cover"
            />
            <p className="heading">High Engagement</p>
            <p className="desc">
              An immersive Live video experience that drives engagement,
              discovery and community{" "}
            </p>
            <Image
              alt="revo"
              src="/images/analytics.png"
              width={83}
              height={41}
              objectFit="cover"
            />
            <p className="heading">Real-Time Analytics</p>
            <p className="desc">
              Real-time analytics to maximize sales throughout the show. Built
              in KPIs and fully branded ownership of enhanced analytics and
              data.{" "}
            </p>
          </div>
          <div>
            <Image
              alt="revo"
              src="/images/features.png"
              width={623}
              height={555}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-white);
  }
  padding: 5rem 0;

  background: var(--clr-black);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-white);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      /* color: var(--clr-primary-2); */
    }
  }

  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    h3 {
      font-size: 63px;
    }

    .heading {
      font-size: 32.5px;
    }

    .desc {
      font-size: 20px;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    /* padding: 0; */
    .section-center {
      /* transform: translateY(5rem); */
    }
  }
`;
export default HomeSectionB;
