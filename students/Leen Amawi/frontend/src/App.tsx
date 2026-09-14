import { useState } from "react"
import Header from "./components/Header"
import TaskList from "./components/TaskList"
import { tasks } from "./mock/tasks"
import './App.css'


function App() {
  const [search, setSearch] = useState('')
const [statusFilter, setStatusFilter] = useState('ALL')
const [sortByDate, setSortByDate] = useState(false)

const filteredTasks = tasks.filter((task) => {
  const matchesSearch = task.title .toLowerCase().includes(search.toLowerCase())
  const matchesStatus =statusFilter === 'ALL' || task.status.name === statusFilter
  return matchesSearch && matchesStatus }).sort((a, b) => {
    if (!sortByDate) return 0
    return (
      new Date(a.targetDate).getTime() -
      new Date(b.targetDate).getTime()
    )
  })

  return (
    <div>
      <Header />
      <input className="search" type="text" placeholder="Search" value={search} onChange={(event) => setSearch(event.target.value)}/>
      <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
          <option value="ALL">All statuses</option>
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <label>
        <input type="checkbox" checked={sortByDate} onChange={(event) => setSortByDate(event.target.checked)}/>
        Sort by target date </label>

     {filteredTasks.length > 0 ? (<TaskList tasks={filteredTasks} />) : (<p>No tasks found.</p>)}

    </div>
  )
}

export default App