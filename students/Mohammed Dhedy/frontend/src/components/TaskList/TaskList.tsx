import type { Task } from "../../types/task";
import TaskRow from "../TaskRow/TaskRow";
import styles from "./TaskList.module.css";
type TaskListProps = {
  tasks: Task[];
};
const TaskList = (props: TaskListProps) => {
  return (
    <>
      {props.tasks.length<1? <p className={styles.empty_list}>there is no tasks :(</p>:
        <table>
          <thead>
            <tr>
              <th className={styles.th}>title</th>
              <th className={styles.th}>target date</th>
              <th className={styles.th}>status</th>
              <th className={styles.th}>priority</th>
            </tr>
          </thead>
          <tbody>
            {props.tasks.map((task) => (
              <TaskRow key={task.id} task={task} />
            ))}
          </tbody>
        </table>
      }
    </>
  );
};
export default TaskList;
