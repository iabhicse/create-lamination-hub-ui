"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/shadcn/button";
import { symbolOfCurrency } from "@/libs/configs/config.data";
import { CartItem, useCartStore } from "@/libs/store/useCartStore";
import Image_component from "@/components/ui/images/Image_component";

const cartImage = (item: CartItem) => {
  if (item.image && Array.isArray(item.image)) {
    return item.image[0];
  }
  return item.image;
};

const CartList = () => {
  const { items, increaseQty, decreaseQty, removeItem } = useCartStore();

  return (
    <>
      <ul className="space-y-4">
        {items.map((i, index) => (
          <li
            key={i.name}
            className="flex items-center justify-between rounded-lg border p-4 bg-card"
          >
            <div className="flex items-center justify-center">
              <Link href={`products/${i.link}`} className="cursor-pointer">
                <Image_component
                  id={`${i.name}-${index}`}
                  width={128}
                  height={128}
                  src={cartImage(i).src}
                  alt={cartImage(i).alt}
                  className="cursor-pointer"
                  style={{ borderRadius: "30px 0px 15px 0px" }}
                />
              </Link>
            </div>
            <div>
              <Link href={i.link} className="font-medium cursor-pointer">
                {i.name}
              </Link>
              {/* <p className="font-medium">{i.name}</p> */}
              <p className="text-sm text-muted-foreground">
                {symbolOfCurrency}
                {(i.price * i.qty).toFixed(2)} •{symbolOfCurrency}
                {i.price.toFixed(2)} each
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                onClick={() => decreaseQty(i.uid)}
                variant={"gradient"}
              >
                -
              </Button>
              <span className="w-6 text-center">{i.qty}</span>
              <Button
                size="sm"
                onClick={() => increaseQty(i.uid)}
                variant={"gradient"}
              >
                +
              </Button>
              <Button
                size="sm"
                onClick={() => removeItem(i.uid)}
                variant={"gradient"}
              >
                removeItem
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CartList;
