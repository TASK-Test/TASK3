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
  let results: Task[] = [...mockTasks];
  if (search.length > 0) {
    results = mockTasks.filter((t) => t.title.toLowerCase().includes(search.toLowerCase()));
  }
  return (
    <>
      <Header />
      <FilterBar setSearch={setSearch} search={search} />
      <TaskList tasks={results} />
    </>
  );
}

export default App;
