import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { featuredChannels } from "../utils/constants";
import FeaturedBox from "./FeaturedBox";

const InspirationSectionA = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Wrapper>
      <div className="container">
        {" "}
        <div className="section-center ">
          <div className="fbtn-container">
            <button className="fbtn" onClick={() => setToggle(!toggle)}>
              View All
            </button>
          </div>
          {toggle ? (
            <div className="channels">
              {featuredChannels.map((channel) => {
                return <FeaturedBox channel={channel} key={channel.id} />;
              })}
            </div>
          ) : (
            <div className="channels">
              {featuredChannels.slice(0, 4).map((channel) => {
                return <FeaturedBox channel={channel} key={channel.id} />;
              })}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default InspirationSectionA;

const Wrapper = styled.section`
  .container {
    padding: 5rem 2rem;
  }

  .fbtn-container {
    text-align: right;
  }
  .fbtn {
    background: none;
    color: var(--clr-black);
    border: none;

    cursor: pointer;
  }

  .channels {
    display: grid;
  }
  @media (min-width: 992px) {
    .container {
    }

    .channels {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 2rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;
