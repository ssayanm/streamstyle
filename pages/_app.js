import Layout from "../components/Layout";
import "../styles/index.css";
import { AppProvider } from "../context/app_context";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
