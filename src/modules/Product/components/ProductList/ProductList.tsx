"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../../api/fetchAllProducts";
import styles from "./ProductList.module.scss";
import { Card } from "@/components/ProductItem/ProductItem";
import { Loader } from "@/shared/UI/Loader/Loader";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useProductStore } from "../../store/store";

interface ProductState {
  id: number;
  title: string;
  price: number;
}

export const ProductList: React.FC = () => {
  const errorNotify = () => toast.error("Sorry, something went wrong");
  const { setProduct } = useProductStore((state) => state);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
    select: (data) => data.products,
  });

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data, setProduct]);

  if (isLoading)
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );

  if (isError) {
    errorNotify();
    return <div>{error?.message}</div>;
  }

  return (
    <div className={styles.container}>
      {data?.map((product: ProductState) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
};
