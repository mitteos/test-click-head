"use client";

import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  isSelected: boolean;
  onChange: (isSelected: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ isSelected, onChange }) => {
  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        className={styles.input}
        checked={isSelected}
        onChange={() => onChange(!isSelected)}
      />
      <span className={styles.span}></span>
    </label>
  );
};
