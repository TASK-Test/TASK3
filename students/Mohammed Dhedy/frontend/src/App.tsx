import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import type { Task } from "./types/task";
import TaskRow from "./components/TaskRow/TaskRow";
function App() {
  const [mockTasks] = useState<Task[]>([
    {
      id: 1,
      title: "study ts",
      description: "study ts data types and arrow functions",
      status: {
        id: 1,
        name: "Done",
        position: 2,
        color: "#22C55E",
      },
      priority: "HIGH",
      targetDate: "2026-9-22",
      createdById: 1,
      createdAt: "026-09-13T10:30:00Z",
      updatedAt: null,
    },
    {
      id: 2,
      title: "work on project",
      description: null,
      status: {
        id: 2,
        name: "BackLog",
        position: 0,
        color: "#ee7c7c",
      },
      priority: "LOW",
      targetDate: "2026-9-23",
      createdById: 1,
      createdAt: "026-09-13T10:30:00Z",
      updatedAt: null,
    },
    {
      id: 3,
      title: "watch movie",
      description: "watch spiderman:no way home",
      status: {
        id: 3,
        name: "In Progress",
        position: 1,
        color: "#3B82F6",
      },
      priority: "MEDIUM",
      targetDate: "2026-9-23",
      createdById: 1,
      createdAt: "026-09-13T10:30:00Z",
      updatedAt: null,
    },
  ]);

  return (
    <>
      <Header />
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>target date</th>
            <th>status</th>
            <th>priority</th>
          </tr>
        </thead>
        <tbody>
          {mockTasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
