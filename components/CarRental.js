import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";

const CarRental = ({
  name,
  location,
  image,
  id,
  price,
  email,
  phonenumber,
}) => {
  return (
    <Wrapper>
      <article className="carrental">
        <div className="image-box">
          {image && (
            <Image
              alt={name}
              src={image.url}
              width={700}
              height={450}
              className="shop-img"
            />
          )}
        </div>

        <div className="carrental-card">
          <div className="carrental-body">
            <h5 className="boxx">
              <AiFillCar className="right icon" />
              {name}
            </h5>
            <h5 className="boxx">
              <FaLocationArrow className="right icon" />
              {location}
            </h5>
            <h5 className="boxx1">
              <FaEnvelope className="right icon" />
              {email}
            </h5>
            <h5 className="boxx1">
              <FaMobileAlt className="right icon" />
              {phonenumber}
            </h5>
          </div>

          {/* <p>{desc.split(" ").splice(0, 12).join(" ")}...</p>*/}
          <div className="carrental-footer">
            <p>${price} / day</p>
            <Link href="/contact">
              <a className="btn"> Book Now</a>
            </Link>
            <button
              style={{ display: "none" }}
              className="snipcart-add-item btn"
              data-item-id={id}
              data-item-price={price}
              // data-item-url={`/carrental/${slug}`}
              data-item-email={email}
              data-item-image={image.url}
              data-item-name={name}
              data-item-phonenumber={phonenumber}
              data-item-location={location}
            >
              Book Now
            </button>
          </div>
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

  .carrental {
    display: block;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    /* margin-bottom: 2.5rem; */
  }
  .carrental:hover {
    box-shadow: var(--dark-shadow);
    transform: scale(1.02);
  }
  .carrental article {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
  }
  .carrental-card {
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 1.5rem 1rem;
  }
  .carrental-img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    /* height: 22rem; */
  }

  .carrental-card h4 {
    color: var(--clr-grey-1);
  }

  .carrental-body {
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

  .carrental-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .carrental-footer p {
    margin-bottom: 0;
    font-weight: bold;
    color: var(--clr-grey-5);
  }
  .carrental-footer p:first-of-type {
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
    /* .blogs-center {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
      column-gap: 2rem;
      row-gap: 2rem;
    } */
    .carrental-img {
      height: 17.5rem;
    }
  }
`;
export default CarRental;
