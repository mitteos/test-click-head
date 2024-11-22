import { Balance, PurchaseList } from "@/modules/User";
import styles from "./page.module.scss";
export default function Profile() {
  return (
    <div className={styles.container}>
      <Balance />
      <PurchaseList />
    </div>
  );
}
