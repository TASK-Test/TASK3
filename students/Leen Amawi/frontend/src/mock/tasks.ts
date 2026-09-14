import type { Task } from '../types/task'

export const tasks: Task[] = [
  {
    id: 1,
    title: 'Fix login',
    description: 'Fix the login problem',
    priority: { priority: 'HIGH' },
    targetDate: '2026-09-15',
    status: {
      id: 1,
      name: 'In Progress',
      color: 'orange',
      position: 2,
    },
    createdAt: '2026-09-13T10:00:00',
  },
  {
    id: 2,
    title: 'Add dashboard',
    description: 'Create the dashboard page',
    priority: { priority: 'LOW' },
    targetDate: '2026-09-18',
    status: {
      id: 2,
      name: 'Todo',
      color: 'blue',
      position: 1,
    },
    createdAt: '2026-09-13T11:00:00',
  },
  {
    id: 3,
    title: 'Write tests',
    description: 'Add tests for the app',
    priority: { priority: 'MEDIUM' },
    targetDate: '2026-09-20',
    status: {
      id: 3,
      name: 'In Progress',
      color: 'orange',
      position: 2,
    },
    createdAt: '2026-09-13T12:00:00',
  },
  {
    id: 4,
    title: 'Update profile',
    description: 'Update the profile page',
    priority: { priority: 'MEDIUM' },
    targetDate: '2026-09-22',
    status: {
      id: 4,
      name: 'Done',
      color: 'green',
      position: 3,
    },
    createdAt: '2026-09-13T13:00:00',
  },
  {
    id: 5,
    title: 'Fix database',
    description: 'Fix the database connection',
    priority: { priority: 'HIGH' },
    targetDate: '2026-09-25',
    status: {
      id: 5,
      name: 'Todo',
      color: 'blue',
      position: 1,
    },
    createdAt: '2026-09-13T14:00:00',
  },
]