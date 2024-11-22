"use client";

import { BalanceInfo } from "@/components/BalanceInfo/BalanceInfo";
import styles from "./Balance.module.scss";
import { ChangeBalance } from "../ChangeBalance/ChangeBalance";
import { useUserStore } from "../../store/store";
export const Balance: React.FC = () => {
  const { balanceDollars, balanceCoins } = useUserStore((state) => state);

  return (
    <div className={styles.container}>
      <BalanceInfo
        variant="column"
        balanceDollars={balanceDollars}
        balanceCoins={balanceCoins}
      />
      <ChangeBalance />
    </div>
  );
};
