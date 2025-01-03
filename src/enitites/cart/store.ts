import { create } from "zustand";
import { ICartItem, ICart } from "./types";

interface CartStore {
  cart: ICart;
  loadCart: () => void;
  addToCart: (cartItem: ICartItem) => void;
  deleteFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
}

function saveCartToLocalStorage(cart: ICart): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

function loadCartFromLocalStorage(): ICart | {} {
  if (typeof window !== "undefined") {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : {};
  }
  return {};
}

export const useCartStore = create<CartStore>((set) => ({
  cart: loadCartFromLocalStorage(),
  addToCart: (cartItem: ICartItem) =>
    set((state) => {
      const newCart = { ...state.cart, [cartItem.id]: cartItem };
      saveCartToLocalStorage(newCart);
      return { cart: newCart };
    }),
  updateQuantity: (productId: string, quantity: number) =>
    set((state) => {
      const newCart = {
        ...state.cart,
        [productId]: {
          ...state.cart[productId],
          quantity: Math.max(0, quantity),
        },
      };
      saveCartToLocalStorage(newCart);
      return { cart: newCart };
    }),
  deleteFromCart: (productId: string) =>
    set((state) => {
      const newCart = { ...state.cart };
      delete newCart[productId];
      saveCartToLocalStorage(newCart);
      return { cart: newCart };
    }),
  loadCart: () => set({ cart: loadCartFromLocalStorage() }),
}));
