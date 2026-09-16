import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createTask } from '../api/client'
import './CreateTaskPage.css'

function CreateTaskPage() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [statusId, setStatusId] = useState('')
  const [priority, setPriority] = useState<'LOW' | 'MEDIUM' | 'HIGH'>('LOW')
  const [targetDate, setTargetDate] = useState('')
  const [errors, setErrors] = 
  useState<{title?: string
  targetDate?: string}>({})

  const [apiError, setApiError] = useState<string | null>(null)
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
      await createTask(payload)
      navigate('/tasks')
    } catch (error) {
      setApiError('Failed to create task. Please try again.')
    }
  }
  return (
    <div className="create-task-page">
      <h1>Create Task</h1>
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
        <button type="submit">Create Task</button>
      </form>
    </div>
  )
}

export default CreateTaskPage