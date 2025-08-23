"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { backgroundImages } from "@/libs/data/data.layout";

const HeroBackgroundImage = ({ children }: { children: React.ReactNode }) => {
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
    }, 15000); // Change the image every 30 seconds interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBackground}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${backgroundImages[currentBackground]}')`,
          }}
        />
      </AnimatePresence>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default HeroBackgroundImage;
