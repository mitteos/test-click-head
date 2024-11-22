"use client";

import { Checkbox } from "@/shared/UI/Checkbox/Checkbox";
import styles from "./PurchaseItem.module.scss";
import Image from "next/image";
import ProductImage from "@/assets/images/productMock.webp";
import { useState } from "react";
import { CartState, useCartStore } from "@/modules/Cart/store/store";
import { useProductStore } from "@/modules/Product/store/store";
import { formatToDollar } from "@/shared/helpers/dollarFormatter";
import { validatePositiveNumber } from "@/modules/User/helpers/validatePositiveNumber";
import { Counter } from "@/shared/UI/Counter/Counter";
import { RemoveButton } from "@/shared/UI/RemoveButton/RemoveButton";

interface PurchaseItemProps {
  variant?: "cart" | "purchase";
  info: CartState;
}
export const PurchaseItem: React.FC<PurchaseItemProps> = ({
  variant,
  info,
}) => {
  const [count, setCount] = useState(1);
  const { products } = useProductStore();
  const { changeItemCount, removeItem, changeIsSelected } = useCartStore();
  const product = products.find((product) => product.id === info.productId);
  const [isSelected, setIsSelected] = useState(info.isSelected);

  const handleChangeIsSelected = () => {
    changeIsSelected(info.id, !info.isSelected);
    setIsSelected(!isSelected);
  };

  const handleChangeCount = (count: string) => {
    const validCount = validatePositiveNumber(count);
    setCount(Number(validCount));
    changeItemCount(info.id, Number(validCount));
  };

  const handleIncrementCount = () => {
    changeItemCount(info.id, count + 1);
    setCount(count + 1);
  };

  const handleDecrementCount = () => {
    if (count === 1) return;
    changeItemCount(info.id, count - 1);
    setCount(count - 1);
  };

  const handleRemoveItem = () => {
    removeItem(info.id);
  };

  const handleSetDefaultCount = () => {
    if (count < 1) {
      setCount(1);
      changeItemCount(info.id, 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {variant === "cart" && (
          <Checkbox
            isSelected={info.isSelected}
            onChange={handleChangeIsSelected}
          />
        )}
        <Image src={ProductImage} alt="product" className={styles.image} />
        <div className={styles.info}>
          <p className={styles.title}>{product?.title}</p>
          {variant === "cart" && (
            <p className={styles.price}>
              {product?.price && formatToDollar(product.price * count)}
            </p>
          )}
        </div>
      </div>
      <div className={styles.control}>
        {variant === "cart" ? (
          <Counter
            count={count}
            handleDecrementCount={handleDecrementCount}
            handleChangeCount={handleChangeCount}
            handleSetDefaultCount={handleSetDefaultCount}
            handleIncrementCount={handleIncrementCount}
          />
        ) : (
          <p className={styles.count}>Count: {info.count}</p>
        )}
        {variant === "cart" && (
          <RemoveButton handleRemoveItem={handleRemoveItem} />
        )}
      </div>
    </div>
  );
};
