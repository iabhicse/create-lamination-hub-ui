"use client";
import React from "react";
import { Button } from "@/components/ui/shadcn/button";
import { useCartStore } from "@/libs/store/useCartStore";
import CartList from "@/components/context/cart/CartList";
import CartEmpty from "@/components/context/cart/CartEmpty";
import { symbolOfCurrency } from "@/libs/configs/config.data";

const CartPage = () => {
  const { items, clearCart, getTotal } = useCartStore();
  const total = getTotal();

  return (
    <section className="container py-12 px-12">
      <h1 className="text-3xl font-bold mb-6">Your cart</h1>
      {items.length === 0 ? (
        <CartEmpty />
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <CartList />
          <aside className="h-max rounded-lg border p-6 bg-card space-y-4">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">
                {symbolOfCurrency + total.toFixed(2)}
              </span>
            </div>
            <Button className="w-full" variant={"gradient"}>
              Checkout
            </Button>
            <Button className="w-full" onClick={clearCart} variant={"gradient"}>
              clear my cart
            </Button>
          </aside>
        </div>
      )}
    </section>
  );
};

export default CartPage;
