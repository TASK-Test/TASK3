import type { Task } from "../types/task";
const API = import.meta.env.VITE_API_URL;

export async function getTasks(): Promise<Task[]> {
  const response = await fetch(`${API}/tasks`);

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return response.json();
}

export async function getTask(id: number): Promise<Task> {
  const response = await fetch(`${API}/tasks/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch task");
  }

  return response.json();
}


export type CreateTaskPayload = {
  title: string
  description: string
  statusId: number
  priority: 'LOW' | 'MEDIUM' | 'HIGH'
  targetDate: string
}
export async function createTask(payload: CreateTaskPayload): Promise<Task> {
  const response = await fetch(`${API}/tasks`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(payload),
  })
  if (!response.ok) {
    throw new Error('Failed to create task')
  }
  return response.json()
}
export async function updateTask(id: number, payload: CreateTaskPayload): Promise<Task> {
  const response = await fetch(`${API}/tasks/${id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(payload),
  })
  if (!response.ok) {
    throw new Error('Failed to update task')
  }

  return response.json()
}
export async function deleteTask(id: number): Promise<void> {
  const response = await fetch(`${API}/tasks/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('Failed to delete task')
  }
}