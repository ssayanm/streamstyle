import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { categories } from "../utils/constants";

import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Categories = () => {
  const [value, setValue] = useState(0);
  const { components } = categories[value];

  return (
    <NavContainer>
      <h1 className="title text-center onlydesktop">Revo for</h1>
      {
        <Tabs
          defaultActiveKey="1"
          onChange={callback}
          centered="true"
          className="onlydesktop"
        >
          {categories.map((link, index) => {
            const { id, text, components } = link;
            return (
              <TabPane tab={text} key={id}>
                {components}
              </TabPane>
            );
          })}
        </Tabs>
      }

      <div className="onlymobile navmob">
        <select className="mobselect">
          {categories.map((link, index) => {
            const { id, text } = link;
            return (
              <option key={id} onClick={() => setValue(index)}>
                {text}
              </option>
            );
          })}
        </select>
        {components}
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  margin: 0 auto;
  /* padding: 2rem 0; */

  .navmob {
    width: 90vw;
    margin: 0 auto;
  }

  .ant-tabs-nav-wrap {
    border-radius: 3rem;
    background: var(--clr-primary-1);
    padding: 1rem;
    margin: 0 5rem;
  }
  .ant-tabs-top > .ant-tabs-nav::before {
    border-bottom: none;
  }

  .ant-tabs-tab {
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.38);
    margin: 0 3rem;
    cursor: pointer;
    font-family: "MontSemiBold";
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: var(--clr-white);
  }

  .ant-tabs-ink-bar {
    position: absolute;
    background: var(--clr-white);
    pointer-events: none;
  }

  .mobselect {
    border-radius: 3rem;
    padding: 1rem;
    box-shadow: none;
    font-size: 1.5rem;
    width: 100%;
    font-family: "MontBold";
    border: none;
    text-align: center;
    color: var(--clr-white);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    background: url(/images/white-down-arrow.png) 93% / 10% no-repeat
      var(--clr-primary-1);
  }

  select::-ms-expand {
    display: none; /* Remove default arrow in Internet Explorer 10 and 11 */
  }
  .nav-center {
    width: max-content;
    margin: 0 auto;
    padding: 1rem;
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
      width: 90vw;
      margin: 0 auto;
      padding: 2rem;
      border-radius: 4rem;
      /* max-width: var(--max-width); */
      background: var(--clr-primary-1);
    }
    .nav-links {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .jbtn {
      color: var(--clr-white);
      font-size: 2rem;
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
    .active-btn {
      border-bottom: 1px solid var(--clr-white);
      opacity: 1;
    }
  }
`;

export default Categories;
