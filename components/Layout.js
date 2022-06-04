import Footer from "./Footer";
import Navbar from "./Navbar";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      {children}

      <Footer />
      <link
        href="/fonts/MontRegular.otf"
        rel="preload"
        as="font"
        crossOrigin=""
      />
      <link href="/fonts/MontBold.otf" rel="preload" as="font" crossOrigin="" />
      <link
        href="/fonts/MontSemiBold.otf"
        rel="preload"
        as="font"
        crossOrigin=""
      />
    </>
  );
};

export default Layout;
