export type Status = {
  id: number
  name: string
  color: string
  position: number
}

 export type Priority = {
  priority: 'LOW' | 'MEDIUM' | 'HIGH'
} 

export type Task = {
  id: number
  title: string
  description: string
  priority: Priority
  targetDate: string
  status: Status
  createdAt: string
}