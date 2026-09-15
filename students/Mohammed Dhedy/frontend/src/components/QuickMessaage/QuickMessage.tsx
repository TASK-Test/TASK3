import styles from "./QuickMessage.module.css";
const QuickMessage = (props: { message: string }) => {
  return <p className={styles.warning}>{props.message}</p>;
};
export default QuickMessage;
