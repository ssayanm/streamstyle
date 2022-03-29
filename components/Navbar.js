import styled from "styled-components";

import { FaBars } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import { links } from "../utils/constants";

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
                alt="Revo"
                src="/images/Revo_Logo_white.png"
                width={172}
                height={69}
                className="logo"
                priority
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
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  /* background: var(--clr-primary-1); */
  height: 9rem;
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
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-black);
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
      justify-content: flex-end;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-1);
        font-size: 21px;
        line-height: 1.07;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 1px solid var(--clr-black);
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
