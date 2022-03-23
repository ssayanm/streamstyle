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
      <link
        href="/fonts/MontLight.otf"
        rel="preload"
        as="font"
        crossOrigin=""
      />
      <Meta />
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

{
  /*
  <link
        href="../public/fonts/Fontfabric - Mont Black Italic.otf"
        rel="stylesheet"
      />
      <link
        href="../public/fonts/Fontfabric - Mont Black.otf"
        rel="stylesheet"
      />
      <link
        href="../public/fonts/Fontfabric - Mont Bold Italic.otf"
        rel="stylesheet"
      />
      <link
        href="../public/fonts/Fontfabric - Mont Bold.otf"
        rel="stylesheet"
      />
      <link
        href="../public/fonts/Fontfabric - Mont Book Italic.otf"
        rel="stylesheet"
      />
      <link
        href="../public/fonts/Fontfabric - Mont Book.otf"
        rel="stylesheet"
      />
      <link
        href="../public/fonts/Fontfabric - Mont ExtraLight DEMO.otf"
        rel="stylesheet"
      />
      <link
        href="../public/fonts/Fontfabric - Mont ExtraLight Italic.otf"
        rel="stylesheet"
      />
      <link
        href="../public/fonts/Fontfabric - Mont ExtraLight.otf"
        rel="stylesheet"
      />
      <link
        href="../public/fonts/Fontfabric - Mont Hairline Italic.otf"
        rel="stylesheet"
      />
      <link
        href="../public/fonts/Fontfabric - Mont Hairline.otf"
        rel="stylesheet"
      />
      <link
        href="../public/fonts/Fontfabric - Mont Heavy DEMO.otf"
        rel="stylesheet"
      />
      <link
        href="../public/fonts/Fontfabric - Mont Heavy Italic.otf"
        rel="stylesheet"
      />
      <link
        href="../public/fonts/Fontfabric - Mont Hairline.otf"
        rel="stylesheet"
      />
      <link
        href="../public/fonts/Fontfabric - Mont Heavy.otf"
        rel="stylesheet"
      />
      <link
        href="../public/fonts/Fontfabric - Mont Light Italic.otf"
        rel="stylesheet"
      />
      <link
        href="../public/fonts/Fontfabric - Mont Light.otf"
        rel="stylesheet"
      />
      <link
        href="../public/fonts/Fontfabric - Mont Regular Italic.otf"
        rel="stylesheet"
      />
      <link href="../fonts/Fontfabric - Mont Regular.otf" rel="stylesheet" />
      <link
        href="../public/fonts/Fontfabric - Mont SemiBold Italic.otf"
        rel="stylesheet"
      />
      <link
        href="../public/fonts/Fontfabric - Mont SemiBold.otf"
        rel="stylesheet"
      />
      <link
        href="../public/fonts/Fontfabric - Mont Thin Italic.otf"
        rel="stylesheet"
      />
      <link
        href="../public/fonts/Fontfabric - Mont Thin.otf"
        rel="stylesheet"
      />
      <link href="../fonts/Mont Heavy DEMO.ttf" rel="stylesheet" />
*/
}
