"use client";

import styles from "./Order.module.scss";
import { CartControl } from "../CartControl/CartControl";
import { Confirm } from "../Confirm/Confirm";
import { CartList } from "../CartList/CartList";
import { useCartStore } from "../../store/store";

export const Order: React.FC = () => {
  const { cart } = useCartStore();

  return (
    <div className={styles.container}>
      {cart.length > 0 && <CartControl />}
      <div className={styles.purchase}>
        <CartList />
        {cart.length > 0 && <Confirm />}
      </div>
    </div>
  );
};
