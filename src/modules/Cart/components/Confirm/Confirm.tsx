"use client";

import { BalanceInfo } from "@/components/BalanceInfo/BalanceInfo";
import styles from "./Confirm.module.scss";
import { Button } from "@/shared/UI/Button/Button";
import { useUserStore } from "@/modules/User/store/store";
import { useCartStore } from "../../store/store";
import { useProductStore } from "@/modules/Product/store/store";
import { toast } from "react-toastify";
import { formatToDollar } from "@/shared/helpers/dollarFormatter";

export const Confirm: React.FC = () => {
  const {
    balanceDollars,
    balanceCoins,
    decreaseBalanceDollars,
    decreaseBalanceCoins,
  } = useUserStore((state) => state);

  const notifyInsufficientDollars = () =>
    toast.error("Insufficient dollars balance");

  const notifyInsufficientCoins = () =>
    toast.error("Insufficient coins balance");

  const { cart, clearCart } = useCartStore();
  const { products } = useProductStore();
  const { addPurchase } = useUserStore();
  const totalPrice = cart.reduce((acc, item) => {
    if (!item.isSelected) return acc;
    const product = products.find((product) => product.id === item.productId);
    return acc + product!.price * item.count;
  }, 0);

  const handleCompleteOrder = () => {
    cart.forEach((item) => {
      if (item.isSelected) {
        addPurchase(item);
      }
    });
    clearCart();
    toast.success("Order completed");
  };

  const handleBuy = (
    balance: number,
    decreaseBalance: (amount: number) => void,
    notifyInsufficient: () => void
  ) => {
    const selectedItems = cart.filter((item) => item.isSelected);
    if (selectedItems.length === 0) {
      toast.error("Select items to buy");
      return;
    }

    if (balance < totalPrice) {
      notifyInsufficient();
      return;
    }
    decreaseBalance(totalPrice);
    handleCompleteOrder();
  };

  const handleBuyUseDollars = () =>
    handleBuy(
      balanceDollars,
      decreaseBalanceDollars,
      notifyInsufficientDollars
    );
  const handleBuyUseCoins = () =>
    handleBuy(balanceCoins, decreaseBalanceCoins, notifyInsufficientCoins);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Order summary</p>
      <div className={styles.info}>
        <p className={styles.price}>
          Total price: {formatToDollar(totalPrice)}
        </p>
        <Button onClick={handleBuyUseDollars}>Buy use dollars</Button>
        <Button onClick={handleBuyUseCoins}>Buy use coins</Button>
        <BalanceInfo
          variant="row"
          balanceDollars={balanceDollars}
          balanceCoins={balanceCoins}
        />
      </div>
    </div>
  );
};
