import Image from "next/image";
import styles from "@/app/ui/transaction/transaction.module.css";

const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/avatar.jpg"
                  alt="user image"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />{" "}
                John Cena
              </div>
            </td>
            <td>
              <span className={`${styles.pending} ${styles.status}`}>
                Pending
              </span>
            </td>
            <td>02-09-2024</td>
            <td>$900</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/avatar.jpg"
                  alt="user image"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />{" "}
                John Cena
              </div>
            </td>
            <td>
              <span className={`${styles.done} ${styles.status}`}>Done</span>
            </td>
            <td>02-09-2024</td>
            <td>$900</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/avatar.jpg"
                  alt="user image"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />{" "}
                John Cena
              </div>
            </td>
            <td>
              <span className={`${styles.cancel} ${styles.status}`}>
                Cancelled
              </span>
            </td>
            <td>02-09-2024</td>
            <td>$900</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/avatar.jpg"
                  alt="user image"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />{" "}
                John Cena
              </div>
            </td>
            <td>
              <span className={`${styles.pending} ${styles.status}`}>
                Pending
              </span>
            </td>
            <td>02-09-2024</td>
            <td>$900</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
