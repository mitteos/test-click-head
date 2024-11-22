import { create } from "zustand";

export interface PurchaseState {
  id: number;
  productId: number;
  count: number;
}

interface UserStore {
  purchase: PurchaseState[];
  balanceDollars: number;
  balanceCoins: number;
  addBalanceDollars: (amount: number) => void;
  convertDollarsToCoins: (amount: number) => void;
  addPurchase: (purchase: PurchaseState) => void;
  decreaseBalanceDollars: (amount: number) => void;
  decreaseBalanceCoins: (amount: number) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  purchase: [],
  balanceDollars: 10,
  balanceCoins: 0,
  addBalanceDollars: (amount: number) =>
    set((state) => ({
      balanceDollars: state.balanceDollars + amount,
    })),
  convertDollarsToCoins: (amount: number) =>
    set((state) => {
      const coinsToAdd = amount;
      return {
        balanceDollars: state.balanceDollars - amount,
        balanceCoins: state.balanceCoins + coinsToAdd,
      };
    }),
  addPurchase: (purchase: PurchaseState) =>
    set((state) => {
      const existingPurchase = state.purchase.find(
        (p) => p.productId === purchase.productId
      );

      if (existingPurchase) {
        return {
          purchase: state.purchase.map((p) =>
            p.productId === purchase.productId
              ? { ...p, count: p.count + purchase.count }
              : p
          ),
        };
      }

      return {
        purchase: [...state.purchase, purchase],
      };
    }),
  decreaseBalanceDollars: (amount: number) =>
    set((state) => ({
      balanceDollars: state.balanceDollars - amount,
    })),
  decreaseBalanceCoins: (amount: number) =>
    set((state) => ({
      balanceCoins: state.balanceCoins - amount,
    })),
}));
