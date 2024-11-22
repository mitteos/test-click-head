import { Button } from "@/shared/UI/Button/Button";
import styles from "./ProductItem.module.scss";
import Image from "next/image";
import ProductImage from "@/assets/images/productMock.webp";
import { useCartStore } from "@/modules/Cart/store/store";
import { useRouter } from "next/navigation";
import { formatToDollar } from "@/shared/helpers/dollarFormatter";
interface CardProps {
  id: number;
  title: string;
  price: number;
}

export const Card: React.FC<CardProps> = ({ id, title, price }) => {
  const { addToCart, cart } = useCartStore();
  const router = useRouter();
  const inCart = !!cart.find((item) => item.productId === id);

  const handleAddToCart = () => {
    const cartItem = {
      id: Date.now(),
      productId: id,
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
        <Image src={ProductImage} alt="product" className={styles.image} />
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{formatToDollar(price)}</p>
      </div>
      <Button
        variant={inCart ? "goToCart" : "accent"}
        onClick={inCart ? handleNavigateToCart : handleAddToCart}>
        {inCart ? "Go to cart" : "Add to cart"}
      </Button>
    </div>
  );
};
