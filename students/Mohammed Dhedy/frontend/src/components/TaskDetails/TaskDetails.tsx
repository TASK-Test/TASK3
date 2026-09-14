import styles from "./TaskDetails.module.css";

import { useNavigate, useParams } from "react-router-dom";
import { tasks } from "../../mock/tasks";
import type { Task } from "../../types/task";
import PriorityBadge from "../Badges/PriorityBadge/PriorityBadge";
import StatusChip from "../Badges/StatusChip/StatusChip";
const TaskDetails = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const task: Task | undefined = tasks.find((t) => t.id == Number(taskId));
  return (
    <>
      {task !== undefined ? (
        <>
          <p onClick={() => navigate(-1)} className={styles.back}>
            Back To Tasks -{">"}
          </p>
          <section className={styles.taskCard}>
            <span>Task #{taskId}</span>
            <div className={styles.badges}>
              <PriorityBadge priority={task.priority} />
              <StatusChip name={task.status.name} color={task.status.color}/>
            </div>
            <h2>Task title : </h2>
            <p className={styles.info}>{task.title}</p>
            <h2>description : </h2>
            <p className={styles.info}>
              {task.description || "no description"}
            </p>
            <div className={styles.infoTable}>
              <div>position : {task.status.position}</div>
              <div>target date : {task.targetDate || "not specified"}</div>
              <div>created by user : #{task.createdById}</div>
              <div>created at : {task.createdAt}</div>
              <div>last updated at : {task.updatedAt || "no updates"}</div>
            </div>
          </section>
        </>
      ) : (
        <p className={styles.not_found}>Task is not Found :(</p>
      )}
    </>
  );
};
export default TaskDetails;
