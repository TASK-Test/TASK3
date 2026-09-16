import "./App.css";
import TaskList from "./pages/TaskList/TaskList";
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import TaskDetails from "./pages/TaskDetails/TaskDetails";
import NotFound from "./pages/NotFound/NotFound";
import TaskForm from "./pages/TaskForm/TaskForm";
function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/" element={<Navigate to="/tasks" replace />} />
          <Route path="/tasks/:taskId" element={<TaskDetails />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/:taskId/edit" element={<TaskForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
