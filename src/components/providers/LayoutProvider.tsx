"use client";
import React, { useRef } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import FontsProvider from "./FontsProvider";
import { Toaster } from "../ui/shadcn/sonner";
import ThemesProvider from "./ThemesProvider";
import { useScrollStatus } from "@/libs/hooks/use-scroll";
import { HamburgerMenuProvider } from "./HamburgerProvider";
import { useBreakpoint } from "@/libs/hooks/use-breakpoints";
import { useAuthStore } from "@/libs/store/useAuthStore";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();
  const headerRef = useRef<HTMLHeadElement | null>(null);
  const { isScrolled, scrollDirection } = useScrollStatus();
  const { isAuthenticated } = useAuthStore();

  return (
    <>
      <ThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <FontsProvider>
          <main style={{ minHeight: "100vh", paddingTop: "60px" }}>
            <HamburgerMenuProvider>
              <Header
                isMobile={isMobile}
                isTablet={isTablet}
                isDesktop={isDesktop}
                refObject={headerRef}
                scrollDir={scrollDirection}
                isScrolled={isScrolled}
                isAuthenticated={isAuthenticated}
              />
            </HamburgerMenuProvider>
            {children}
          </main>
          <Toaster />
          <Footer />
        </FontsProvider>
      </ThemesProvider>
    </>
  );
};

export default LayoutProvider;
