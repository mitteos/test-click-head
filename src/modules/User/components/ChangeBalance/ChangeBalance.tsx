"use client";

import { ChangeForm } from "@/modules/User/components/ChangeForm/ChangeForm";
import styles from "./ChangeBalance.module.scss";
import { useUserStore } from "../../store/store";
import { toast } from "react-toastify";

export const ChangeBalance: React.FC = () => {
  const errorConvertNotify = () =>
    toast.error("You don't have enough dollars to convert");
  const { convertDollarsToCoins, addBalanceDollars, balanceDollars } =
    useUserStore();

  const handleConvertDollarsToCoins = (value: number) => {
    if (balanceDollars < value) {
      errorConvertNotify();
      return;
    }
    convertDollarsToCoins(value);
    toast.success("Conversion completed successfully");
  };

  const handleAddBalanceDollars = (value: number) => {
    addBalanceDollars(value);
    toast.success("Top up completed successfully");
  };

  return (
    <div className={styles.container}>
      <ChangeForm
        title="Convert your dollars to coins"
        buttonText="Convert"
        placeholder="Enter amount"
        onSubmit={handleConvertDollarsToCoins}
      />
      <ChangeForm
        title="Top up dollars"
        buttonText="Add"
        placeholder="Enter amount"
        onSubmit={handleAddBalanceDollars}
      />
    </div>
  );
};
