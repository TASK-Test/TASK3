import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import TaskListPage from './pages/TaskListPage'
import TaskDetail from './pages/TaskDetail'
import NotFound from './pages/NotFound'
import CreateTaskPage from './pages/CreateTaskPage'
import './components/SharedUI.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/tasks" replace />}/>
        <Route path="/tasks" element={<TaskListPage />}/>
        <Route path="/tasks/create" element={<CreateTaskPage />}/>
        <Route path="/tasks/:id/edit" element={<CreateTaskPage />}/>
        <Route path="/tasks/:id" element={<TaskDetail />}/>
        <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>
  )
}

export default App