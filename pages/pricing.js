import Image from "next/image";
import Meta from "../components/Meta";
import Price from "../components/Price";
import PriCing from "../components/PriCing";

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
