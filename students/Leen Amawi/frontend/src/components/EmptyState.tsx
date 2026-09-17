type EmptyStateProps = {
  message?: string
}

function EmptyState({
  message = 'No tasks found.',
}: EmptyStateProps) {
  return <p className="empty-state">{message}</p>
}

export default EmptyState