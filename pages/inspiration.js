import Meta from "../components/Meta";
import InspirationHero from "../components/InspirationHero";
import InspirationSectionA from "../components/InspirationSectionA";
import InspirationSectionB from "../components/InspirationSectionB";
import InspirationSectionC from "../components/InspirationSectionC";

export default function Inspiration() {
  return (
    <main>
      <Meta title="Inspiration" />
      <InspirationHero />
      <InspirationSectionA />
      <InspirationSectionB />
      <InspirationSectionC />
    </main>
  );
}
