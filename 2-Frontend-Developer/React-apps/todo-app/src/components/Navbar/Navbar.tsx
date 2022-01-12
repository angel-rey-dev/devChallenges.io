import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.navLink} to="/">
        All
      </NavLink>
      <NavLink className={styles.navLink} to="/active">
        Active
      </NavLink>
      <NavLink className={styles.navLink} to="/completed">
        Completed
      </NavLink>
    </nav>
  );
}
