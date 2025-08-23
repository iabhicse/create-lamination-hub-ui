import { Metadata } from "next";
import { envFrontendConfig } from "../env/env.frontend";

const frontendUrl = envFrontendConfig.APP_FRONTEND;

const encodedOGUrl = encodeURI(
  `${frontendUrl}/api/og?title=Lamination-Hub&subtitle=Elegant DX for Modern Web&author=@vivekcsein&theme=elegant`
);

//list your search engine keywords here
const keywords =
  "Lamination-Hub, Lamination, Laminate, Laminations, Personal Memories , gifts";

const HomePageSEO: Metadata = {
  title: "Lamination-Hub",
  description: "Tera style teri choice - lamination-hub always right",
  keywords: keywords,
  openGraph: {
    title: "Lamination-Hub",
    description: "Tera style teri choice - lamination-hub always right",
    url: frontendUrl,
    siteName: "Lamination-Hub",
    images: [
      {
        url: encodedOGUrl,
        width: 1200,
        height: 630,
        alt: "Lamination-Hub Template Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lamination-Hub",
    description: "Tera style teri choice - lamination-hub always right",
    images: [`${frontendUrl}/og-image.jpg`],
    creator: "@vivekcsein",
  },
  authors: [{ name: "Vivekcsein", url: frontendUrl }],
  creator: "Vivekcsein",
  publisher: "Vivekcsein",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      //eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
};

export default HomePageSEO;
