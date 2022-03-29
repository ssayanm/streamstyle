import HomeHero from "../components/HomeHero";
import Meta from "../components/Meta";
import HomeSectionA from "../components/HomeSectionA";
import HomeSectionB from "../components/HomeSectionB";
import HomeSectionC from "../components/HomeSectionC";
import HomeSectionD from "../components/HomeSectionD";
import HomeSectionE from "../components/HomeSectionE";
import HomeHeroN from "../components/HomeHeroN";

export default function Home() {
  return (
    <main className="home">
      <Meta title="Home" />
      <HomeHeroN />

      <HomeSectionA />
      <HomeSectionB />
      <HomeSectionC />
      <HomeSectionD />
      <HomeSectionE />
    </main>
  );
}
