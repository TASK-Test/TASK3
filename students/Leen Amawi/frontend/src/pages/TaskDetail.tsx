import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getTask } from '../api/client'
import type { Task } from '../types/task'
import './TaskDetail.css'

const statuses = {
  1: 'Backlog',
  2: 'In Progress',
  3: 'Done',
}

function TaskDetail() {
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
    </div>
  )
}

export default TaskDetail