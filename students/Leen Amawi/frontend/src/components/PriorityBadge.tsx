import './PriorityBadge.css'
import type { Priority } from '../types/task'
type PriorityBadgeProps = {
  priority: Priority
}
function PriorityBadge({ priority }: PriorityBadgeProps) {
  return (
<span className={`priority-${priority.priority.toLowerCase()}`}>{priority.priority}  </span>
)
}

export default PriorityBadge