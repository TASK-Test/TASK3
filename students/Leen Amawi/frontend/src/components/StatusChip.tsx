import type { Status } from '../types/task'

type StatusChipProps = {
  status: Status
}
const StatusChip = ({ status }: StatusChipProps) => {
    return (
        <span style={{ backgroundColor: status.color, color: 'white', padding: '4px 8px', borderRadius: '4px' }}>{status.name}</span>
    )
}
export default StatusChip