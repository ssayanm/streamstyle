import axios from "axios";
import Meta from "../components/Meta";
import HomeHero from "../components/HomeHero";
import HomeInfo from "../components/HomeInfo";
import Loading from "../components/Loading";

export const getStaticProps = async () => {
  try {
    const res = await axios.get(
      `${process.env.url}/api/streamstylehome/?populate=*`
    );

    const home = res.data;

    if (!home)
      return (
        <div>
          <Loading />
        </div>
      );
    return { props: { home } };
  } catch (error) {
    return { error };
  }
};

const Home = ({ home }) => {
  return (
    <>
      <Meta title="Home" />
      <HomeHero home={home} />
      <HomeInfo home={home} />
    </>
  );
};

export default Home;
