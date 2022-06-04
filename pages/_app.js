import { useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/index.css";
import "antd/dist/antd.css";

import AOS from "aos";
import "aos/dist/aos.css";

// import { useRouter } from "next/router";
// import Loading from "../components/Loading";

const MyApp = ({ Component, pageProps }) => {
  // const router = useRouter();

  // const [pageLoading, setPageLoading] = useState(false);
  // useEffect(() => {
  //   const handleStart = () => {
  //     setPageLoading(true);
  //   };
  //   const handleComplete = () => {
  //     setPageLoading(false);
  //   };

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeError", handleComplete);
  // }, [router]);

  useEffect(() => {
    AOS.init({
      // easing: "ease-out-cubic",
      once: false,
      delay: 200,
      duration: 1200,
      offset: 50,
    });
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
