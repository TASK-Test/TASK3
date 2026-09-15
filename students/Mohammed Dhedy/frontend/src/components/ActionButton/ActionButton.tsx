import { Link } from "react-router-dom";
import styles from "./ActionButton.module.css";
type CreateButtonProps = {
  title: string;
  path?: string;
};
const ActionButton = ({ title, path }: CreateButtonProps) => {
  return (
    <>
      {path ? (
        <Link className={styles.create} to={path}>
          {title}
        </Link>
      ) : (
        <button type="submit" className={styles.create}>{title}</button>
      )}
    </>
  );
};
export default ActionButton;
