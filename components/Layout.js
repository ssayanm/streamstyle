import Footer from "./Footer";
import Navbar from "./Navbar";
import Meta from "./Meta";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
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

      <Meta />
      <Navbar />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
