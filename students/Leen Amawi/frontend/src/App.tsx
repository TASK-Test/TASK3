import Header from "./components/Header"
import TaskRow from "./components/TaskRow"
import type { Task } from "./types/task"

const TASK: Task = {
  id: 1,
  title: 'Fix login',
  description: 'Fix the login validation issue',
  priority: 'HIGH',
  targetDate: '2026-09-15',
  status: {
    id: 1,
    name: 'In Progress',
    color: 'orange',
    position: 2,
  },
  createdAt: '2026-09-13T10:00:00',
}


function App() {
  return (
    <div>
      <Header />
      <TaskRow task={TASK} />
    </div>
  )
}

export default App