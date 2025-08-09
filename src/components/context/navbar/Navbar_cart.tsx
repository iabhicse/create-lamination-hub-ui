"use client";
import React from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/libs/store/useCartStore";

const Navbar_cart = () => {
  const localCartItems = useCartStore((s) => s.items);

  return (
    <Link href={"/cart"} className="hover:scale-110 relative">
      <ShoppingCart />
      <div className="absolute -top-2 left-2 rounded-2xl bg-muted w-full text-center text-white text-[14px] ">
        {localCartItems.length}
      </div>
    </Link>
  );
};

export default Navbar_cart;
