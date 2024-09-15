import styles from "@/app/ui/login/login.module.css"
import { authenticate } from "../lib/actions"

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} action={authenticate}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage