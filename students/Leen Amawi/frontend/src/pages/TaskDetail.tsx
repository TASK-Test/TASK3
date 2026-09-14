import { useParams } from 'react-router-dom'
import { tasks } from '../mock/tasks'

function TaskDetail() {
  const { id } = useParams()

  const task = tasks.find(
    (task) => task.id === Number(id)
  )

  if (!task) {
    return <p>Task not found.</p>
  }

  return (
    <div>
      <h1>{task.title}</h1>
      <p>ID: {task.id}</p>
      <p>Description: {task.description}</p>
      <p>Priority: {task.priority.priority}</p>
      <p>Status: {task.status.name}</p>
      <p>Target date: {task.targetDate}</p>
      <p>Created at: {task.createdAt}</p>
    </div>
  )
}

export default TaskDetail