"use client";

import styles from "./Counter.module.scss";

interface CounterProps {
  count: number;
  handleDecrementCount: () => void;
  handleChangeCount: (count: string) => void;
  handleSetDefaultCount: () => void;
  handleIncrementCount: () => void;
}

export const Counter: React.FC<CounterProps> = ({
  count,
  handleDecrementCount,
  handleChangeCount,
  handleSetDefaultCount,
  handleIncrementCount,
}) => {
  return (
    <div className={styles.counter}>
      <button className={styles.counterButton} onClick={handleDecrementCount}>
        -
      </button>
      <input
        className={styles.counterValue}
        value={count}
        onChange={(e) => handleChangeCount(e.target.value)}
        onBlur={handleSetDefaultCount}
      />
      <button className={styles.counterButton} onClick={handleIncrementCount}>
        +
      </button>
    </div>
  );
};
