import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {  deleteTask, getTask } from '../api/client'
import type { Task } from '../types/task'
import './TaskDetail.css'

const statuses = {
  1: 'Backlog',
  2: 'In Progress',
  3: 'Done',
}

function TaskDetail() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [task, setTask] = useState<Task | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) {
      setError('Task not found.')
      setLoading(false)
      return
    }

    getTask(Number(id)) .then(setTask) .catch((error) => setError(error.message)).finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  if (!task) {
    return <p>Task not found.</p>
  }
  const handleDelete = async () => {
  const confirmed = window.confirm(
    'Are you sure you want to delete this task?'
  )

  if (!confirmed) {
    return
  }

  try {
    await deleteTask(Number(id))
    navigate('/tasks')
  } catch (error) {
    setError('Failed to delete task.')
  }
}

  return (
    <div className="task-detail">
      <Link to="/tasks" className="back-link"> Back to tasks </Link>
      <h1>{task.title}</h1>
      <p> <strong>ID:</strong> {task.id}</p>
      <p> <strong>Description:</strong> {task.description} </p>
      <p>  <strong>Priority:</strong> {task.priority} </p>
      <p> <strong>Status:</strong>{' '}  {statuses[task.statusId as 1 | 2 | 3] ?? 'Unknown'} </p>
      <p> <strong>Target date:</strong> {task.targetDate}</p>
      <p><strong>Created at:</strong> {task.createdAt} </p>
      <div className="task-actions"><Link  className="task-link" to={`/tasks/${task.id}/edit`}>Edit</Link></div>
      <button onClick={handleDelete}>Delete</button>
      </div>
  )

}
export default TaskDetail