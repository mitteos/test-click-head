"use client";

import { PurchaseItem } from "@/components/PurchaseItem/PurchaseItem";
import styles from "./CartList.module.scss";
import { useCartStore } from "../../store/store";

export const CartList: React.FC = () => {
  const { cart } = useCartStore();

  if (cart.length === 0) {
    return <div className={styles.empty}>Cart is empty</div>;
  }

  return (
    <div className={styles.container}>
      {cart.map((item) => (
        <PurchaseItem variant="cart" info={item} key={item.id} />
      ))}
    </div>
  );
};
