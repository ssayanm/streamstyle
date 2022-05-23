import Image from "next/image";
import axios from "axios";
import Meta from "../components/Meta";
import Price from "../components/Price";
import PriCing from "../components/PriCing";
import Loading from "../components/Loading";

export const getStaticProps = async () => {
  try {
    const res = await axios.get(`${process.env.url}/api/pricing/?populate=*`);
    const res1 = await axios.get(
      `${process.env.url}/api/features-prices/?populate=*`
    );
    const pricing = res.data;
    const features = res1.data;
    if (!pricing || !features)
      return (
        <div>
          <Loading />
        </div>
      );
    return { props: { pricing, features } };
  } catch (error) {
    return { error };
  }
};

export default function Pricing({ pricing, features }) {
  return (
    <main>
      <Meta title="Pricing" />
      <PriCing pricing={pricing} />
      <Price pricing={pricing} features={features} />
    </main>
  );
}
