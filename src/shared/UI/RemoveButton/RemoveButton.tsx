"use client";

import Image from "next/image";
import RemoveIcon from "@/assets/icons/removeIcon.svg";
import styles from "./RemoveButton.module.scss";

interface RemoveButtonProps {
  handleRemoveItem: () => void;
}

export const RemoveButton: React.FC<RemoveButtonProps> = ({
  handleRemoveItem,
}) => {
  return (
    <button onClick={handleRemoveItem} className={styles.remove}>
      <Image src={RemoveIcon} className={styles.removeIcon} alt="remove" />
    </button>
  );
};
