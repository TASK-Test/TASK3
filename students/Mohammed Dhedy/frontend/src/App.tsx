import "./App.css";
import { useState } from "react";
import type { Task } from "./types/task";
import { tasks } from "./mock/tasks";
import TaskList from "./components/TaskList/TaskList";
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import NotFound from "./components/NotFound/NotFound";
function App() {
  const [mockTasks] = useState<Task[]>(tasks);
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/tasks" element={<TaskList tasks={mockTasks}/>}/>
          <Route path="/" element={<Navigate to="/tasks" replace/>}/>
          <Route path="/tasks/:taskId" element={<TaskDetails/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
