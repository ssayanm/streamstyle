import React from "react";
import { FaHeart } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <p>
        Copyright &copy; {new Date().getFullYear()} Borderfree Technologies Inc.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  p {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 300;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
