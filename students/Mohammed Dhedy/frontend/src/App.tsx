import "./App.css";
import TaskList from "./pages/TaskList/TaskList";
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import TaskDetails from "./pages/TaskDetails/TaskDetails";
import NotFound from "./pages/NotFound/NotFound";
import TaskForm from "./pages/TaskForm/TaskForm";
import LoginPage from "./pages/Auth/LoginPage/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <TaskList />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/tasks" replace />} />
          <Route
            path="/tasks/:taskId"
            element={
              <ProtectedRoute>
                <TaskDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <NotFound />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tasks/new"
            element={
              <ProtectedRoute>
                <TaskForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tasks/:taskId/edit"
            element={
              <ProtectedRoute>
                <TaskForm />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
