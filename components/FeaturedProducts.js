import styled from "styled-components";
import PageHero from "./PageHero";
import Link from "next/link";
import { useAppContext } from "../context/app_context";
import Loading from "./Loading";
import Error from "./Error";
import Product from "./Product";

const FeaturedProducts = () => {
  const {
    featured_products: products,
    products_loading: loading,
    products_error: error,
  } = useAppContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <main>
      <Wrapper className="section">
        <div className="title">
          <h2>Car Wash Products</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center featured">
          {products.slice(0, 4).map((product) => (
            <Product {...product} key={product.id} />
          ))}
        </div>

        <Link href="/shop">
          <a className="btn">Load More</a>
        </Link>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-9);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 1.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    }
  }
`;
export default FeaturedProducts;
