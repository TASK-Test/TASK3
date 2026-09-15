import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import NotFound from "./components/NotFound/NotFound";
import TaskForm from "./components/TaskForm/TaskForm";
function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/tasks" element={<TaskList/>}/>
          <Route path="/" element={<Navigate to="/tasks" replace/>}/>
          <Route path="/tasks/:taskId" element={<TaskDetails/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/tasks/new" element={<TaskForm/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
