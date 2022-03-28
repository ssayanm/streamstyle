import { FaApple, FaShopify } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { GrAndroid } from "react-icons/gr";
import Brands from "../components/Brands";
import HomeSectionB from "../components/HomeSectionB";

export const links = [
  {
    id: 1,
    text: "How It Works",
    url: "/how-it-works",
  },
  {
    id: 2,
    text: "clients",
    url: "/",
  },
  {
    id: 3,
    text: "About Us",
    url: "/",
  },
  {
    id: 4,
    text: "Inspiration",
    url: "/inspiration",
  },
  {
    id: 5,
    text: "Pricing",
    url: "/pricing",
  },
  {
    id: 6,
    text: "Get Started",
    url: "/",
  },
];

export const footerLinks = [
  {
    id: 1,
    text: "FAQ",
    url: "/",
  },
  {
    id: 2,
    text: "Studio Login",
    url: "/",
  },
  {
    id: 3,
    text: "Talk to Sales",
    url: "/",
  },
  {
    id: 4,
    text: "Careers",
    url: "/",
  },
];

export const footerLinksAlt = [
  {
    id: 1,
    text: "Contact",
    url: "/",
  },
  {
    id: 2,
    text: "Terms & Conditions",
    url: "/",
  },
  {
    id: 3,
    text: "Privacy Policy",
    url: "/",
  },
];

export const social = [
  {
    id: 1,
    icon: <FaApple className="social-icon "></FaApple>,
    url: "#",
  },
  {
    id: 4,
    icon: <GrAndroid className="social-icon "></GrAndroid>,
    url: "#",
  },

  {
    id: 5,
    icon: <FaShopify className="social-icon "></FaShopify>,
    url: "#",
  },
];

export const categories = [
  {
    id: 1,
    text: "Brands",
    url: "/",
    components: <Brands />,
  },
  {
    id: 2,
    text: "Creators",
    url: "/",
    components: <HomeSectionB />,
  },
  {
    id: 3,
    text: "Publishers & Distributors",
    url: "/",
    components: <GrAndroid />,
  },
  {
    id: 4,
    text: "Direct Marketers",
    url: "/",
    components: <FaShopify />,
  },
];

export const pricing = [
  {
    id: 1,
    title: "DTC",
    info: "Any DTC brand on e-commerce platforms. Download the app and go live",
    desc: [
      "5% of gross sales generated on the platform",
      "No monthly fee",
      "No code environment",
      "No obligation",
    ],
  },
  {
    id: 2,
    title: "Brands White Label",
    info: "For brands that want to customize the consumer experience.",
    desc: [
      "5% of gross sales generated on the platform",
      "Volume discounts",
      "No code environment",
    ],
  },
  {
    id: 3,
    title: "Revo for Enterprise SaaS",
    info: "For large companies who want to fully customize and even extend the Revo platform within their ecosystem",
    desc: [
      "5% of gross sales generated on the platform",
      "Volume discounts",
      "No code environment",
    ],
  },
];

export const channels = [
  {
    id: 1,
    title: "Title here",
  },
  {
    id: 2,
    title: "Title here",
  },

  {
    id: 3,
    title: "Title here",
  },
  {
    id: 4,
    title: "Title here",
  },
  {
    id: 5,
    title: "Title here",
  },
  {
    id: 6,
    title: "Title here",
  },

  {
    id: 7,
    title: "Title here",
  },
  {
    id: 8,
    title: "Title here",
  },
  {
    id: 9,
    title: "Title here",
  },
  {
    id: 10,
    title: "Title here",
  },
  {
    id: 11,
    title: "Title here",
  },

  {
    id: 12,
    title: "Title here",
  },
  {
    id: 13,
    title: "Title here",
  },
  {
    id: 14,
    title: "Title here",
  },

  {
    id: 15,
    title: "Title here",
  },
  {
    id: 16,
    title: "Title here",
  },
];

export const featuredChannels = [
  {
    id: 1,
    title: "Title here",
    image: "/images/image4.png",
  },
  {
    id: 2,
    title: "Title here",
    image: "/images/image3.png",
  },

  {
    id: 3,
    title: "Title here",
    image: "/images/image4.png",
  },
  {
    id: 4,
    title: "Title here",
    image: "/images/image3.png",
  },
  {
    id: 5,
    title: "Title here",
    image: "/images/image4.png",
  },
  {
    id: 6,
    title: "Title here",
    image: "/images/image3.png",
  },

  {
    id: 7,
    title: "Title here",
    image: "/images/image4.png",
  },
  {
    id: 8,
    title: "Title here",
    image: "/images/image3.png",
  },
];

export const featuresDTC = [
  {
    id: 1,
    feature: "Do I have to allow the use of cookies?",
    text: <GoPrimitiveDot className="greendot" />,
  },
  {
    id: 2,
    feature: "Do I have to allow the use of cookies?",
    text: <GoPrimitiveDot className="greendot" />,
  },
];

export const featuresBrands = [
  {
    id: 1,
    feature: "Do I have to allow the use of cookies?",
    text: <GoPrimitiveDot className="greendot" />,
  },
];

export const featuresEnterprise = [
  {
    id: 1,
    feature: "Do I have to allow the use of cookies?",
    text: <GoPrimitiveDot className="greendot" />,
  },
];
