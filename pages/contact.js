import styled from "styled-components";
import PageHero from "../components/PageHero";

import Image from "next/image";
import {
  FaHome,
  FaMobile,
  FaEnvelope,
  FaPhoneAlt,
  FaMobileAlt,
} from "react-icons/fa";
import Meta from "../components/Meta";
import { social } from "../utils/constants";

const ContactPage = () => {
  return (
    <main>
      <Meta title="Contact" />
      <PageHero title="contact" />
      <Wrapper className="page section section-center">
        <div className="contact-form">
          <h3>Get in touch</h3>
          <form action="https://formspree.io/xbjzkoql" method="POST">
            <div className="form-group">
              <input
                type="text"
                placeholder="name"
                name="name"
                aria-label="name"
                className="form-control"
              />
              <input
                type="text"
                placeholder="phone"
                name="phone"
                aria-label="phone"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                aria-label="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                aria-label="message"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit
            </button>
          </form>
        </div>
        <article>
          <div className="title">
            <h2>our address</h2>
            <div className="underline"></div>
          </div>
          <div>
            <p className="iconcons">
              <FaHome className="iconcon" /> 199 Eastern avenue, George Town,
              Cayman Islands
            </p>
            <p className="iconcons">
              <FaEnvelope className="iconcon" />
              <a href="mailto:">hello@hello.com</a>
            </p>
            <p className="iconcons">
              <FaPhoneAlt className="iconcon" />{" "}
              <a href="tel:+3457695536">(345) 769-5536</a>
            </p>
            <p className="iconcons">
              <FaMobileAlt className="iconcon" />{" "}
              <a href="tel:+3459230411">(345) 923-0411</a>
            </p>
          </div>
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
          <Image
            alt="Revo"
            src="/assets/qrcode.jpeg"
            width={200}
            height={200}
          />
        </article>

        <div className="gmap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.570858158214!2d-81.3791646850954!3d19.30101968695918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81a91bedb975c57d!2zMTnCsDE4JzAzLjciTiA4McKwMjInMzcuMSJX!5e0!3m2!1sen!2sin!4v1636938898382!5m2!1sen!2sin"
            frameBorder="0"
            allowFullScreen=""
            tabIndex=""
            title="map"
          ></iframe>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  div p {
    /* line-height: 2; */
    /* max-width: 45em; */
    margin: 0 auto;
    margin-top: 1rem;
    /* margin-bottom: 1rem; */
    color: var(--clr-grey-5);
    a {
      text-decoration: none;
      color: var(--clr-grey-5);
    }
  }

  .iconcons {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: var(--clr-grey-2);

    a {
      color: red;
    }

    a:hover {
      color: green;
    }

    .iconcon {
      margin-right: 0.5rem;
      color: var(--clr-primary-1);
    }
  }

  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  .contact-form {
    background: var(--clr-white);
    border-radius: var(--radius);
    text-align: center;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    width: 90vw;
    max-width: 25rem;
  }
  .contact-form:hover {
    box-shadow: var(--dark-shadow);
  }
  .contact-form h3 {
    padding-top: 1.25rem;
    color: var(--clr-grey-3);
  }
  .form-group {
    padding: 1rem 1.5rem;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  .form-control::placeholder {
    font-family: var(--ff-primary);
    color: var(--clr-grey-1);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }

  .submit-btn {
    margin-bottom: 2rem;
  }
  .gmap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .gmap iframe {
    width: 93%;
    height: 30rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    .gmap iframe {
      width: 100%;
    }
    .contact-page .gmap iframe {
      width: 100%;
    }
    .contact-map {
      /* max-width: --var(--max-width); */
      width: 66rem;
      margin: 0 auto;
    }
  }
`;
export default ContactPage;
