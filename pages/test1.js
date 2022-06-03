import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "../utils/constants";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const test1 = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <header class="header">
        <a href="#" class="logo">
          LR
        </a>

        <input class="side-menu" type="checkbox" id="side-menu" />
        <label class="hamb" for="side-menu">
          <span class="hamb-line"></span>
        </label>

        <nav class="nav">
          <ul class="menu">
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Blog</a>{" "}
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background: red;
  .header {
    background-color: var(--black);
    box-shadow: 1px 1px 5px 0px var(--grey);
    position: sticky;
    top: 0;
    width: 100%;
  }

  /* Logo */
  .logo {
    display: inline-block;
    color: var(--clr-black);
    font-size: 60px;
    margin-left: 10px;
  }

  /* Nav menu */
  .nav {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: var(--clr-black);
    overflow: hidden;
  }

  .menu a {
    display: block;
    padding: 30px;
    color: var(--clr-white);
  }

  .menu a:hover {
    background-color: var(--grey);
  }

  .nav {
    max-height: 0;
    transition: max-height 0.5s ease-out;
  }

  /* Menu Icon */

  .hamb {
    cursor: pointer;
    float: right;
    padding: 40px 20px;
  }

  .hamb-line {
    background: var(--clr-black);
    display: block;
    height: 2px;
    position: relative;
    width: 24px;
  }

  .hamb-line::before,
  .hamb-line::after {
    background: var(--clr-black);
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  .hamb-line::before {
    top: 5px;
  }

  .hamb-line::after {
    top: -5px;
  }

  .side-menu {
    display: none;
  }

  /* Toggle menu icon */

  .side-menu:checked ~ nav {
    max-height: 100%;
  }

  .side-menu:checked ~ .hamb .hamb-line {
    background: transparent;
  }

  .side-menu:checked ~ .hamb .hamb-line::before {
    transform: rotate(-45deg);
    top: 0;
  }

  .side-menu:checked ~ .hamb .hamb-line::after {
    transform: rotate(45deg);
    top: 0;
  }

  /* Responsiveness */

  /* @media (min-width: 768px) {
    .nav {
      max-height: none;
      top: 0;
      position: relative;
      float: right;
      width: fit-content;
      background-color: transparent;
    }

    .menu li {
      float: left;
    }

    .menu a:hover {
      background-color: transparent;
      color: var(--grey);
    }

    .hamb {
      display: none;
    } */
  }
`;

export default test1;
