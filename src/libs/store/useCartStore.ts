import { create } from "zustand";
import { productImagesProps } from "@/types/products";
import type { StateStorage } from "zustand/middleware";
import { persist, createJSONStorage } from "zustand/middleware";

// SSR-safe fallback storage
const safeStorage: StateStorage = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getItem: (_key: string): string | null => null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setItem: (_key: string, _value: string): void => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem: (_key: string): void => {},
};

export type CartItem = {
  uid: string;
  name: string;
  price: number;
  qty: number;
  link: string;
  image: productImagesProps;
  maxStock?: number;
};

export type PromoCode = {
  code: string;
  discountFn: (subtotal: number) => number;
};

interface CartState {
  items: CartItem[];
  promos: PromoCode[];
  error?: string;

  // Actions
  addItem: (item: Omit<CartItem, "qty">) => void;
  removeItem: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  clearCart: () => void;
  applyPromo: (promo: PromoCode) => void;
  removePromo: (code: string) => void;

  // Selectors
  getSubtotal: () => number;
  getTotalQty: () => number;
  getDiscount: () => number;
  getTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      promos: [],
      error: undefined,

      addItem: (item) => {
        const { items } = get();
        const exists = items.find((i) => i.uid === item.uid);

        if (exists) {
          if (exists.maxStock && exists.qty >= exists.maxStock) {
            set({ error: `Cannot add more than ${exists.maxStock} units.` });
            return;
          }
          set({
            items: items.map((i) =>
              i.uid === item.uid ? { ...i, qty: i.qty + 1 } : i
            ),
            error: undefined,
          });
        } else {
          set({
            items: [...items, { ...item, qty: 1 }],
            error: undefined,
          });
        }
      },

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.uid !== id),
        })),

      increaseQty: (id) => {
        const { items } = get();
        const target = items.find((i) => i.uid === id);
        if (target && target.maxStock && target.qty >= target.maxStock) {
          set({ error: `Max stock (${target.maxStock}) reached.` });
          return;
        }
        set({
          items: items.map((i) =>
            i.uid === id ? { ...i, qty: i.qty + 1 } : i
          ),
          error: undefined,
        });
      },

      decreaseQty: (id) =>
        set((state) => ({
          items: state.items
            .map((i) =>
              i.uid === id ? { ...i, qty: Math.max(i.qty - 1, 0) } : i
            )
            .filter((i) => i.qty > 0),
        })),

      clearCart: () => set({ items: [], promos: [], error: undefined }),

      applyPromo: (promo) =>
        set((state) => ({
          promos: state.promos.find((p) => p.code === promo.code)
            ? state.promos
            : [...state.promos, promo],
        })),

      removePromo: (code) =>
        set((state) => ({
          promos: state.promos.filter((p) => p.code !== code),
        })),

      getSubtotal: () =>
        get().items.reduce((sum, i) => sum + i.price * i.qty, 0),

      getTotalQty: () => get().items.reduce((sum, i) => sum + i.qty, 0),

      getDiscount: () => {
        const subtotal = get().getSubtotal();
        return get().promos.reduce(
          (disc, promo) => disc + promo.discountFn(subtotal),
          0
        );
      },

      getTotal: () => {
        const subtotal = get().getSubtotal();
        const discount = get().getDiscount();
        return Math.max(subtotal - discount, 0);
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? localStorage : safeStorage
      ),
      version: 1,
      migrate: (persistedState) => Promise.resolve(persistedState),
    }
  )
);
