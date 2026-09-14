export type Priority = 'LOW' | 'MEDIUM' | 'HIGH'

export type Task = {
  id: number
  title: string
  description: string
  statusId: number
  priority: Priority
  targetDate: string
  createdById: number
  createdAt: string
  updatedAt: string
}