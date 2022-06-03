import { FaApple, FaShopify, FaLinkedin } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import Brands from "../components/Brands";
import Creators from "../components/Creators";
import Marketers from "../components/Marketers";
import Publishers from "../components/Publishers";

export const links = [
  {
    id: 1,
    text: "How It Works",
    url: "/how-it-works",
  },

  // {
  //   id: 4,
  //   text: "Inspiration",
  //   url: "/inspiration",
  // },
  {
    id: 5,
    text: "Pricing",
    url: "/pricing",
  },
  {
    id: 6,
    text: "Get Started",
    url: "/get-started",
  },
];

export const footerLinks = [
  {
    id: 2,
    text: "Studio Login",
    url: "https://studio.revo.video/#/login2",
  },

  {
    id: 4,
    text: "Careers",
    url: "https://jobs.wrk.xyz/borderFee",
  },
];

export const footerLinksAlt = [
  {
    id: 2,
    text: "Terms & Conditions",
    url: "/terms",
  },
  {
    id: 3,
    text: "Privacy Policy",
    url: "/privacy",
  },
];

export const social = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon "></FaLinkedin>,
    url: "https://www.linkedin.com/company/revo-video/",
  },
];

export const categories = [
  {
    id: 1,
    text: "Brands",
    label: "Brands",
    url: "/",
    components: <Brands />,
  },
  {
    id: 2,
    text: "Creators",
    label: "Creators",
    url: "/",
    components: <Creators />,
  },
  {
    id: 3,
    text: "Publishers & Distributors",
    label: "Publishers & Distributors",
    url: "/",
    components: <Publishers />,
  },
  {
    id: 4,
    text: "Direct Sellers",
    label: "Direct Sellers",
    url: "/",
    components: <Marketers />,
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

export const featuresPrice = [
  {
    id: 1,
    feature: "One Click Catalog Sync",
    dtc: true,
    brands: true,
    enterprise: true,
  },
  {
    id: 2,
    feature: "Stream one to many and up to 11 guests",
    dtc: true,
    brands: true,
    enterprise: true,
  },
  {
    id: 3,
    feature: "Full Studio",
    dtc: true,
    brands: true,
    enterprise: true,
  },
  {
    id: 4,
    feature: "AI Try-On",
    dtc: true,
    brands: true,
    enterprise: true,
  },
  {
    id: 5,
    feature: "Branded Consumer screen",
    dtc: "For Fee",
    brands: true,
    enterprise: true,
  },
  {
    id: 6,
    feature: "One-Click Checkout",
    dtc: true,
    brands: true,
    enterprise: true,
  },
  {
    id: 7,
    feature: "Creator Community Matching",
    dtc: false,
    brands: "For Fee",
    enterprise: "For Fee",
  },
  {
    id: 8,
    feature: "Marketplace Placement",
    dtc: true,
    brands: true,
    enterprise: true,
  },
  {
    id: 9,
    feature: "Marketplace Promotion",
    dtc: "For Fee",
    brands: false,
    enterprise: true,
  },
  {
    id: 10,
    feature: "Creator Payment Wallets",
    dtc: "For Fee",
    brands: "Included",
    enterprise: "Included",
  },
  {
    id: 11,
    feature: "Training",
    dtc: "For Fee",
    brands: "Included",
    enterprise: "Included",
  },
  {
    id: 12,
    feature: "Platform customization",
    dtc: "For Fee",
    brands: "For Fee",
    enterprise: "For Fee",
  },
  {
    id: 13,
    feature: "Customer Care",
    dtc: "e-mail & live chat 9-5 M-F EST",
    brands: "24/7 support 2h response time",
    enterprise: "24/7 support 30min response time",
  },
  {
    id: 14,
    feature: "Client Servicess",
    dtc: "N/A",
    brands: "Monthly Updates",
    enterprise: "Weekly Updates",
  },
];
