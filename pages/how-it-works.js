import Meta from "../components/Meta";
import Categories from "../components/Categories";
import axios from "axios";

export const getStaticProps = async () => {
  try {
    const res = await axios.get(`${process.env.url}/api/how-it-works/`);
    const howItWorks = res.data;

    return { props: { howItWorks } };
  } catch (error) {
    return { error };
  }
};

export default function HowItWorks({ howItWorks }) {
  return (
    <main>
      <Meta title="How It Works" />

      <Categories howItWorks={howItWorks} />
    </main>
  );
}
