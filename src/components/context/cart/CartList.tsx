"use client";
import React from "react";
import { useCartStore } from "@/libs/store/useCartStore";
import { Button } from "@/components/ui/shadcn/button";
import { symbolOfCurrency } from "@/libs/configs/config.data";
import Image_component from "@/components/ui/images/Image_component";

const CartList = () => {
  const { items, increaseQty, decreaseQty, removeItem } = useCartStore();
  const imageArray =
    items[0].image && Array.isArray(items[0].image)
      ? items[0].image
      : [items[0].image];

  return (
    <>
      <ul className="space-y-4">
        {items.map((i, index) => (
          <li
            key={i.name}
            className="flex items-center justify-between rounded-lg border p-4 bg-card"
          >
            {imageArray.length > 0 && (
              <div className="flex items-center justify-center">
                <Image_component
                  id={`${i.name}-${index}`}
                  width={128}
                  height={128}
                  src={imageArray[0].src}
                  alt={imageArray[0].alt}
                />
              </div>
            )}
            <div>
              <p className="font-medium">{i.name}</p>
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
