import { create } from "zustand";
import { ICart } from "./types";

interface CartStore {
  cart: {
    [productId: string]: ICart;
  };
  addToCart: (cart: ICart) => void;
  updateQuantity: (productId: string, quantity: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: {},
  addToCart: (cartItem: ICart) =>
    set((state) => ({
      cart: { ...state.cart, [cartItem.id]: cartItem },
    })),
  updateQuantity: (productId: string, quantity: number) =>
    set((state) => ({
      cart: {
        ...state.cart,
        [productId]: { ...state.cart[productId], quantity: Math.max(0, quantity) }
      },
    })),
}));
