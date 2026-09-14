import { Link, useParams } from 'react-router-dom'
import { tasks } from '../mock/tasks'
import './TaskDetail.css'

function TaskDetail() {
  const { id } = useParams()

  const task = tasks.find( (task) => task.id === Number(id))

  if (!task) {
    return <p>Task not found.</p>
  }

  return (
  <div className="task-detail">
    <Link to="/tasks" className="back-link">  Back to tasks</Link>
    <h1>{task.title}</h1>
    <p><strong>ID:</strong> {task.id}</p>
    <p><strong>Description:</strong> {task.description} </p>
 <p><strong>Priority:</strong> {task.priority.priority}</p>
  <p><strong>Status:</strong> {task.status.name} </p>
 <p> <strong>Target date:</strong> {task.targetDate} </p>
<p> <strong>Created at:</strong> {task.createdAt} </p>
  </div>
)
}

export default TaskDetail