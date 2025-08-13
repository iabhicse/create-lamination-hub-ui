"use client";
import React from "react";
import Link from "next/link";
import Lucid_svg from "../ui/helper/Lucid_svg";
import { Button } from "../ui/shadcn/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen ">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-rose-200/80 to-transparent"></div>
      <div className="relative w-full px-6 py-40">
        <div className="w-full lg:w-2/3 flex flex-col items-center-safe justify-end">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Create Unique,
              <br />
              <span className="text-primary">Personalized Gifts</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Transform ordinary moments into extraordinary memories with our
              custom gift collection. Design, personalize, and create something
              truly special for your loved ones.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href={"/collections"}>
                <Button
                  variant={"gradient"}
                  size={"lg"}
                  className="w-full lg:w-fit"
                >
                  Start Customizing
                </Button>
              </Link>
              <Button
                variant={"empty"}
                size={"lg"}
                className="border border-gray-300 text-gray-700 px-8 py-4 !rounded-button font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap"
              >
                Browse Gallery
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span className="flex items-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <Lucid_svg iconName="TruckElectric" />
                </div>
                Free Shipping
              </span>
              <span className="flex items-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <Lucid_svg iconName="ShieldCheck" />
                </div>
                Quality Guarantee
              </span>
              <span className="flex items-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <Lucid_svg iconName="Timer" />
                </div>
                Fast Delivery
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
