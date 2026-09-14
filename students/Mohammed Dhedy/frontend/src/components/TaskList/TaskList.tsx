import styles from "./TaskList.module.css";

import { useState } from "react";

import type { Task } from "../../types/task";
import TaskRow from "../TaskRow/TaskRow";
import FilterBar from "../FilterBar/FilterBar";

type TaskListProps = {
  tasks: Task[];
};
const TaskList = (props: TaskListProps) => {

  const [search, setSearch] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [targetDateFilter, setTargetDateFilter] = useState<string>("none");

  let results: Task[] = [...props.tasks];

  if (search.length > 0) {
    results = props.tasks.filter((t) =>
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
      <FilterBar
        setSearch={setSearch}
        search={search}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        targetDateFilter={targetDateFilter}
        setTargetDateFilter={setTargetDateFilter}
      />
      {results.length < 1 ? (
        <p className={styles.empty_list}>there is no tasks :(</p>
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
