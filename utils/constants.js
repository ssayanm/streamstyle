import { FaApple, FaShopify } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import Brands from "../components/Brands";

export const links = [
  {
    id: 1,
    text: "How It Works",
    url: "/",
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
    url: "/",
  },
  {
    id: 5,
    text: "Pricing",
    url: "/",
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
    components: <FaApple />,
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
