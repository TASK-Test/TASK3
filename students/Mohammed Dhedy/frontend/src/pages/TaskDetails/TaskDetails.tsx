import styles from "./TaskDetails.module.css";

import { Link, useNavigate, useParams } from "react-router-dom";
import type { Task } from "../../types/task";
import PriorityBadge from "../../components/Badges/PriorityBadge/PriorityBadge";
import StatusChip from "../../components/Badges/StatusChip/StatusChip";
import { useEffect, useState } from "react";
import { deleteTask, getTask } from "../../api/client";
import QuickMessage from "../../components/QuickMessage/QuickMessage";
const TaskDetails = () => {
  const [task, setTask] = useState<Task>();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [deleteError, setDeleteError] = useState("");
  const { taskId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    let ignore = false;
    const getRes = async () => {
      try {
        setLoading(true);
        setError("");
        const taskRes: Task = await getTask(Number(taskId));
        if (!ignore) setTask(taskRes);
      } catch (error) {
        if (!ignore)
          setError(error instanceof Error ? error.message : "unexpected error");
      } finally {
        if (!ignore) setLoading(false);
      }
    };
    getRes();
    return () => {
      ignore = true;
    };
  }, [taskId]);

  const handleDelete = async () => {
    try {
      if (!task) return;
      const result = window.confirm(
        "are you sure you want to delete this task?",
      );
      if (result) {
        await deleteTask(task.id);
        navigate("/tasks");
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "could not delete Task";
      setDeleteError(message);
    }
  };
  return (
    <>
      {loading ? (
        <QuickMessage type="loading" message="loading your task" />
      ) : error ? (
        <QuickMessage type="error" message={error} />
      ) : task !== undefined ? (
        <>
          <p className={styles.back}>
            <span onClick={() => navigate(-1)}>Back To Tasks -{">"}</span>
          </p>
          {deleteError.length > 0 && (
            <QuickMessage type="error" message={deleteError} />
          )}
          <section className={styles.taskCard}>
            <span>Task #{taskId}</span>
            <div className={styles.badges}>
              <PriorityBadge priority={task.priority} />
              <StatusChip name={task.status.name} color={task.status.color} />
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
            <div className={styles.badges}>
              <Link to={`/tasks/${task.id}/edit`}>Update</Link>
              <button type="button" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </section>
        </>
      ) : (
        <QuickMessage type="notFound" message="Task is not Found :(" />
      )}
    </>
  );
};
export default TaskDetails;
