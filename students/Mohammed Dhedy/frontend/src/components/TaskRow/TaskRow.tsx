import styles from "./TaskRow.module.css";
import type { Task } from "../../types/task";
import StatusChip from "../Badges/StatusChip/StatusChip";
import PriorityBadge from "../Badges/PriorityBadge/PriorityBadge";
import { Link } from "react-router-dom";
type TaskRowProps = {
  task: Task;
};
const TaskRow = (props: TaskRowProps) => {
  return (
    <tr className={styles.table_row}>
      <td className={styles.row_cell}>
        <Link style={{textDecoration:"none",color:"white"}} to={`/tasks/${props.task.id}`}>{props.task.title}</Link>
      </td>
      <td className={styles.row_cell}>
        {props.task.targetDate || "Not specified"}
      </td>
      <td className={styles.row_cell}>
        <StatusChip
          name={props.task.status.name}
          color={props.task.status.color || "#a4a4a4"}
        />
      </td>
      <td className={styles.row_cell}>
        {<PriorityBadge priority={props.task.priority} />}
      </td>
    </tr>
  );
};
export default TaskRow;
