import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { FaBars, FaMobileAlt, FaPhoneAlt } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import { links, social } from "../utils/constants";

import { useAppContext } from "../context/app_context";

const Nav = () => {
  const { openSidebar } = useAppContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link href="/">
            <a>
              <Image
                alt="Bennetts Car Care"
                src="/assets/Bennettscarcare.png"
                width={200}
                height={75}
                className="logo"
              />
            </a>
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
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

        <a
          className="phone-btn"
          target="_blank"
          href="https://wa.me/13459230411"
        >
          <FaMobileAlt className="icon" /> (345) 923-0411
        </a>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* img {
      width: 150px;
      margin-left: -15px;
    } */
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-1);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }

  .phone-btn {
    display: none;
  }

  .social-icons {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem;
  }

  .social-icons li {
    padding: 0.5rem;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-1);
        font-size: 1.2rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-1);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
    .phone-btn {
      font-size: 1.4rem;
      letter-spacing: var(--spacing);

      display: flex;
      /* justify-content: center; */
      align-items: center;
      color: var(--clr-grey-1);

      .icon {
        margin-right: 0.2rem;
        color: var(--clr-primary-1);
      }
    }
  }
`;

export default Nav;
