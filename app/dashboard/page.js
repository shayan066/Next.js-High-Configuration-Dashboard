import Transaction from "../ui/transaction/transaction";
import styles from "@/app/ui/transaction/transaction.module.css";

const DashBoard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Transaction />
      </div>
    </div>
  );
};

export default DashBoard;
