"use client";

import { Checkbox } from "@/shared/UI/Checkbox/Checkbox";
import styles from "./CartControl.module.scss";
import { Button } from "@/shared/UI/Button/Button";
import { useCartStore } from "../../store/store";
import { useEffect, useState } from "react";

export const CartControl: React.FC = () => {
  const [isSelected, setIsSelected] = useState(true);
  const { changeAllIsSelected, cart, removeItem } = useCartStore();

  useEffect(() => {
    if (cart.length === 0) return;
    const allSelected = cart.filter((item) => item.isSelected);
    if (allSelected.length === cart.length) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [cart]);

  const handleChangeIsSelected = () => {
    changeAllIsSelected(!isSelected);
    setIsSelected(!isSelected);
  };

  const handleRemoveSelected = () => {
    cart.forEach((item) => {
      if (item.isSelected) removeItem(item.id);
    });
  };

  return (
    <div className={styles.container}>
      <label className={styles.select}>
        <Checkbox isSelected={isSelected} onChange={handleChangeIsSelected} />
        <p>Select all items</p>
      </label>
      <Button
        className={styles.button}
        variant="remove"
        onClick={handleRemoveSelected}>
        Remove selected
      </Button>
    </div>
  );
};
