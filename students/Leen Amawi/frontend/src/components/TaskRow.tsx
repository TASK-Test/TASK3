import type { Task } from '../types/task'
import PriorityBadge from './PriorityBadge'
import StatusChip from './StatusChip'
type TaskRowProps = {
  task: Task
}
function TaskRow({ task }: TaskRowProps) {
  return (
    <div>
     <h3>{task.title}</h3>
      <PriorityBadge priority={task.priority} />
      <StatusChip status={task.status} />
      <p>{task.targetDate}</p>
    </div>
  )
}
export default TaskRow
