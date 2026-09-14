import { useState } from "react"
import Header from "../components/Header"
import TaskList from "../components/TaskList"
import { tasks } from "../mock/tasks"
import '../App.css'
import FilterBar from "../components/Filter"


function TaskListPage() {
  const [search, setSearch] = useState('')
const [statusFilter, setStatusFilter] = useState('ALL')
const [sortByDate, setSortByDate] = useState(false)

const filteredTasks = tasks.filter((task) => {
  const matchesSearch = task.title .toLowerCase().includes(search.toLowerCase())
  const matchesStatus =statusFilter === 'ALL' || task.status.name === statusFilter
  return matchesSearch && matchesStatus }).sort((a, b) => {
    if (!sortByDate) return 0
    return (
      new Date(a.targetDate).getTime() - new Date(b.targetDate).getTime()
    )
  })

  return(
<div>
   <Header />

   <FilterBar search={search}  setSearch={setSearch} statusFilter={statusFilter} setStatusFilter={setStatusFilter} sortByDate={sortByDate} setSortByDate={setSortByDate} />
    
    {filteredTasks.length > 0 ? (<TaskList tasks={filteredTasks} />) : (<p>No tasks found.</p>)}
</div>  )
}

export default TaskListPage