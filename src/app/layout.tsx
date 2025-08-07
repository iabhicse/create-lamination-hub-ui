import "../styles/globals.css";
import type { Metadata } from "next";

import LayoutProvider from "@/components/providers/LayoutProvider";

export const metadata: Metadata = {
  title: "Lamination-Hub",
  description: "Tera style teri choice - lamination-hub always right",
  keywords:
    "Lamination-Hub, Lamination, Laminate, Laminations, Personal Memories , gifts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased relative scroll-smooth`}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
