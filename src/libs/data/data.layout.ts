import { ExtendedNavLink, FooterConfig } from "@/types/app";

export const navigationLinks: Array<ExtendedNavLink> = [
  { id: "home", label: "Home", href: "/", icon: "Home" }, // Lucide: Home
  {
    id: "collections",
    label: "Collections",
    href: "/collections",
    icon: "Collection",
  }, // Lucide: Collection
  { id: "contact", label: "Contact", href: "/contact", icon: "Mail" }, // Lucide: Mail or Phone
];

export const footerLinks: FooterConfig = {
  messages: {
    heading: "Lamination Hub",
    subscribe: "Subscribe to get special offers and updates",
    description:
      "Creating personalized gifts that celebrate life's special moments. Quality craftsmanship meets personal touch.",
    copyright: "© 2025 Lamination Hub. All rights reserved.",
  },
  // list of sections
  sections: ["quickLinks", "Services", "Stay Updated"],

  // list of links
  quickLinks: [
    { id: "Custom Gifts", label: "Custom Gifts", href: "/", icon: "Gift" }, // Lucide: Gift
    { id: "Photo Gifts", label: "Photo Gifts", href: "/", icon: "Photo" }, // Lucide: Photo
    {
      id: "Corporate Gifts",
      label: "Corporate Gifts",
      href: "/",
      icon: "Building",
    }, // Lucide: Building
  ],

  serviceLinks: [
    { id: "Contact Us", label: "Contact Us", href: "/", icon: "Mail" }, // Lucide: Mail or Phone
    {
      id: "Shipping Info",
      label: "Shipping Info",
      href: "/",
      icon: "ShippingFast",
    }, // Lucide: ShippingFast
    { id: "Reviews", label: "Reviews", href: "/", icon: "ArrowLeftRight" }, // Lucide: ArrowLeftRight
  ],

  socialLinks: [
    {
      id: "socialLinks-Facebook",
      label: "Facebook",
      href: "/",
      icon: "Facebook",
    },
    {
      id: "socialLinks-Instagram",
      label: "Instagram",
      href: "/",
      icon: "Instagram",
    },
    {
      id: "socialLinks-Twitter",
      label: "Twitter",
      href: "/",
      icon: "Twitter",
    },
  ],
  featureLinks: [
    {
      id: "Free Shipping",
      label: "Free Shipping",
      href: "/",
      icon: "ShippingFast",
    }, // Lucide: ShippingFast
    { id: "SSL Secured", label: "SSL Secured", href: "/", icon: "ShieldCheck" }, // Lucide: ShieldCheck
  ],
};

export const dropdownLinks: ExtendedNavLink = {
  id: "Services",
  label: "Services",
  href: "/",
  subLinks: [
    { id: "Custom Gifts", label: "Custom Gifts", href: "/", icon: "Gift" },
    { id: "Photo Gifts", label: "Photo Gifts", href: "/", icon: "Photo" },
  ],
};

export const backgroundImages = [
  "/images/bg-images/hero-bg-01.jpg",
  "/images/bg-images/hero-bg-02.jpg",
  // Add more image paths as needed
];

export const swiperLinks = [
  {
    id: "theme01",
    color: "",
    className: "",
    image: {
      src: "/images/banner/banner-01.png",
      alt: "theme01",
      width: 2560,
      height: 1440,
    },
  },
  {
    id: "theme02",
    color: "",
    className: "",
    image: {
      src: "/images/banner/banner-02.png",
      alt: "theme02",
      width: 2560,
      height: 1440,
    },
  },
  {
    id: "theme03",
    className: "",
    color: "",
    image: {
      src: "/images/banner/banner-01.png",
      alt: "theme03",
      width: 2560,
      height: 1440,
    },
  },
  {
    id: "theme04",
    className: "",
    color: "",
    image: {
      src: "/images/banner/banner-02.png",
      alt: "theme04",
      width: 2560,
      height: 1440,
    },
  },
];
