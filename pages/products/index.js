import PageHero from "../../components/PageHero";
import Meta from "../../components/Meta";
import Products from "../../components/Products";

const index = () => {
  return (
    <>
      <Meta title="Car Wash Products" />
      <PageHero title="Shop Now" />
      <Products />
    </>
  );
};

export default index;
