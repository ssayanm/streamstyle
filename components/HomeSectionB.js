import Image from "next/image";
import styled from "styled-components";
import { services } from "../utils/constants";

const HomeSectionB = () => {
  return (
    <Wrapper>
      <div className="container">
        <article className="header">
          <h3>
            The features
            <br /> you need
          </h3>
        </article>
        <div className="services-center">
          <div>
            <div className="space">
              <Image
                alt="revo"
                src="/images/cart.png"
                width={49}
                height={49}
                objectFit="cover"
              />
              <p className="heading">Direct e-Commerce Integration</p>
              <p className="desc">
                Our live shopping solution provides instant product sync,
                seamless integration you’re your e-Commerce platform, and
                instant checkout.{" "}
              </p>
            </div>
            <div className="space">
              <Image
                alt="revo"
                src="/images/dollar.png"
                width={49}
                height={49}
                objectFit="cover"
              />
              <p className="heading">
                Frictionless <br />
                Payment
              </p>
              <p className="desc">
                Increase sales and conversion complete transactions in one-click
                without ever leaving the show.{" "}
              </p>
            </div>
          </div>
          <div>
            <div className="space">
              <Image
                alt="revo"
                src="/images/eng.png"
                width={49}
                height={49}
                objectFit="cover"
              />
              <p className="heading">
                High <br />
                Engagement
              </p>
              <p className="desc">
                An immersive Live video experience that drives engagement,
                discovery and community{" "}
              </p>
            </div>
            <div className="space">
              <Image
                alt="revo"
                src="/images/analytics.png"
                width={83}
                height={41}
                objectFit="cover"
              />
              <p className="heading">
                Real-Time
                <br /> Analytics
              </p>
              <p className="desc">
                Real-time analytics to maximize sales throughout the show. Built
                in KPIs and fully branded ownership of enhanced analytics and
                data.{" "}
              </p>
            </div>
          </div>
          <div>
            <Image
              alt="revo"
              src="/images/features.png"
              width={1200}
              height={750}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0rem;
  background: var(--clr-black);

  h3 {
    font-size: 2.7rem;
  }

  .heading {
    font-size: 1.75rem;
    margin: 1rem 0;
  }

  .desc {
    font-size: 1.2rem;
  }

  h3,
  h4 {
    color: var(--clr-white);
  }
  .container {
    padding: 0 2rem;
    text-align: center;
  }

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    /* line-height: 1.3; */
    color: var(--clr-white);
  }
  .services-center {
    margin-top: 2rem;
    display: grid;
    gap: 2rem;
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
    .container {
      padding: 0 2rem;
      text-align: left;
    }
    .header {
      padding-left: 4rem;
    }

    .services-center {
      gap: 2.5rem;
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
      grid-template-columns: 480px 430px auto;
      padding-left: 4rem;
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
