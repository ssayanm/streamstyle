import InspirationHero from "../components/InspirationHero";
import InspirationSectionA from "../components/InspirationSectionA";
import InspirationSectionB from "../components/InspirationSectionB";
import Meta from "../components/Meta";

export default function Inspiration() {
  return (
    <main>
      <Meta title="Inspiration" />
      <InspirationHero />
      <InspirationSectionA />
      <InspirationSectionB />
    </main>
  );
}
