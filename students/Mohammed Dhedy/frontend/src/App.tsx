import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import type { Task } from "./types/task";
import { tasks } from "./mock/tasks";
import TaskList from "./components/TaskList/TaskList";
function App() {
  const [mockTasks] = useState<Task[]>(tasks);

  return (
    <>
      <Header />
      <TaskList tasks={mockTasks} />
    </>
  );
}

export default App;
