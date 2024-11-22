import Image from "next/image";
import styles from "./BalanceInfo.module.scss";
import CoinIcon from "@/assets/icons/coinIcon.svg";
import { formatToDollar } from "@/shared/helpers/dollarFormatter";

interface BalanceInfoProps {
  variant: "row" | "column";
  balanceDollars: number;
  balanceCoins: number;
}

export const BalanceInfo: React.FC<BalanceInfoProps> = ({
  variant = "column",
  balanceDollars,
  balanceCoins,
}) => {
  return (
    <div className={[styles.container, styles[variant]].join(" ")}>
      <p className={styles.title}>Balance</p>
      <div className={styles.list}>
        <p className={styles.amount}>{formatToDollar(balanceDollars)}</p>
        <div className={styles.separator} />
        <div className={styles.coin}>
          <Image src={CoinIcon} alt="coin" width={20} height={20} />
          <p className={styles.amount}>{balanceCoins.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};
