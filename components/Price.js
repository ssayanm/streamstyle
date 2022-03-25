import styled from "styled-components";
import { GoPrimitiveDot } from "react-icons/go";

import { GrClose } from "react-icons/gr";

const Price = () => {
  return (
    <Wrapper>
      <div class="grid">
        <span>
          <strong>Features</strong>
        </span>
        <span>
          <strong>for DTC</strong>
        </span>
        <span>
          <strong>for Brands</strong>
        </span>
        <span>
          <strong>for Enterprise</strong>
        </span>

        <span>One Click Catalog Sync</span>
        <span>
          <GoPrimitiveDot className="greendot" />
        </span>
        <span>
          <GoPrimitiveDot className="greendot" />
        </span>
        <span>
          <GoPrimitiveDot className="greendot" />
        </span>

        <span>Stream one to many and up to 11 guests</span>
        <span>
          <GoPrimitiveDot className="greendot" />
        </span>
        <span>
          <GoPrimitiveDot className="greendot" />
        </span>
        <span>
          <GoPrimitiveDot className="greendot" />
        </span>

        <span>Full Studio</span>
        <span>
          <GoPrimitiveDot className="greendot" />
        </span>
        <span>
          <GoPrimitiveDot className="greendot" />
        </span>
        <span>
          <GoPrimitiveDot className="greendot" />
        </span>

        <span>AI Try-On</span>
        <span>
          <GoPrimitiveDot className="greendot" />
        </span>
        <span>
          <GoPrimitiveDot className="greendot" />
        </span>
        <span>
          <GoPrimitiveDot className="greendot" />
        </span>

        <span>Branded Consumer screen</span>
        <span>For Fee</span>
        <span>
          <GoPrimitiveDot className="greendot" />
        </span>
        <span>
          <GoPrimitiveDot className="greendot" />
        </span>

        <span>One-Click Checkout</span>
        <span>
          <GoPrimitiveDot className="greendot" />
        </span>
        <span>
          <GoPrimitiveDot className="greendot" />
        </span>
        <span>
          <GoPrimitiveDot className="greendot" />
        </span>

        <span>Creator Community Matching</span>
        <span>
          <GrClose />
        </span>
        <span>For Fee</span>
        <span>For Fee</span>

        <span>Marketplace Placement</span>
        <span>For Fee</span>
        <span>
          <GoPrimitiveDot className="greendot" />
        </span>
        <span>
          <GoPrimitiveDot className="greendot" />
        </span>

        <span>Marketplace Promotion</span>
        <span>For Fee</span>
        <span>
          <GrClose className="greendot" />
        </span>
        <span>
          <GoPrimitiveDot className="greendot" />
        </span>

        <span>Creator Payment Wallets</span>
        <span>For Fee</span>
        <span>Included</span>
        <span>Included</span>

        <span>Training</span>
        <span>For Fee</span>
        <span>Included</span>
        <span>Included</span>

        <span>Platform customization</span>
        <span>For Fee</span>
        <span>For Fee</span>
        <span>For Fee</span>

        <span>Customer Care</span>
        <span>e-mail & live chat 9-5 M-F EST</span>
        <span>24/7 support 2h response time</span>
        <span>24/7 support 30min response time</span>

        <span>Client Servicess</span>
        <span>N/A</span>
        <span>N/A</span>
        <span>N/A</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  box-shadow: var(--dark-shadow);

  border-radius: 1rem;
  font-size: 0.75rem;
  /* margin: 0 auto; */
  background-color: var(--clr-white);
  .grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    margin: 3rem;
  }

  .grid > span {
    padding: 1.5rem 0rem;
    border-bottom: 1px solid black;

    strong {
      font-family: "MontBold";
    }
  }

  @media (min-width: 992px) {
    width: 70vw;
    font-size: 1.25rem;
    padding: 2rem;
    margin: 0 auto;
    .grid {
      grid-template-columns: 2fr 1fr 1fr 1fr;
      margin: 3rem;
    }
  }
`;
export default Price;
