import axios from "axios";
import SingleProduct from "../../components/SingleProduct";

export const getStaticPaths = async () => {
  try {
    const res = await axios.get(`${process.env.url}/products/`);
    const products = res.data;
    // map data to an array of path objects with params (slug or id -> then needs to add toString)
    const paths = products.map((service) => {
      return {
        params: { slug: service.slug },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return { error };
  }
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  try {
    const res = await axios.get(`${process.env.url}/products/?slug=${slug}`);
    const product = res.data[0];
    return { props: { product } };
  } catch (error) {
    return { error };
  }
};

const Details = ({ product }) => {
  return (
    <div>
      <SingleProduct product={product} key={product.id} />
    </div>
  );
};

export default Details;
