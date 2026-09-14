import type { Task } from '../types/task'
import TaskRow from './TaskRow'

type TaskListProps = {
  tasks: Task[]
}

function TaskList({tasks}: TaskListProps) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskRow key={task.id} task={task} />
      ))} </div>
  )
}
export default TaskList