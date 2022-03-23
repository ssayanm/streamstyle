import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart, FaLinkedin, FaPlay } from "react-icons/fa";
import styled from "styled-components";
import { footerLinks, footerLinksAlt, social } from "../utils/constants";

const Footer = () => {
  return (
    <Wrapper>
      <div className="foot">
        <div>
          {" "}
          <Link href="/">
            <a>
              <Image
                alt="Revo"
                src="/images/Revologowhite.png"
                width={172}
                height={69}
                className="logo"
              />
            </a>
          </Link>
        </div>
        <div>
          <ul className="nav-links">
            {footerLinks.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link href={url}>
                    <a>{text}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul className="nav-links">
            {footerLinksAlt.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link href={url}>
                    <a>{text}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul className="nav-links">
            <li>
              <a>Socials</a>
            </li>
            <li>
              <FaLinkedin className="iconsocial" />
            </li>
          </ul>
        </div>
        <div>
          <FaPlay className="icon" />
        </div>
      </div>
      <hr />
      <p>
        Copyright &copy; {new Date().getFullYear()} Borderfree Technologies Inc.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  /* height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  background: var(--clr-black);

  padding: 5rem 2rem;
  color: var(--clr-white);
  .foot {
    display: grid;
  }
  hr {
    color: var(--clr-white);
    border: 1px solid #fff;
    margin: 2rem 0;
  }

  p {
    margin: 0.1rem;
    color: var(--clr-white);
    font-weight: 300;
    text-transform: none;
    line-height: 1.25;
    text-align: center;
  }

  .icon {
    color: var(--clr-primary-1);
    width: 34px;
    height: 34px;
  }

  .iconsocial {
    width: 43px;
    height: 43px;
  }
  .nav-links {
    /* display: flex; */
    justify-content: flex-end;
    li {
      margin: 0.5rem 0.5rem;
    }
    a {
      color: var(--clr-white);
      font-size: 21px;
      line-height: 1.2;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      /* padding: 1rem; */
      &:hover {
        border-bottom: 2px solid var(--clr-primary-1);
      }
    }
  }
  @media (min-width: 992px) {
    .foot {
      padding: 1rem 0;
      grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
      gap: 4rem;
    }
  }
`;

export default Footer;
