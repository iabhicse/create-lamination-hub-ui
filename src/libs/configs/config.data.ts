import { extendedNavlink, navlink } from "@/types/app";

export const currencySymbol = "₹";

export const navigationLinks: Array<extendedNavlink> = [
  { id: "home", label: "Home", href: "/", icon: "Home" }, // Lucide: Home
  {
    id: "collections",
    label: "Collections",
    href: "/collections",
    icon: "Collection",
  }, // Lucide: Collection
  { id: "contact", label: "Contact", href: "/contact", icon: "Mail" }, // Lucide: Mail or Phone
];

export interface footerLinks {
  footer_messages: {
    heading: string;
    susbcribe: string;
    description: string;
    copyright: string;
  };

  footerSection: Array<string>;

  quickLinks: Array<navlink>;
  customerService: Array<navlink>;
  socialLinks: Array<navlink>;
  features: Array<navlink>;
}

export const footerLinks: footerLinks = {
  footer_messages: {
    heading: "Lamination Hub",
    description:
      "Creating personalized gifts that celebrate life's special moments. Quality craftsmanship meets personal touch.",
    susbcribe: "Subscribe to get special offers and updates",
    copyright: "© 2025 Lamination Hub. All rights reserved.",
  },
  // list of sections
  footerSection: ["quickLinks", "customerService", "Stay Updated"],

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

  customerService: [
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
    { id: "Facebook", label: "Facebook", href: "/", icon: "Facebook" }, // Lucide: Facebook
    { id: "Instagram", label: "Instagram", href: "/", icon: "Instagram" }, // Lucide: Instagram
    { id: "Twitter", label: "Twitter", href: "/", icon: "Twitter" }, // Lucide: Twitter
  ],
  features: [
    {
      id: "Free Shipping",
      label: "Free Shipping",
      href: "/",
      icon: "ShippingFast",
    }, // Lucide: ShippingFast
    { id: "SSL Secured", label: "SSL Secured", href: "/", icon: "ShieldCheck" }, // Lucide: ShieldCheck
  ],
};

const dummyProduct = {
  image: {
    src: "/images/product-images/product-image-01.jpg",
    alt: "Product 1",
  },
  link: "/",
  name: "Tech Accessories",
  description: "Personalize your digital lifestyle",
  price: 200,
};

export const productsList = Array(8)
  .fill(null)
  .map((_, i) => ({
    ...dummyProduct,
    uid: i.toString(),
    name: `${dummyProduct.name} ${i + 1}`,
    price: dummyProduct.price + i * 20,
    image: {
      ...dummyProduct.image,
      uid: i.toString(),
      alt: `Product ${i + 1}`,
      src: `/images/product-images/product-image-0${1}.jpg`,
    },
  }));

export const backgroundImages = [
  "/images/bg-images/hero-bg-01.jpg",
  "/images/bg-images/hero-bg-02.jpg",
  // Add more image paths as needed
];
