import axios from "axios";
import Meta from "../components/Meta";
import HomeHero from "../components/HomeHero";
import HomeSectionA from "../components/HomeSectionA";
import HomeSectionB from "../components/HomeSectionB";
import HomeSectionC from "../components/HomeSectionC";
import HomeSectionD from "../components/HomeSectionD";
import HomeSectionE from "../components/HomeSectionE";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loading from "../components/Loading";

// export const getStaticProps = async () => {
//   try {
//     const res = await axios.get(`${process.env.url}/api/home/`);
//     const home = res.data;

//     return { props: { home } };
//   } catch (error) {
//     return { error };
//   }
// };

export default function Home({ home }) {
  return (
    <main>
      <Meta title="Home" />
      <HomeHero />
      <HomeSectionA />
      <HomeSectionB />
      <HomeSectionC />
      <HomeSectionD />
      <HomeSectionE />
    </main>
  );
}
