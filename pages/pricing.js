import Image from "next/image";
import axios from "axios";
import Meta from "../components/Meta";
import Price from "../components/Price";
import PriCing from "../components/PriCing";

// export const getStaticProps = async () => {
//   try {
//     const res = await axios.get(`${process.env.url}/api/pricing/`);
//     const res1 = await axios.get(`${process.env.url}/api/features-prices/`);
//     const pricing = res.data;
//     const features = res1.data;

//     return { props: { pricing, features } };
//   } catch (error) {
//     return { error };
//   }
// };

export default function Pricing() {
  return (
    <main>
      <Meta title="Pricing" />
      <PriCing />
      <Price />
      <center className="space">
        <Image
          alt="revo"
          src="/images/pricingim.png"
          width={250}
          height={252}
          objectFit="cover"
        />
      </center>
    </main>
  );
}
