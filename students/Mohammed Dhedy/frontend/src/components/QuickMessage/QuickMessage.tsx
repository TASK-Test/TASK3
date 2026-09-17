import type { MessagesType } from "../../types/task";
import styles from "./QuickMessage.module.css";
const QuickMessage = (props: { message: string; type:MessagesType }) => {
  return (
    <p className={`${styles.warning} ${styles[props.type]}`}>{`${props.type} :  ${props.message}`}</p>
  );
};
export default QuickMessage;
