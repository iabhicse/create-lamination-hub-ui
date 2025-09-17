import "../styles/globals.css";
import { poppins, roboto } from "@/libs/configs/config.styles";
import LayoutProvider from "@/components/providers/LayoutProvider";

import { Metadata } from "next";
import HomePageSEO from "@/libs/seo/seo.homepage";
import { AuthProvider } from "@/components/providers/AuthProvider";
export const metadata: Metadata = HomePageSEO;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${poppins.variable} antialiased relative scroll-smooth`}
      >
        <AuthProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
