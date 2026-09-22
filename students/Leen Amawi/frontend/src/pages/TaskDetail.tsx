import {  useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {  deleteTask, getTask } from '../api/client'
import type { Task } from '../types/task'
import useAsync from '../hooks/useAsync'
import Spinner from '../components/Spinner'
import ErrorBanner from '../components/ErrorBanner'
import EmptyState from '../components/EmptyState'
import PageHeader from '../components/PageHeader'

import './TaskDetail.css'
import Button from '../components/Button'

const statuses = {
  1: 'Backlog',
  2: 'In Progress',
  3: 'Done',
}

function TaskDetail() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [deleteError, setDeleteError] = useState<string | null>(null)
const { data: task, loading, error } = useAsync<Task>(() => getTask(Number(id)))

console.log('TASK:', task)
console.log('ERROR:', error)
if (!id) {
  return <p>Task not found.</p>
}
  if (loading) {
  return <Spinner />
}

  if (error) {
   return <ErrorBanner message={error} />
  }

if (!task) {
  return <EmptyState />
}
  const handleDelete = async () => {
  const confirmed = window.confirm('Are you sure you want to delete this task?')
  if (!confirmed) {
    return
  }
  try {
    await deleteTask(Number(id))
    navigate('/tasks')
  } catch  {
    setDeleteError('Failed to delete task.')
  }
}

  return (
    <div className="task-detail">
      <Link to="/tasks" className="back-link"> Back to tasks </Link>
      <PageHeader title={task.title} />
      <p> <strong>ID:</strong> {task.id}</p>
      <p> <strong>Description:</strong> {task.description} </p>
      <p>  <strong>Priority:</strong> {task.priority} </p>
      <p> <strong>Status:</strong>{' '}  {statuses[task.statusId as 1 | 2 | 3] ?? 'Unknown'} </p>
      <p> <strong>Target date:</strong> {task.targetDate}</p>
      <p><strong>Created at:</strong> {task.createdAt} </p>
      <div className="task-actions"><Link  className="task-link" to={`/tasks/${task.id}/edit`}>Edit</Link></div>
      {deleteError && <p>{deleteError}</p>}
      <Button onClick={handleDelete}>Delete</Button>
      </div>
  )

}
export default TaskDetail