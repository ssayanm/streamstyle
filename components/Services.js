import styled from "styled-components";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="title">
          <h2>Our Services</h2>
          <div className="underline"></div>
        </div>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className="service">
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-grey-3);
  }
  padding: 5rem 0;

  background: var(--clr-grey-9);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-gray-1);
  }
  .services-center {
    margin-top: 4rem;
    /* margin-bottom: 4rem; */
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-white);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-gray-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-1);
    color: var(--clr-white);
    svg {
      font-size: 2rem;
    }
  }
  .gmap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .gmap iframe {
    /* width: 93%; */
    height: 20rem;
  }

  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .gmap iframe {
      width: 50%;
    }

    .services-map {
      width: 70rem;
      margin: 3rem auto;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;
export default Services;
