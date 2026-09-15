import type { Task } from "../types/task";

const API = "/api";

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