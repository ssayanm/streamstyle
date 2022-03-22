import Footer from "./Footer";
import Navbar from "./Navbar";
import Meta from "./Meta";
import Sidebar from "./Sidebar";
import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <div>
      <link rel="preconnect" href="<https://app.snipcart.com>" />
      <link rel="preconnect" href="<https://cdn.snipcart.com>" />
      <link
        rel="stylesheet"
        href="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.css"
      />
      <Meta />
      <Navbar />
      <Sidebar />
      {children}
      <Footer />

      {/* <script
        async
        src="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.js"
     ></script>*/}
      <Script src="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.js" />
      <div hidden id="snipcart" data-api-key={process.env.snipurl}></div>
    </div>
  );
};

export default Layout;
