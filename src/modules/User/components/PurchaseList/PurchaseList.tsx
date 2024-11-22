"use client";

import Link from "next/link";
import styles from "./PurchaseList.module.scss";
import { PurchaseItem } from "@/components/PurchaseItem/PurchaseItem";
import { useUserStore } from "../../store/store";
import { useProductStore } from "@/modules/Product/store/store";

export const PurchaseList: React.FC = () => {
  const { purchase } = useUserStore();
  const { products } = useProductStore();

  const purchaseList = purchase.map((item) => {
    const product = products.find((product) => product.id === item.productId);
    return { ...item, product, isSelected: false };
  });

  return (
    <div className={styles.container}>
      <p className={styles.title}>Purchase history</p>
      {purchaseList.length === 0 ? (
        <div className={styles.empty}>
          <p className={styles.emptyText}>
            you don&apos;t have any purchases yet
          </p>
          <Link href="/" className={styles.emptyLink}>
            go to products
          </Link>
        </div>
      ) : (
        <div className={styles.list}>
          {purchaseList.map((item) => (
            <PurchaseItem variant="purchase" info={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};
