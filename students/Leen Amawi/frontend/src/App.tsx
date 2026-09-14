import { useState } from "react"
import Header from "./components/Header"
import TaskList from "./components/TaskList"
import { tasks } from "./mock/tasks"


function App() {
  const [search, setSearch] = useState('')

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <Header />

      <input type="text" placeholder="Search" value={search} onChange={(event) => setSearch(event.target.value)}/>
     {filteredTasks.length > 0 ? (
     <TaskList tasks={filteredTasks} />) : (<p>No tasks found.</p>)}

    </div>
  )
}

export default App