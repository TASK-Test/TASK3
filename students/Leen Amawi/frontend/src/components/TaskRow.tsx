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
    <tr className="task-row">
      <td>
        <Link to={`/tasks/${task.id}`}>
          {task.title}
        </Link>
      </td>

      <td>
        <PriorityBadge priority={task.priority} />
      </td>

      <td>
        <StatusChip statusId={task.statusId} />
      </td>

      <td>
        {task.targetDate}
      </td>
    </tr>
  )
}

export default TaskRow