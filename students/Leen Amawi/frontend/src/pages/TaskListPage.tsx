import { useState } from 'react'
import Header from '../components/Header'
import TaskList from '../components/TaskList'
import FilterBar from '../components/Filter'
import { getTasks } from '../api/client'
import type { Task } from '../types/task'
import useAsync from '../hooks/useAsync'
import Spinner from '../components/Spinner'
import ErrorBanner from '../components/ErrorBanner'
import EmptyState from '../components/EmptyState'
import PageHeader from '../components/PageHeader'
import '../App.css'

const statusNames: Record<number, string> = {
  1: 'Backlog',
  2: 'In Progress',
  3: 'Done',
}

function TaskListPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('ALL')
  const [sortByDate, setSortByDate] = useState(false)
const { data: tasks, loading, error } = useAsync<Task[]>(getTasks)

  const filteredTasks = (tasks ?? []).filter((task) => {
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
      <PageHeader title="Tasks" />
      <FilterBar search={search} setSearch={setSearch} statusFilter={statusFilter} setStatusFilter={setStatusFilter} sortByDate={sortByDate} setSortByDate={setSortByDate}/>
      {loading && <Spinner />}
      {error && <ErrorBanner message={error} />}
      {!loading && !error && (filteredTasks.length > 0 ? ( <TaskList tasks={filteredTasks} />):(<EmptyState />))}
    </div>
  )}
export default TaskListPage