import { PurchaseState } from "@/modules/User/store/store";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface CartState extends PurchaseState {
  isSelected: boolean;
}

interface CartStoreState {
  cart: CartState[];
  addToCart: (purchase: CartState) => void;
  changeItemCount: (id: number, count: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  changeIsSelected: (id: number, isSelected: boolean) => void;
  changeAllIsSelected: (isSelected: boolean) => void;
}

export const useCartStore = create<CartStoreState>()(
  devtools((set) => ({
    cart: [],
    addToCart: (purchase) =>
      set((state) => ({ cart: [...state.cart, purchase] })),
    changeItemCount: (id, count) =>
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === id ? { ...item, count: count } : item
        ),
      })),
    changeIsSelected: (id, isSelected) =>
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === id ? { ...item, isSelected: isSelected } : item
        ),
      })),
    changeAllIsSelected: (isSelected) =>
      set((state) => ({
        cart: state.cart.map((item) => ({ ...item, isSelected: isSelected })),
      })),
    removeItem: (id) =>
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
      })),
    clearCart: () =>
      set((state) => ({
        cart: state.cart.filter((item) => !item.isSelected),
      })),
  }))
);
