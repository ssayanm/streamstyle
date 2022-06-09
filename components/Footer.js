import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaPlay } from "react-icons/fa";
import styled from "styled-components";
import { footerLinks, footerLinksAlt, social } from "../utils/constants";

const Footer = () => {
  return (
    <Wrapper>
      <div className="foot">
        <div data-aos="zoom-in">
          <Link href="/">
            <a>
              <Image
                alt="Revo Video"
                src="/images/Revologowhite.svg"
                width={171}
                height={67}
                quality={100}
                objectFit="contain"
              />
            </a>
          </Link>
        </div>

        <div className="">
          <ul className="social-icons">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <Link href={url}>
                    <a href={url} target="_blank">
                      {icon}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <hr />
      <p>Copyright &copy; {new Date().getFullYear()} Streamstyle Inc.</p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: var(--clr-black);

  padding: 5rem 2rem 2rem 2rem;
  color: var(--clr-white);
  .foot {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.85rem;
  }
  hr {
    color: var(--clr-white);
    border: 1px solid #fff;
    margin: 2rem 0;
  }

  p {
    color: var(--clr-white);
    text-align: center;
  }

  @media (min-width: 992px) {
    .foot {
      padding: 4rem;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      /* justify-items: center; */
      align-items: center;
    }
  }
`;
export default Footer;
