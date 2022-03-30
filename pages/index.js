import Meta from "../components/Meta";
import HomeHero from "../components/HomeHero";
import HomeSectionA from "../components/HomeSectionA";
import HomeSectionB from "../components/HomeSectionB";
import HomeSectionC from "../components/HomeSectionC";
import HomeSectionD from "../components/HomeSectionD";
import HomeSectionE from "../components/HomeSectionE";

export default function Home() {
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
