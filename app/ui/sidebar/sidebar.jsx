import Image from "next/image";
import styles from "@/app/ui/sidebar/sidebar.module.css";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BiPurchaseTag } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa6";
import MenuLink from "./menuLink/menuLink";

const menuItems = [
  {
    title: "Users",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <FaUsers />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <BiPurchaseTag />,
      },
      {
        title: "Transaction",
        path: "/dashboard/transaction",
        icon: <FaDollarSign />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userimage}
          src="/avatar.jpg"
          alt="user image"
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>John Cena</span>
          <span className={styles.userTitle}>Athelete</span>
        </div>
      </div>

      <ul className={styles.list}>
        {menuItems.map((item) => (
          <li key={item.title}>
            {/* <span className={styles.item}>{item.title}</span> */}
            {item.list.map((i) => (
              <MenuLink item={i} key={i.title}/>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
