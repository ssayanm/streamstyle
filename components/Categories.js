import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { categories } from "../utils/constants";
import { useAppContext } from "../context/app_context";
import { FaAngleDown } from "react-icons/fa";

const Categories = () => {
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

  const [value, setValue] = useState(0);

  const { components } = categories[value];
  return (
    <NavContainer>
      <h1 className="title text-center onlydesktop">Revo for</h1>
      <div className="nav-center links-container" ref={linksContainerRef}>
        <div className="nav-links" ref={linksRef}>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaAngleDown />
          </button>
          {categories.map((link, index) => {
            const { id, text } = link;
            return (
              <button
                key={id}
                onClick={() => setValue(index)}
                className={`jbtn ${index === value && "active-btn"}`}
              >
                {text}
              </button>
            );
          })}
        </div>
      </div>
      {components}
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  margin: 0 auto;
  /* padding: 2rem 0; */

  .nav-center {
    width: max-content;
    margin: 0 auto;
    padding: 1rem;
    /* border-radius: 4rem; */
    /* max-width: var(--max-width); */
    /* background: var(--clr-primary-1); */
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

  .links-container {
    /* height: 0; */
    overflow: hidden;
    transition: var(--transition);
    background: var(--clr-primary-1);
  }

  .active-btn {
    /* box-shadow: -2px 0 var(--clr-primary-5); */
    border-bottom: 1px solid var(--clr-white);
    opacity: 1;
  }

  .jbtn {
    background: none;
    border: none;
    color: var(--clr-white);
    font-size: 1.2rem;
    font-family: "MontSemiBold";
    display: block;
    transition: var(--transition);
    cursor: pointer;
    margin: 0 auto;
    /* padding: 0.5rem; */
    /* margin: 0 3rem; */
    &:hover {
      border-bottom: 1px solid var(--clr-white);
    }
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
  }
  .nav-toggle {
    font-size: 1.5rem;
    color: var(--clr-white);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: var(--clr-primary-1);
    transform: rotate(90deg);
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      width: max-content;
      margin: 0 auto;
      padding: 2rem;
      border-radius: 4rem;
      /* max-width: var(--max-width); */
      background: var(--clr-primary-1);
    }
    .nav-links {
      display: flex;
      justify-content: center;
    }

    .jbtn {
      color: var(--clr-white);
      font-size: 2.5rem;
      font-family: "MontSemiBold";
      /* line-height: 1.07; */
      opacity: 0.38;
      letter-spacing: var(--spacing);

      /* padding: 0 0.5rem; */
      margin: 0 3rem;
      &:hover {
        border-bottom: 1px solid var(--clr-white);
      }
    }
  }
`;

export default Categories;
