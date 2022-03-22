import PageHero from "../components/PageHero";
import Meta from "../components/Meta";

import Products from "../components/Products";

const ProductPage = () => {
  return (
    <main>
      <Meta title="Car Wash Products" />
      <PageHero title="Shop Now" />
      <Products />
    </main>
  );
};

export default ProductPage;
