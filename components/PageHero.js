import styled from "styled-components";
import Link from "next/link";

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h4>
          <Link href="/">
            <a>Home</a>
          </Link>
          {product && (
            <Link href="/products">
              <a>/Products</a>
            </Link>
          )}
          / {title}
        </h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-9);
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default PageHero;
