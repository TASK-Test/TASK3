import './PriorityBadge.css'

type PriorityBadgeProps = {
  priority: 'LOW' | 'MEDIUM' | 'HIGH'
}
function PriorityBadge({ priority }: PriorityBadgeProps) {
  return (
<span className={`priority-${priority.toLowerCase()}`}>{priority}  </span>
)
}

export default PriorityBadge