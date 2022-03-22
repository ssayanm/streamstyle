import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Product = ({ title, desc, content, image, id, price, slug }) => {
  return (
    <Wrapper>
      <article className="product">
        <div className="image-box">
          {image && (
            <Image
              alt={title}
              src={image.url}
              width={500}
              height={500}
              className="shop-img"
            />
          )}
        </div>

        <div className="product-card">
          <div className="product-body">
            <h5>
              <FaRegArrowAltCircleRight className="right icon" />
              {title}
            </h5>

            {/*  <h5>
              <FaEnvelope className="right icon" />
              {<>{desc.split(" ").splice(0, 20).join(" ")}...</>}
          </h5>*/}
          </div>

          <div className="product-footer">
            <p>${price}</p>
            <Link href="/contact">
              <a className="btn"> Book Now</a>
            </Link>
            <button
              style={{ display: "none" }}
              className="snipcart-add-item btn"
              data-item-id={id}
              data-item-price={price}
              // data-item-url={`/product/${slug}`}
              data-item-content={content}
              data-item-image={image.url}
              data-item-name={title}
              data-item-desc={desc}
            >
              Book Now
            </button>
          </div>
          <Link href={`/products/${slug}`} key={id}>
            <a className="btn" style={{ display: "none" }}>
              Buy Now
            </a>
          </Link>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }

  .product {
    display: block;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    /* margin-bottom: 2.5rem; */
  }
  .product:hover {
    box-shadow: var(--dark-shadow);
    transform: scale(1.02);
  }
  .product article {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
  }
  .product-card {
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 1.5rem 1rem;
  }
  .product-img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    /* height: 22rem; */
  }

  .product-card h4 {
    color: var(--clr-grey-1);
  }

  .product-body {
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
    /* column-gap: 1rem; */
    /* row-gap: 2rem; */
    margin-bottom: 1rem;

    .icon {
      color: var(--clr-primary-1);
    }

    .right {
      margin-right: 10px;
    }
  }

  .product-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .product-footer p {
    margin-bottom: 0;
    font-weight: bold;
    color: var(--clr-grey-5);
  }
  .product-footer p:first-of-type {
    display: inline-block;
    background: var(--clr-grey-3);
    color: var(--clr-white);
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
  }

  .snipcart-add-item,
  .btn {
    margin: 0 !important;
  }
  @media screen and (min-width: 576px) {
    .product-img {
      height: 17.5rem;
    }
  }
`;
export default Product;
