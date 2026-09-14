import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import TaskListPage from './pages/TaskListPage'
import TaskDetail from './pages/TaskDetail'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/tasks" replace />}/>
        <Route path="/tasks" element={<TaskListPage />}/>
        <Route path="/tasks/:id" element={<TaskDetail />}/>
        <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>
  )
}

export default App