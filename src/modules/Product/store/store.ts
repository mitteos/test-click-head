import { create } from "zustand";

interface ProductState {
  id: number;
  title: string;
  price: number;
}

interface ProductStore {
  products: ProductState[];
  setProduct: (product: ProductState[]) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProduct: (products: ProductState[]) => set({ products: products }),
}));
