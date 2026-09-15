import { useEffect, useState } from 'react'
import Header from '../components/Header'
import TaskList from '../components/TaskList'
import FilterBar from '../components/Filter'
import { getTasks } from '../api/client'
import type { Task } from '../types/task'
import '../App.css'

const statusNames: Record<number, string> = {
  1: 'Backlog',
  2: 'In Progress',
  3: 'Done',
}

function TaskListPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('ALL')
  const [sortByDate, setSortByDate] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getTasks() .then(setTasks).catch((error) => setError(error.message)).finally(() => setLoading(false))
  }, [])

  const filteredTasks = tasks
    .filter((task) => {
      const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase())

      const matchesStatus = statusFilter === 'ALL' ||statusNames[task.statusId] === statusFilter
      return matchesSearch && matchesStatus
    }).sort((a, b) => {
      if (!sortByDate) return 0

      return (
        new Date(a.targetDate).getTime() -  new Date(b.targetDate).getTime())
    })
  return (
    <div>
      <Header />
      <FilterBar search={search} setSearch={setSearch} statusFilter={statusFilter} setStatusFilter={setStatusFilter} sortByDate={sortByDate} setSortByDate={setSortByDate}/>
      {loading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (filteredTasks.length > 0 ? ( <TaskList tasks={filteredTasks} />) : (
          <p>No tasks found.</p>
        ))}
    </div>
  )}

export default TaskListPage