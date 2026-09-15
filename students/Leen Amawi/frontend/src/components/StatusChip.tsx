type StatusChipProps = {
  statusId: number
}

const statuses = {
  1: { name: 'Backlog', color: '#6B7280' },
  2: { name: 'In Progress', color: '#3B82F6' },
  3: { name: 'Done', color: '#22C55E' },
}

function StatusChip({ statusId }: StatusChipProps) {
  const status = statuses[statusId as 1 | 2 | 3]

  if (!status) {
    return <span>Unknown</span>
  }
  return (
    <span  > {status.name}</span>
  )
}

export default StatusChip