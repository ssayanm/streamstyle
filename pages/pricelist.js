import styled from "styled-components";
import PageHero from "../components/PageHero";

import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { useAppContext } from "../context/app_context";
import Loading from "../components/Loading";
import Error from "../components/Error";
import PriceList from "../components/PriceList";
import Meta from "../components/Meta";

const PriceListPage = () => {
  const {
    pricelists,
    pricelists_loading: loading,
    pricelists_error: error,
  } = useAppContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <main>
      <Meta title="Price List" />
      <PageHero title="Price List" />
      <Wrapper className="section">
        <div className="title">
          <h2>Price List</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center featured">
          {pricelists.map((pricelist) => (
            <PriceList {...pricelist} key={pricelist.id} />
          ))}
        </div>
        <Link href="/products">
          <a className="btn">Contact Us</a>
        </Link>
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
export default PriceListPage;
