import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import type { Task } from "./types/task";
import { tasks } from "./mock/tasks";
import TaskList from "./components/TaskList/TaskList";
import FilterBar from "./components/FilterBar/FilterBar";
function App() {
  const [mockTasks] = useState<Task[]>(tasks);
  const [search, setSearch] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [targetDateFilter, setTargetDateFilter] = useState<string>("none");
  let results: Task[] = [...mockTasks];
  if (search.length > 0) {
    results = mockTasks.filter((t) =>
      t.title.toLowerCase().includes(search.toLowerCase()),
    );
  }
  if (statusFilter !== "all") {
    results = results.filter((t) => t.status.name === statusFilter);
  }
  if (targetDateFilter !== "none") {
    if (targetDateFilter==="asc") {
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
      <Header />
      <FilterBar
        setSearch={setSearch}
        search={search}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        targetDateFilter={targetDateFilter}
        setTargetDateFilter={setTargetDateFilter}
      />
      <TaskList tasks={results} />
    </>
  );
}

export default App;
