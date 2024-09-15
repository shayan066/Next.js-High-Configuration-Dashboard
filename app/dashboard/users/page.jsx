import Image from "next/image";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import { fetchUsers } from "@/app/lib/data";
import { deleteUser } from "@/app/lib/actions";

const UserPage = async () => {
  const users = await fetchUsers();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/avatar.jpg"
                    alt="user image"
                    height={40}
                    width={40}
                    className={styles.userImage}
                  />{" "}
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4,16)}</td>
              <td>{user.isAdmin ? "Admin" : "Not Admin"}</td>
              <td>{user.isActive ? "Active" : "Not Active"}</td>
              <td className={styles.button}>
                <Link href={`/dashboard/users/${user.id}`}>
                  <button className={styles.view}>Update</button>
                </Link>
                <form action={deleteUser}>
                  <input type="hidden" name="id" value={user.id}/>
                <button className={styles.delete}>Delete</button>
                </form>
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
