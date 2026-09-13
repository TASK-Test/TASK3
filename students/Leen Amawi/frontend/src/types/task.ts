export type Status = {
  id: number
  name: string
  color: string
  position: number
}

export type Task = {
  id: number
  title: string
  description: string
  priority: 'LOW' | 'MEDIUM' | 'HIGH'
  targetDate: string
  status: Status
  createdAt: string
}