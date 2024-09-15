import Image from "next/image"
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import { fetchUser } from "@/app/lib/data";
import { updateUser } from "@/app/lib/actions";

const SingleUser = async ({params}) => {

  const {id} = params;

  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.image}>
          <Image src="/avatar.jpg" alt="user image" fill/>
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label htmlFor="username">Username</label>
          <input type="text" placeholder={user.username} name="username" required/> <br />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder={user.email} name="email" required /> <br />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="password" required/> <br />
          <label htmlFor="phone">Phone</label>
          <input type="number" placeholder={user.phone} required /> <br />
          <label htmlFor="address">Address</label>
          <input type="text" placeholder={user.address} /> <br />
          <label htmlFor="IsAdmin">Is Admin</label>
          <select name="IsAdmin" id="IsAdmin">
            <option value={true} selected={user.isAdmin}>Yes</option>
            <option value={false} selected={!user.isAdmin}>No</option>
          </select>
          <label htmlFor="isActive">Is Active</label>
          <select name="IsActive" id="IsActive">
            <option value={true} selected={user.isActive}>Yes</option>
            <option value={false} selected={!user.isActive}>No</option>
          </select>
          <button type="submit">Update</button>

        </form>
      </div>
    </div>
  )
}

export default SingleUser