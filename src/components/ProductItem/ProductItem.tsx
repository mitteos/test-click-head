import { Button } from "@/shared/UI/Button/Button";
import styles from "./ProductItem.module.scss";
import Image from "next/image";
import { useCartStore } from "@/modules/Cart/store/store";
import { useRouter } from "next/navigation";
import { formatToDollar } from "@/shared/helpers/dollarFormatter";
interface CardProps {
  info: {
    id: number;
    title: string;
    price: number;
    images: string[];
  };
}

export const Card: React.FC<CardProps> = ({ info }) => {
  const { addToCart, cart } = useCartStore();
  const router = useRouter();
  const inCart = !!cart.find((item) => item.productId === info.id);

  const handleAddToCart = () => {
    const cartItem = {
      id: Date.now(),
      productId: info.id,
      count: 1,
      isSelected: true,
    };
    addToCart(cartItem);
  };

  const handleNavigateToCart = () => {
    router.push("/cart");
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Image
          src={info.images[0]}
          alt="product"
          className={styles.image}
          width={260}
          height={150}
        />
        <p className={styles.title}>{info.title}</p>
        <p className={styles.price}>{formatToDollar(info.price)}</p>
      </div>
      <Button
        variant={inCart ? "goToCart" : "accent"}
        onClick={inCart ? handleNavigateToCart : handleAddToCart}>
        {inCart ? "Go to cart" : "Add to cart"}
      </Button>
    </div>
  );
};
