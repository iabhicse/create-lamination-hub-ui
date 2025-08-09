"use client";
import React from "react";
import { useCartStore } from "@/libs/store/useCartStore";
import { Button } from "@/components/ui/shadcn/button";
import { currencySymbol } from "@/libs/configs/config.data";

const CartList = () => {
  const { items, increaseQty, decreaseQty, removeItem } = useCartStore();
  return (
    <>
      <ul className="space-y-4">
        {items.map((i) => (
          <li
            key={i.id}
            className="flex items-center justify-between rounded-lg border p-4 bg-card"
          >
            <div>
              <p className="font-medium">{i.name}</p>
              <p className="text-sm text-muted-foreground">
                {currencySymbol}
                {(i.price * i.qty).toFixed(2)} •{currencySymbol}
                {i.price.toFixed(2)} each
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                onClick={() => decreaseQty(i.id)}
                variant={"gradient"}
              >
                -
              </Button>
              <span className="w-6 text-center">{i.qty}</span>
              <Button
                size="sm"
                onClick={() => increaseQty(i.id)}
                variant={"gradient"}
              >
                +
              </Button>
              <Button
                size="sm"
                onClick={() => removeItem(i.id)}
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
