import type { Task } from '../types/task'
import PriorityBadge from './PriorityBadge'
import StatusChip from './StatusChip'
import './taskRow.css'

type TaskRowProps = {
  task: Task
}

function TaskRow({ task }: TaskRowProps) {
  return (
    <table>
    <tr className="task-row">
      <td>{task.title}</td>
      <td><PriorityBadge priority={task.priority} /> </td>
      <td> <StatusChip status={task.status} /> </td>
      <td>{task.targetDate}</td>
    </tr>
    </table>
  )
}

export default TaskRow
