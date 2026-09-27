import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import TaskListPage from './pages/TaskListPage'
import TaskDetail from './pages/TaskDetail'
import NotFound from './pages/NotFound'
import CreateTaskPage from './pages/CreateTaskPage'
import './components/SharedUI.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
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