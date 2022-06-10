import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="foot">
        <div data-aos="zoom-in">
          <Link href="/">
            <a>
              <Image
                alt="streamstyle"
                src="/images/sslogo.png"
                width={300}
                height={68}
                quality={100}
                objectFit="contain"
              />
            </a>
          </Link>
        </div>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/company/revo-video/"
            target="_blank"
          >
            <FaLinkedin className="social-icon" />
          </a>
        </div>
      </div>
      <hr />
      <p>Copyright &copy; {new Date().getFullYear()} Streamstyle Inc.</p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: var(--clr-black);

  padding: 5rem 2rem 2rem 2rem;
  color: var(--clr-white);
  .foot {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 0.85rem;
    align-items: center;
  }
  hr {
    color: var(--clr-white);
    border: 1px solid #fff;
    margin: 2rem 0;
  }

  p {
    color: var(--clr-white);
    text-align: center;
  }

  @media (min-width: 992px) {
    .foot {
      padding: 4rem;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      /* justify-items: center; */
      align-items: center;
    }
  }
`;
export default Footer;
