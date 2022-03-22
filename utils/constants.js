import {
  FaApple,
  FaFacebookSquare,
  FaInstagramSquare,
  FaShopify,
  FaWhatsappSquare,
} from "react-icons/fa";
import { MdLocalCarWash, MdDirectionsCar } from "react-icons/md";
import { GrAndroid } from "react-icons/gr";

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

export const services = [
  {
    id: 1,
    icon: <MdLocalCarWash className="service-icon" />,
    title: "car wash",
    text: "A clean car is always a happy car, get your car washed today! Contact Us today via whatsapp or just fill up the contact form.",
  },
  {
    id: 2,
    icon: <MdDirectionsCar className="service-icon" />,
    title: "rent a car",
    text: "Price from $30 a day, $175 a week,  $300 every 2 weeks, $550 a month.",
  },
];

export const social = [
  {
    id: 1,
    icon: <FaApple className="social-icon whatsapp"></FaApple>,
    url: "#",
  },
  {
    id: 4,
    icon: <GrAndroid className="social-icon fb"></GrAndroid>,
    url: "#",
  },

  {
    id: 5,
    icon: <FaShopify className="social-icon insta"></FaShopify>,
    url: "#",
  },
];
