import styled from "styled-components";
import PageHero from "./PageHero";
import Link from "next/link";
import { useAppContext } from "../context/app_context";
import Loading from "./Loading";
import Error from "./Error";
import Product from "./Product";

const Products = () => {
  const {
    products,
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
          <h2>Shop Now</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center featured">
          {products.map((product) => (
            <Product {...product} key={product.id} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
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
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;
export default Products;
