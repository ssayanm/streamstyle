import axios from "axios";
import Meta from "../components/Meta";
import HomeHero from "../components/HomeHero";

import Loading from "../components/Loading";
import Marketers from "../components/Marketers";

export const getStaticProps = async () => {
  try {
    const res = await axios.get(`${process.env.url}/api/home/?populate=*`);
    const res1 = await axios.get(
      `${process.env.url}/api/how-it-works?populate=*`
    );
    const home = res.data;
    const sales = res1.data;
    if (!home && !sales)
      return (
        <div>
          <Loading />
        </div>
      );
    return { props: { home, sales } };
  } catch (error) {
    return { error };
  }
};

const Home = ({ home, sales }) => {
  return (
    <>
      <Meta title="Home" />
      <HomeHero home={home} />
      <Marketers sales={sales} />
    </>
  );
};

export default Home;
