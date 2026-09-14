import type { Task } from '../types/task'
import PriorityBadge from './PriorityBadge'
import StatusChip from './StatusChip'
import './taskRow.css'
import { Link } from 'react-router-dom'

type TaskRowProps = {
  task: Task
}

function TaskRow({ task }: TaskRowProps) {
  return (
    <table>
      <tbody>
    <tr className="task-row">
      <td><Link to={`/tasks/${task.id}`}> {task.title} </Link></td>
      <td><PriorityBadge priority={task.priority} /> </td>
      <td> <StatusChip status={task.status} /> </td>
      <td>{task.targetDate}</td>
    </tr>
    </tbody>
    </table>
  )
}

export default TaskRow
