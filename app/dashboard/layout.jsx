import Navbar from "../ui/navbar/navbar";
import Sidebar from "../ui/sidebar/sidebar";
import styles from "@/app/ui/dashboard/dashboard.module.css";

const layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
