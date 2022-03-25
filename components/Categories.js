import React, { useState } from "react";
import styled from "styled-components";
import { categories } from "../utils/constants";
import { useAppContext } from "../context/app_context";
import { FaBars } from "react-icons/fa";

const Categories = () => {
  const { openSidebar } = useAppContext();

  const [value, setValue] = useState(0);

  const { components } = categories[value];
  return (
    <NavContainer>
      <h1 className="title text-center onlydesktop">Revo for</h1>
      <div className="nav-center">
        <ul className="nav-links">
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
        </ul>
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
    padding: 2rem;
    border-radius: 4rem;
    /* max-width: var(--max-width); */
    background: var(--clr-primary-1);
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

  .jbtn {
    background: none;
    border: none;
    color: var(--clr-white);
    font-size: 2.5rem;
    font-family: "MontSemiBold";
    /* line-height: 1.07; */
    opacity: 0.38;
    letter-spacing: var(--spacing);
    cursor: pointer;
    /* padding: 0 0.5rem; */
    margin: 0 3rem;
    &:hover {
      border-bottom: 1px solid var(--clr-white);
    }
  }

  .active-btn {
    /* box-shadow: -2px 0 var(--clr-primary-5); */
    border-bottom: 1px solid var(--clr-white);
    opacity: 1;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
    }
    .nav-links {
      display: flex;
      justify-content: center;
      /* li {
        margin: 0 0.5rem;
      } */
    }

    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Categories;
