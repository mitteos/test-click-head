import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
};
