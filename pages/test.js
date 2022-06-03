import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "../utils/constants";
import { useRouter } from "next/router";
import styled from "styled-components";

const Navbar = () => {
  const router = useRouter();
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <Wrapper>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <Image
              alt="Revo"
              src={
                router.asPath === "/"
                  ? "/images/Revo_Logo_white.png"
                  : "/images/Revologo.png"
              }
              width={172}
              height={69}
              className="logo"
              quality={100}
              priority
            />
            <button className="nav-toggle" onClick={toggleLinks}>
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  nav {
    background: var(--clr-white);
    /* box-shadow: var(--light-shadow); */
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .nav-toggle {
    font-size: 2rem;
    color: var(--clr-black);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: var(--clr-primary-1);
    transform: rotate(90deg);
  }
  .logo {
    height: 40px;
  }
  .links a {
    color: var(--clr-grey-1);
    font-family: "Mont";
    font-size: 1.4rem;
    text-transform: capitalize;
    margin: 0 0.5rem;
    /* display: inline-block; */
    padding: 0.5rem;
    /* transition: var(--transition); */
  }

  .links li {
    margin: 0.5rem;
  }
  .links a:hover {
    border-bottom: 2px solid var(--clr-primary-1);
  }
  .social-icons {
    display: none;
  }
  .links-container {
    margin: 2rem 0;
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }
  .show-container {
    height: 10rem;
  }
  @media screen and (min-width: 800px) {
    .nav-center {
      /* max-width: 1170px; */
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 5rem;
    }
    .nav-header {
      padding: 0;
    }
    .nav-toggle {
      display: none;
    }
    .links-container {
      height: auto !important;
    }
    .links {
      display: flex;
    }
    .links a {
      margin: 0;
      padding: 0.5rem;
    }
    .links a:hover {
      background: transparent;
    }
    .social-icons {
      display: flex;
    }
    .social-icons a {
      margin: 0 0.5rem;
      color: var(--clr-primary-5);
      transition: var(--transition);
    }
    .social-icons a:hover {
      color: var(--clr-primary-7);
    }
  }
`;
export default Navbar;
