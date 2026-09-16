import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createTask, getTask, updateTask } from '../api/client'
import './CreateTaskPage.css'

function CreateTaskPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [statusId, setStatusId] = useState('')
  const [priority, setPriority] = useState<'LOW' | 'MEDIUM' | 'HIGH'>('LOW')
  const [targetDate, setTargetDate] = useState('')
  const [errors, setErrors] = 
  useState<{title?: string
  targetDate?: string}>({})

  const [apiError, setApiError] = useState<string | null>(null)
    const isEdit = Boolean(id)
    useEffect(() => {
    if (!id) return

    getTask(Number(id)).then((task) => {
        setTitle(task.title)
        setDescription(task.description)
        setStatusId(String(task.statusId))
        setPriority(task.priority)
        setTargetDate(task.targetDate)
      }).catch(() => {
        setApiError('Failed to load task.')
      })}, [id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: {title?: string
       targetDate?: string
    } = {  }

    if (!title.trim()) {
      newErrors.title = 'Title is required'
    }

    if (!targetDate) {
      newErrors.targetDate = 'Target date is required'
    } 
    else if (Number.isNaN(new Date(targetDate).getTime())) {
      newErrors.targetDate = 'Invalid target date'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      return
    }

    try {
      setApiError(null)
      const payload = {
        title: title.trim(),
        description,
        statusId: Number(statusId),
        priority,
        targetDate,
      }
     
      if (isEdit) {
        await updateTask(Number(id), payload)
      } else {
        await createTask(payload)
      }
      navigate('/tasks')
    } catch (error) {
     setApiError(
        isEdit ? 'Failed to update task. Please try again.' : 'Failed to create task. Please try again.')
    }
  }
  return (
    <div className="create-task-page">
      <h1>{isEdit ? 'Edit Task' : 'Create Task'}</h1>
      <form onSubmit={handleSubmit}>
        {apiError && <div>{apiError}</div>}
        <div>
          <label>Title</label>
          <input value={title}  onChange={(e) => setTitle(e.target.value)} />
           {errors.title && <p>{errors.title}</p>}
        </div>

        <div>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div>
  <label>Status</label>
  <select value={statusId} onChange={(e) => setStatusId(e.target.value)}>
    <option value="">Select status</option>
    <option value="1">Backlog</option>
    <option value="2">In Progress</option>
    <option value="3">Done</option>
  </select>
</div>
        <div>
          <label>Priority</label>
          <select value={priority} onChange={(e) => setPriority(e.target.value as 'LOW' | 'MEDIUM' | 'HIGH')}>
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>
        </div>
        <div>
          <label>Target Date</label>
          <input type="date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)}/>
        {errors.targetDate && <p>{errors.targetDate}</p>}
        </div>
        <button type="submit">{isEdit ? 'Save Changes' : 'Create Task'}</button>
      </form>
    </div>
  )
}

export default CreateTaskPage