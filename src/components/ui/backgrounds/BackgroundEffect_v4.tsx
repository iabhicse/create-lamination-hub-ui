"use client";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backgroundImages = [
  {
    id: "bg01",
    src: "/images/bg-images/hero-bg-01.jpg",
    alt: "bg01",
    width: 1920,
    height: 1080,
  },
  {
    id: "bg02",
    src: "/images/bg-images/hero-bg-02.jpg",
    alt: "bg02",
    width: 1920,
    height: 1080,
  },
];

interface BackgroundEffect_v4Props {
  timer?: number;
  className?: string;
  children: React.ReactNode;
}

//fade effect on background images
const BackgroundEffect_v4 = ({
  timer,
  className,
  children,
}: BackgroundEffect_v4Props) => {
  const time = timer ? timer * 1000 : 15000;
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
    }, time); // Change the image every 30 seconds interval time as needed

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className={clsx("relative min-h-screen overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBackground}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${backgroundImages[currentBackground].src}')`,
          }}
        />
      </AnimatePresence>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundEffect_v4;
