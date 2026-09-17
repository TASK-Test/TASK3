import styles from "./TaskList.module.css";

import { useEffect, useState } from "react";

import type { Task } from "../../types/task";
import TaskRow from "../../components/TaskRow/TaskRow";
import FilterBar from "../../components/FilterBar/FilterBar";
import { getTasks } from "../../api/client";
import ActionButton from "../../components/ActionButton/ActionButton";
import QuickMessage from "../../components/QuickMessage/QuickMessage";

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [targetDateFilter, setTargetDateFilter] = useState<string>("none");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  let results: Task[] = [...tasks];

  useEffect(() => {
    let ignore = false;
    const getRes = async () => {
      try {
        const res: Task[] = await getTasks();
        if (!ignore) setTasks(res);
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
  }, []);

  if (search.length > 0) {
    results = tasks.filter((t) =>
      t.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  if (statusFilter !== "all") {
    results = results.filter((t) => t.status.name === statusFilter);
  }

  if (targetDateFilter !== "none") {
    if (targetDateFilter === "asc") {
      results = results.sort(
        (a, b) =>
          new Date(a.targetDate || "").getTime() -
          new Date(b.targetDate || "").getTime(),
      );
    } else {
      results = results.sort(
        (a, b) =>
          new Date(b.targetDate || "").getTime() -
          new Date(a.targetDate || "").getTime(),
      );
    }
  }

  return (
    <>
      <ActionButton title="Create Task" path="/tasks/new" />
      <FilterBar
        setSearch={setSearch}
        search={search}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        targetDateFilter={targetDateFilter}
        setTargetDateFilter={setTargetDateFilter}
      />
      {loading ? (
        <QuickMessage type="loading" message="loading your tasks" />
      ) : error ? (
        <QuickMessage type="error" message={error} />
      ) : results.length < 1 ? (
        <QuickMessage type="empty" message="there is no tasks" />
      ) : (
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
            {results.map((task) => (
              <TaskRow key={task.id} task={task} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
export default TaskList;
