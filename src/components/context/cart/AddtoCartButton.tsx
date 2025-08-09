"use client";

import { Button } from "@/components/ui/shadcn/button";
import { CartItem, useCartStore } from "@/libs/store/useCartStore";
import React from "react";

type AddtoCartButtonProps = {
  item: CartItem;
};

const AddtoCartButton = ({ item }: AddtoCartButtonProps) => {
  const addItem = useCartStore((s) => s.addItem);

  const AddToCart = () => {
    addItem(item);
  };

  return (
    <Button
      variant={"gradient"}
      onClick={AddToCart}
      className=" px-4 py-2 !rounded-button font-medium  transition-colors whitespace-nowrap"
    >
      Add to Cart
    </Button>
  );
};

export default AddtoCartButton;
