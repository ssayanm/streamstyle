import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

const Nav = () => {
  const router = useRouter();

  return (
    <NavContainer
      style={{
        background: "var(--clr-primary-1)",
      }}
    >
      <div className="nav-center">
        <div className="nav-header">
          <Link href="/">
            <a>
              <Image
                alt="streamstyle"
                src="/images/sslogo.png"
                width={300}
                height={68}
                quality={100}
                objectFit="contain"
                priority
              />
            </a>
          </Link>{" "}
          <Link href="/">
            <a className="btn-alt">call sales</a>
          </Link>
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  /* background: var(--clr-primary-1); */
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .btn-alt {
    margin-top: 2rem;
  }

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (min-width: 992px) {
    height: 9rem;
    .btn-alt {
      margin-top: 0;
    }
    .nav-header {
      justify-content: space-between;
    }
    .nav-center {
      /* padding: 4rem; */
      /* grid-template-columns: 1fr 1fr; */
      /* gap: 1rem; */

      /* justify-items: center; */
      /* align-items: center; */
    }
  }
`;

export default Nav;
