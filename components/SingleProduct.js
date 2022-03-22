import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import PageHero from "./PageHero";

const SingleProduct = ({ product }) => {
  const { title, desc, content, image, id, price, slug } = product;
  return (
    <Wrapper>
      <PageHero title={title} product />
      <div className="section section-center page">
        <Link href="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          {image && (
            <Image
              alt={title}
              src={image.url}
              width={500}
              height={500}
              // className="shop-img"
            />
          )}
          <section className="content">
            <h3>{title}</h3>

            <h5 className="price">{price}</h5>

            <ReactMarkdown children={content} className="desc" />

            <button
              style={{ display: "none" }}
              className="snipcart-add-item btn"
              data-item-id={id}
              data-item-price={price}
              data-item-url={`/product/${slug}`}
              data-item-content={content}
              data-item-image={image.url}
              data-item-name={title}
              data-item-desc={desc}
              // data-itemName={title}
            >
              Book Now
            </button>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-1);
  }
  .desc {
    line-height: 2;
    max-width: 65em;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProduct;
