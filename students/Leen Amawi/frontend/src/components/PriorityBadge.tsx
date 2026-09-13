type PriorityBadgeProps = {
  priority: 'LOW' | 'MEDIUM' | 'HIGH'
}

function PriorityBadge({ priority }: PriorityBadgeProps) {
  return (
    <span> {priority} </span>
  )
}

export default PriorityBadge