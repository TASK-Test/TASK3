import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import styles from "./Header.module.css";

const Header = () => {
  const { logout, currentUser } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.replace("/login");
  };

  return (
    <header className={styles.header}>
      {currentUser && (
        <p>
          Welcome <span>{currentUser}</span>
        </p>
      )}
      <h1>RoadmapTracker</h1>
      <p className={styles.subtitle}>track your tasks professionally</p>
      <Link className={styles.tasksLink} to="/tasks">
        Tasks
      </Link>
      <button className={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
};

export default Header;
